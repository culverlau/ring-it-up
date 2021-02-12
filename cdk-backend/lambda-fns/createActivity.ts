const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import Activity from './Activity';

async function createActivity(activity: Activity) {
    const params = {
        TableName: process.env.ACTIVITY_TABLE,
        Item: activity
    }
    try {
        await docClient.put(params).promise();
        return activity;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}

export default createActivity;
