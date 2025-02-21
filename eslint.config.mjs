import antfu from '@antfu/eslint-config';
import pluginJs from '@eslint/js';
import tsEslintParser from '@typescript-eslint/parser';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const commonRules = {
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
};

const typescript = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [tsEslintParser],
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.app.json'],
      },
      node: true,
    },
  },
  languageOptions: {
    ecmaVersion: 2025,
    parserOptions: { project: ['tsconfig.app.json'] },
  },
  rules: {
    'ts/no-unsafe-assignment': 'off',
    'boundaries/no-private': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: 'React' }],
  },
};

const customConfig = [
  {
    ignores: ['node_modules', 'dist', '**/*.test.*', 'src/shared/graphql/types.ts'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  prettierRecommended,
  {
    files: ['**/*.{mjs,js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': hooks,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...hooks.configs.recommended.rules,
      ...commonRules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: typescript.languageOptions,
    settings: {
      ...typescript.settings,
    },
    rules: {
      ...typescript.rules,
    },
  },
  {
    files: ['*.cjs'],
    languageOptions: {
      globals: globals.commonjs,
    },
  },
  {
    files: ['*.ts'],
    languageOptions: {
      parserOptions: { project: ['tsconfig.node.json'] },
    },
    rules: {
      ...commonRules,
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
];

export default antfu({
  ...customConfig,
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  rules: {
    'antfu/top-level-function': 'off',
    'style/semi': 'off',
    'style/member-delimiter-style': 'off',
    'antfu/if-newline': 'off',
    'style/multiline-ternary': 'off',
    'style/brace-style': 'off',
    'style/arrow-parens': 'off',
    'ts/no-unsafe-argument': 'off',
    'ts/no-unsafe-return': 'off',
  },
});
