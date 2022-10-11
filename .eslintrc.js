module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
