const nodemon = require('nodemon');

const tagged = (strings, ...values) =>
  strings.reduce(
    (memo, string, index) => memo + string + (values[index] || ''),
    '',
  );

const fg = number => (...args) => `\x1b[${number}m${tagged(...args)}\x1b[0m`;
const YELLOW = fg(33);
const GREEN = fg(32);
const RED = fg(31);

const nodemonTitle = GREEN`[nodemon]`;

nodemon({
  script: 'server/server.js',
  watch: ['server/'],
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
