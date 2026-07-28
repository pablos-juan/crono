import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
  {
    ignores: ['eslint.config.js', '.svelte-kit/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Reglas de Standard
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'svelte/no-navigation-without-resolve': 'off'
    }
  }
]