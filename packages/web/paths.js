const path = require('path');

const ROOT = __dirname;

const PATHS = Object.freeze({
  root: ROOT,
  src: path.resolve(ROOT, 'src'),
  public: path.resolve(ROOT, 'public'),
  reducer: path.resolve(ROOT, 'src/rootReducer.js'),
  const: path.resolve(ROOT, 'src/constants.js'),
  components: path.resolve(ROOT, 'src/components'),
  atoms: path.resolve(ROOT, 'src/components/after/atoms'),
  molecules: path.resolve(ROOT, 'src/components/after/molecules'),
  organisms: path.resolve(ROOT, 'src/components/after/organisms'),
  pages: path.resolve(ROOT, 'src/pages'),
  helpers: path.resolve(ROOT, 'src/common/helpers'),
  contexts: path.resolve(ROOT, 'src/contexts'),
  fixtures: path.resolve(ROOT, 'src/__test__/fixtures'),
  hooks: path.resolve(ROOT, 'src/hooks'),
  queries: path.resolve(ROOT, 'src/queries'),
});

module.exports = PATHS;
