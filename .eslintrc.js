module.exports = {
  root: true,
  // The rule set that comes last overrides previous one
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
    'react-app/jest'
  ],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-console': 'warn'
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
