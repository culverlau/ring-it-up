# Ring it Up
Ring it Up is an app used to track exercise and compete with friends in workout volume and quantity.
The app is built in React Native built with [Expo](https://expo.io/), connected via [Amplify](https://aws.amazon.com/amplify/) to an AWS Backend deployed with [CDK](https://aws.amazon.com/cdk/) running a [lambda](https://aws.amazon.com/lambda/)-backed [GraphQL](https://graphql.org/) API managed via [AppSync](https://aws.amazon.com/appsync/).

## Dev Setup
Clone the repo and navigate to it.
```
$ git clone git@github.com:culverlau/ring-it-up.git
$ cd ring-it-up
```

#### Amplify
You should install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) if you don't have it yet.
Then, install `amplify`.
```
$ npm i -g @aws-amplify/cli
```

Sign into amplify with `amplify configure`.
That will guide you through making an amplify IAM user on your AWS account.

Now we can init our app with `amplify init`.
You will be prompted asking whether you want to use an existing environment.
Each developer should have their own environment, so push `n` and type your environment name when prompted.
Select `AWS profile` as the authentication method likely want and use your personal `default` profile.
```
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? No
? Enter a name for the environment devalex
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use default
```
#### CDK
You should install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) if you don't have it yet.
Then, install `cdk`.
```
$ npm i -g aws-cdk
```

If you've never used AWS CDK with your AWS profile, you will need to [bootstrap CDK](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html).
Then deploy the backend with cdk.
```
cd cdk-backend
source .venv/bin/activate
cdk deploy
```

## Staging
This assumes you have completed the dev setup detailed above.
First, get the credentials for `amplify-ring-it-up-staging` from Alex.
Add those credentials to your AWC CLI by adding the following to `~/.aws/credentials`.
```
[amplify-ring-it-up-staging]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
```

Then run `amplify init` from inside the project directory and select `staging`.
When prompted, select `AWS profile` and choose `amplify-ring-it-up-staging` from the list.
This logs you in as the staging IAM user.
For cdk, append all cdk commands with `--profile amplify-ring-it-up-staging`.

## Production Deployment
TODO

## Other
Remove an amplify env `amplify env remove <environment name>`.
