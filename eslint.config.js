import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        ignores: ['dist', 'build', 'node_modules'],
    },
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
            },
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            vue,
            prettier,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            'prettier/prettier': 'warn',
            'no-console': 'warn',
            'no-debugger': 'error',
            'eqeqeq': ['error', 'always'],
            'no-else-return': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/multi-word-component-names': 'off',
        },
    },
];
