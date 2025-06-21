export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
      },
    },
    ignores: ['node_modules', 'dist'],
    rules: {
      no-unused-vars: 'warn',
      no-console: 'off',
    },
  },
]
