const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function getActivityById(activityId: String) {
    const params = {
        TableName: process.env.ACTIVITY_TABLE,
        Key: { id: activityId }
    }
    try {
        const { Item } = await docClient.get(params).promise()
        return Item
    } catch (err) {
        console.log('DynamoDB error: ', err)
    }
}

export default getActivityById
