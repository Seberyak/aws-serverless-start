const { DynamoDB } = require('aws-sdk');
const getTodo = async (event) => {
  const db = new DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
  const res = await db.get({ TableName: 'TodoTable', Key: { id } }).promise();

  const todo = res.Item;
  return {
    statusCode: 200,
    body: JSON.stringify(todo, null, 2),
  };
};

module.exports = {
  handler: getTodo,
};
