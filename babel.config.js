module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: true,
        },
      ],
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
