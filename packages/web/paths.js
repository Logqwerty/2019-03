const path = require('path');

const ROOT = __dirname;

const PATHS = Object.freeze({
  root: ROOT,
  src: path.resolve(ROOT, 'src'),
  public: path.resolve(ROOT, 'public'),
  const: path.resolve(ROOT, 'src/constants.js'),
  components: path.resolve(ROOT, 'src/components'),
  atoms: path.resolve(ROOT, 'src/components/after/atoms'),
  molecules: path.resolve(ROOT, 'src/components/after/molecules'),
  organisms: path.resolve(ROOT, 'src/components/after/organisms'),
});

module.exports = PATHS;
