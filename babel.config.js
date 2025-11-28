module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets/index',
          '@atoms': './src/ui/atoms/index',
          '@molecules': './src/ui/molecules/index',
          '@organisms': './src/ui/organisms/index',
          '@screens': './src/ui/screens/index',
          '@templates': './src/ui/templates/index',
          '@themes': './src/themes/index',
          '@utils': './src/utils/index',
          '@navigation': './src/navigation/index',
          '@store': './src/stores/index',
          '@hooks': './src/hooks/index',
        },
      },
    ],
  ],
};
