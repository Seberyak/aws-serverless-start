const { DynamoDB } = require('aws-sdk');
const getTodos = async () => {
  const db = new DynamoDB.DocumentClient();
  const res = await db.scan({ TableName: 'TodoTable' }).promise();

  const todos = res.Items;
  return {
    statusCode: 200,
    body: JSON.stringify(todos, null, 2),
  };
};

module.exports = {
  handler: getTodos,
};
