const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const PATHS = require('./paths');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, PATHS.src),
    '@reducer': path.resolve(__dirname, PATHS.reducer),
    '@const': path.resolve(__dirname, PATHS.const),
    '@atoms': path.resolve(__dirname, PATHS.atoms),
    '@molecules': path.resolve(__dirname, PATHS.molecules),
    '@organisms': path.resolve(__dirname, PATHS.organisms),
    '@pages': path.resolve(__dirname, PATHS.pages),
    '@helpers': path.resolve(__dirname, PATHS.helpers),
    '@contexts': path.resolve(__dirname, PATHS.contexts),
    '@fixtures': path.resolve(__dirname, PATHS.fixtures),
    '@hooks': path.resolve(__dirname, PATHS.hooks),
    '@queries': path.resolve(__dirname, PATHS.queries),
  }),
);
