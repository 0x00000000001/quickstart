module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Optional: 'readonly',
    MapType: 'readonly',
    BigInt: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.test.json'],
  },
  plugins: ['@typescript-eslint', 'no-only-tests'],
  rules: {
    'arrow-body-style': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'no-continue': 0,
    'no-console': 1,
    'default-case': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-assignment': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
    'import/order': 0,
    'consistent-return': 0,
    'prefer-destructuring': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-promise-executor-return': 0,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    'no-warning-comments': 1,
    '@typescript-eslint/no-duplicate-enum-values': 1,
    'no-only-tests/no-only-tests': 1,
  },
  overrides: [
    {
      files: ['**/__tests__/**', './src/tests/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
      },
    },
  ],
};
