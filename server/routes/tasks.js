module.exports = (server, options, done) => {
  server.get('/tasks', async (request, response) => {
    response.type('application/json').code(200);
    return { success: true };
  });
  done();
};
