module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // do some additional things with it
  rules: {
    'react/display-name': 'off',
  },
  // Disable import/namespace due to https://github.com/facebook/react-native/issues/28549
  // By setting delimiters to `\|/`, this ignore is supported on Windows too
  settings: {
    'import/ignore': ['node_modules(\\\\|/)react-native(\\\\|/)index\\.js$'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
