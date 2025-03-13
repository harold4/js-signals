// eslint.config.js (Flat config - CommonJS)
module.exports = [
    {
        files: ['*.js'],
        processor: 'eslint-processor',
        rules: {
            'no-console': 'warn',
        },
        parserOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
