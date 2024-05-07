module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@services': './src/services',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@types': './src/@types',
        },
      },
    ],
  ],
};
