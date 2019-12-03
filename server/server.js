const path = require('path');
const server = require('fastify')();

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  const fastifyStatic = require('fastify-static');
  server.register(fastifyStatic, {
    root: path.resolve(__dirname, '../dist'),
  });
}

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
