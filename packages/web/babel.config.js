const plugins = [
  [
    '@babel/plugin-transform-modules-commonjs',
    {
      allowTopLevelThis: true,
    },
  ],
];

module.exports = { plugins };
