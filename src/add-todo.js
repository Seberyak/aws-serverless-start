const { DynamoDB } = require('aws-sdk');
const { randomUUID } = require('crypto');
const addTodo = async (event) => {
  const db = new DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();

  const id = randomUUID();
  const newTodo = { id, todo, createdAt, completed: false };

  await db
    .put({
      TableName: 'TodoTable',
      Item: newTodo,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo, null, 2),
  };
};

module.exports = {
  handler: addTodo,
};
