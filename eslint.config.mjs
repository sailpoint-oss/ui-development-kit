// @ts-check
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import globals from 'globals';

export default [
  {
    ignores: [
      'app/**/*',
      'dist/**/*',
      'release/**/*',
      'src/environments/*',
      'e2e/playwright.config.ts',
      'projects/sailpoint-components/src/lib/sailpoint-sdk.service.ts',
      'node_modules/**'
    ]
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      globals: {
        ...Object.fromEntries(Object.keys(globals.browser).map(key => ([key.trim(), globals.browser[key]]))),
        ...globals.node,
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly'
      },
      parserOptions: {
        project: [
          './tsconfig.serve.json',
          './src/tsconfig.app.json',
          './src/tsconfig.spec.json',
          './e2e/tsconfig.e2e.json',
          './projects/sailpoint-components/tsconfig.lib.json',
          './projects/sailpoint-components/tsconfig.spec.json'
        ],
        createDefaultProgram: false
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs['recommended-requiring-type-checking'].rules,
      ...angular.configs.recommended.rules,
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@angular-eslint/directive-selector': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ]
    }
  },
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      parser: tsparser,
      globals: {
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        jasmine: 'readonly',
        spyOn: 'readonly',
        console: 'readonly'
      },
      parserOptions: {
        project: [
          './src/tsconfig.spec.json',
          './projects/sailpoint-components/tsconfig.spec.json'
        ],
        createDefaultProgram: false
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['e2e/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      globals: {
        __dirname: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly',
        process: 'readonly'
      },
      parserOptions: {
        project: [
          './e2e/tsconfig.e2e.json'
        ],
        createDefaultProgram: false
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser
    },
    plugins: {
      '@angular-eslint/template': angularTemplate
    },
    rules: {
      ...angularTemplate.configs.recommended.rules
    }
  }
];