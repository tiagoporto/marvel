module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'standard',
    'prettier',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
  },
}
