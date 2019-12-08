const { getTasks /* postTasks */ } = require('./tasks-schema');

module.exports = (server, options, done) => {
  server.route({
    ...getTasks,
    handler: async (request, response) => {
      response.type('application/json').code(200);
      return { success: true };
    },
  });

  // server.route({
  //   ...postTasks,
  //   handler: async (request, response) => {
  //     const {
  //       body: { title, content },
  //     } = request;
  //   },
  // });

  done();
};
