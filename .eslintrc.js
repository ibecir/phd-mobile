module.exports = {
  root: true,
  extends: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 0,
        'react-native/no-inline-styles': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
