module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          extensions: [
            '.ts',
            '.tsx',
            '.ios.tsx',
            '.android.tsx',
            '.js',
            '.ios.js',
            '.android.js',
          ],
          root: ['./'],
          alias: {
            '@services/*': './services/*',
            '@hooks/*': './hooks/*',
            '@utils/*': './utils/*',
            '@screens/*': './screens/*',
            '@components/*': './components/*',
            '@assets/*': './assets/*',
            '@typings/*': './typings/*',
            '@config/*': './config/*',
          },
        },
      ],
    ],
  };
};
