/* eslint-env node */
const eslintrc = require('../.eslintrc.json');

module.exports = Object.assign(
  { parser: 'babel' },
  eslintrc.rules['prettier/prettier'][1]
);
