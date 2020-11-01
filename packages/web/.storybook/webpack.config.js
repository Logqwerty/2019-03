const path = require('path');
const PATHS = require('../paths');

const ROOT = path.resolve(__dirname, '..');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(ROOT, PATHS.src),
      '@reducer': path.resolve(ROOT, PATHS.reducer),
      '@const': path.resolve(ROOT, PATHS.const),
      '@atoms': path.resolve(ROOT, PATHS.atoms),
      '@molecules': path.resolve(ROOT, PATHS.molecules),
      '@organisms': path.resolve(ROOT, PATHS.organisms),
      '@pages': path.resolve(ROOT, PATHS.pages),
      '@helpers': path.resolve(ROOT, PATHS.helpers),
      '@contexts': path.resolve(ROOT, PATHS.contexts),
      '@fixtures': path.resolve(ROOT, PATHS.fixtures),
      '@hooks': path.resolve(ROOT, PATHS.hooks),
      '@queries': path.resolve(ROOT, PATHS.queries),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
  },
};
