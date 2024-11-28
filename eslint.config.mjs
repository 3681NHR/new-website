import eslint from '@eslint/js';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist', 'bin', 'build', 'node_modules', 'src/types'],
  },
  js.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  nodePlugin.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      ...reactHooks.configs.recommended.rules,
      'n/no-missing-import': [
        'error',
        {
          tryExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.json5'],
        },
      ],
      'n/no-unsupported-features/node-builtins': [
        'error',
        {
          ignores: ['localStorage'],
        },
      ],
    },
  }
);
