# Ring it Up

## Dev Environment
### Front End - Expo
We used [Expo](https://expo.io/) to build the React Native app.
```
yarn add expo
expo start
```
### Back End - CDK

https://medium.com/capgemini-norway/destroying-backends-with-amplify-appsync-graphql-api-5521c0e62a4
- *Amplify* is the Javascript library provided by AWS to easily use the services in your client application. It also provides a CLI to get set up and configure settings.
- *AppSync* is a service provided by AWS. It is a GraphQL serverside API and can be connected to AWS Identity and Access Management (IAM) for authenticated API requests.
- *DynamoDB* is a service provided by AWS. It is a DocumentDB in JSON format which automatically is generated by Amplify when you create a GraphQL API model. This is where the GraphQL data is stored.
- *CRUD* is short for “Create, Read, Update, Delete” which often is the minimum requirement for your API, to perform these on the database.
- *GraphQL* is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn’t tied to any specific database or storage engine and is instead backed by your existing code and data.

We use AWS Amplify
```
npm i -g @aws-amplify/cli
amplify init
amplify push
```

```
cd cdk_backend
npm i -g aws-cdk
source .venv/bin/activate
cdk synth
```

deployment
```
cdk deploy -O ../cdk-exports.json
```
