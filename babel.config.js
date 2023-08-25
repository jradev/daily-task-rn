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
            '@navigation': './src/navigation',
            '@views': './src/views',
            '@utils': './src/utils',
            '@app-redux': './src/redux',
            '@assets': './src/assets',
            '@utils': './src/utils'
          },
        },
    ]
],
};
