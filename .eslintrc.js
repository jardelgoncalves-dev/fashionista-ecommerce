module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['jsx', 'js'] }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'camelcase': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // Link component of Next.js
    'no-param-reassign': 'off',
  },
  overrides: [
    {
      'files': ['pages/_app.js', 'pages/_document.js'],
      'rules': {
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
      }
    },
    {
      'files': ['components/**/*.stories.js'],
      'rules': {
        'import/no-extraneous-dependencies': 'off',
      }
    }
  ]
};
