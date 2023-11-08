const { DynamoDB } = require('aws-sdk');
const deleteTodo = async (event) => {
  const db = new DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  await db
    .delete({
      TableName: 'TodoTable',
      Key: { id },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Todo deleted successfully',
      },
      null,
      2,
    ),
  };
};

module.exports = {
  handler: deleteTodo,
};
