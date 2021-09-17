module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
    es6: true
  },
  ignorePatterns: ['node_modules', 'build'],
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-console': 'off'
  }
}
