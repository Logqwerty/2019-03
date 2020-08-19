const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const PATHS = require('paths');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, PATHS.src),
    '@const': path.resolve(__dirname, PATHS.const),
    '@atoms': path.resolve(__dirname, PATHS.atoms),
    '@molecules': path.resolve(__dirname, PATHS.molecules),
    '@organisms': path.resolve(__dirname, PATHS.organisms),
  }),
);
