const server = require('fastify')();

server.register(require('./routes/tasks'), { prefix: '/api' });

server.listen(5000, (error, address) => {
  if (error) throw error;
  console.info(`Server listening on ${address}.`);
  if (
    process.env.NODE_ENV === 'development' &&
    process.env.NODEMON_RESTART !== 'true'
  ) {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const clipboardy = require('clipboardy');

    clipboardy.write(address);
    console.info('Address written to clipboard.');
  }
});
