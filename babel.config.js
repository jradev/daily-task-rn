module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.jsx', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@app-redux': './src/redux'
          },
        },
    ]
],
};
