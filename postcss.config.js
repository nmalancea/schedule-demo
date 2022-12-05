// these are strictly webpack dependencies
/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  sourceMap: true,
  plugins: [
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
  ],
};
