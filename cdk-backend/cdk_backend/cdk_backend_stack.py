import json

from aws_cdk import core
from aws_cdk import aws_appsync
from aws_cdk import aws_dynamodb
from aws_cdk import aws_lambda
from aws_cdk import aws_cognito


class CdkBackendStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # ugly, but we need to read user_pool_id from amplify's aws-exports.js file
        with open('../aws-exports.js') as dataFile:
            data = dataFile.read()
            obj = data[data.find('{'): data.rfind('}')+1]
            aws_exports = json.loads(obj)
        user_pool_id = aws_exports["aws_user_pools_id"]

        # use that user_pool_id to define a cdk struct representing it
        user_pool = aws_cognito.UserPool.from_user_pool_id(
            self, 'amplify_user_pool', user_pool_id)

        api = aws_appsync.GraphqlApi(
            self, 'ring-it-up-api',
            name='ring-it-up-api',
            schema=aws_appsync.Schema.from_asset('graphql/schema.graphql'),
            authorization_config=aws_appsync.AuthorizationConfig(
                default_authorization=aws_appsync.AuthorizationMode(
                    authorization_type=aws_appsync.AuthorizationType.API_KEY,
                    api_key_config=aws_appsync.ApiKeyConfig(expires=core.Expiration.after(core.Duration.days(365)))
                ),
                additional_authorization_modes=[aws_appsync.AuthorizationMode(
                    authorization_type=aws_appsync.AuthorizationType.USER_POOL,
                    user_pool_config=aws_appsync.UserPoolConfig(user_pool=user_pool)
                )]
            )
        )

        # Prints out the AppSync GraphQL API URL to the ternminal
        core.CfnOutput(self, "aws_appsync_graphqlEndpoint",
                       value=api.graphql_url)

        # Prints out the AppSync GraphQL API key to the terminal
        core.CfnOutput(self, "aws_appsync_apiKey",
                       value=api.api_key)

        # Prints out the base authentication type for API
        core.CfnOutput(self, "aws_appsync_authenticationType",
                       value=str(aws_appsync.AuthorizationType.API_KEY))

        api_lambda = aws_lambda.Function(
            self, 'AppSyncBlogHandler',
            runtime=aws_lambda.Runtime.NODEJS_12_X,
            handler='main.handler',
            code=aws_lambda.Code.from_asset('lambda-fns'),
            memory_size=1024
        )

        # Set the new Lambda function as a data source for the AppSync API
        lambda_datasource = api.add_lambda_data_source('lambdaDatasource', api_lambda)

        lambda_datasource.create_resolver(
            type_name="Query",
            field_name="getActivityById"
        )

        lambda_datasource.create_resolver(
            type_name="Query",
            field_name="listActivities"
        )

        lambda_datasource.create_resolver(
            type_name="Mutation",
            field_name="createActivity"
        )

        lambda_datasource.create_resolver(
            type_name="Mutation",
            field_name="deleteActivity"
        )

        lambda_datasource.create_resolver(
            type_name="Mutation",
            field_name="updateActivity"
        )

        activity_table = aws_dynamodb.Table(
            self, 'CDKPostTable',
            removal_policy=core.RemovalPolicy.DESTROY,
            billing_mode=aws_dynamodb.BillingMode.PAY_PER_REQUEST,
            partition_key={
                "name": 'id',
                "type": aws_dynamodb.AttributeType.STRING,
            }
        )

        # enable the Lambda function to access the DynamoDB table (using IAM)
        activity_table.grant_full_access(api_lambda)

        # Create an environment variable that we will use in the function code
        api_lambda.add_environment('ACTIVITY_TABLE', activity_table.table_name)
