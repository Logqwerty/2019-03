const path = require('path');
const PATHS = require('../paths');

const ROOT = path.resolve(__dirname, '..');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(ROOT, PATHS.src),
      '@const': path.resolve(ROOT, PATHS.const),
      '@atoms': path.resolve(ROOT, PATHS.atoms),
      '@molecules': path.resolve(ROOT, PATHS.molecules),
      '@organisms': path.resolve(ROOT, PATHS.organisms),
      '@helpers': path.resolve(ROOT, PATHS.helpers),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
  },
};
