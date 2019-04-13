module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
      },
  },
  rules: {  
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  settings: {
      react: { version: 'detect' },
  },
};