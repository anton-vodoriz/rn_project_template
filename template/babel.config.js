module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@assets': './src/assets',
            '@entities': './src/entities',
            '@features': './src/features',
            '@processes': './src/processes',
            '@shared': './src/shared',
            '@widgets': './src/widgets',
          },
        },
      ],
    ],
  };
};
