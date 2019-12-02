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

module.exports = {
  YELLOW,
  GREEN,
  RED,
  nodemonTitle,
};
