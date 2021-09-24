module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: false,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    "eslint:recommended",
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:json/recommended',
  ],
  plugins: [
    'react', 
    'json', 
    'react-hooks', 
    'prettier', 
    'jest', 
    '@typescript-eslint',
    // 'testing-library'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile : false,
  },
  globals: {
    React: true,
    context: true,
    JSX: true,
    describe: true, // for testing
},
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/no-did-update-set-state': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-undef': 'error',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-return-assign': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/media-has-caption': 0,
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
  },
  overrides: [
    {
      files: ['./scripts/**/*.js'],
      rules: {
        'no-console': 0,
      },
    },
    {
      files: ['./src/**/*.tsx', './src/**/*.ts'],
      rules: {
        'no-undef': 'error',
        'no-continue': 1,
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
}
