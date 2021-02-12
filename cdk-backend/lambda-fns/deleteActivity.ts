const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function deleteActivity(activityId: string, username: string) {
    const params = {
        TableName: process.env.ACTIVITY_TABLE,
        Key: {
          id: activityId
        },
        ConditionExpression: '#username = :authenticatedUser',
        ExpressionAttributeNames: { '#username': 'username' },
        ExpressionAttributeValues: { ':authenticatedUser': username }
    }
    try {
        await docClient.delete(params).promise()
        return activityId
    } catch (err) {
        console.log('DynamoDB error: ', err)
        return null
    }
}

export default deleteActivity;
