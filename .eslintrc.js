module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        indent: ["off", 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'func-names': 0,
        'default-case': 0,
        'consistent-return': 0,
        // 'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
