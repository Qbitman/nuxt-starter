module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  rules: {
    'unicorn/number-literal-case': 'off',
    'dot-notation': 'off',
    'object-shorthand': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-inferrable-types': 'off',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
