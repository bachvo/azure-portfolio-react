module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
};