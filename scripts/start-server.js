const nodemon = require('nodemon');
const { nodemonTitle, YELLOW, RED } = require('./script-colors');

nodemon({
  script: 'server/server.js',
  watch: ['server/'],
  stdout: true,
  // nodeArgs: ['--inspect-brk'],
});

nodemon.on('start', () => {
  if (process.env.NODEMON_RESTART !== 'true') {
    console.info(
      `${nodemonTitle} starting ${YELLOW`\`node ./server/server.js\``}`,
    );
  }
});

nodemon.on('restart', () => {
  console.info(
    `${nodemonTitle} restarting ${YELLOW`\`node ./server/server.js\``}`,
  );
  process.env.NODEMON_RESTART = true;
});

nodemon.on('crash', () => {
  console.info(
    `${nodemonTitle} crashed on script ${RED`\`node ./server/server.js\``}`,
  );
});
