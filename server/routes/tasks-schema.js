const postTasks = {
  method: 'POST',
  url: '/',
  schema: {
    body: {
      title: 'string',
      content: 'string',
    },
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
        },
      },
      500: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
        },
      },
    },
  },
};

const getTasks = {
  method: 'GET',
  url: '/',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
        },
      },
    },
  },
};

module.exports = {
  postTasks,
  getTasks,
};
