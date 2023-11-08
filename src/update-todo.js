const { DynamoDB } = require('aws-sdk');
const updateTodo = async (event) => {
  const db = new DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  await db
    .update({
      TableName: 'TodoTable',
      Key: { id },
      UpdateExpression: 'set completed = :completed',
      ExpressionAttributeValues: { ':completed': true },
      ReturnValues: 'ALL_NEW',
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Todo updated successfully',
      },
      null,
      2,
    ),
  };
};

module.exports = {
  handler: updateTodo,
};
