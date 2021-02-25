module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      'jest-hoist',
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
            'react-native-vector-icons': '@expo/vector-icons',
            '@services/*': './services/*',
            '@hooks/*': './hooks/*',
            '@utils/*': './utils/*',
            '@screens/*': './screens/*',
            '@components/*': './components/*',
            '@assets/*': './assets/*',
            '@types/*': './types/*',
            '@config/*': './config/*',
            '@constant/*': './constant/*',
          },
        },
      ],
    ],
  };
};
