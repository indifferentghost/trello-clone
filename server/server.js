const server = require('fastify')();

server.register(require('./routes/tasks'), { prefix: '/api' });

const PORT = process.env.PORT || 5000;

server.listen(PORT, async (error, address) => {
  if (error) throw error;
  console.info(`Server listening on ${address}.`);

  if (
    process.env.NODE_ENV === 'development' &&
    process.env.NODEMON_RESTART !== 'true'
  ) {
    const { default: clipboardy } = await import('clipboardy');
    await clipboardy.write(address);
    console.info('Address written to clipboard.');
  }
});
