module.exports = {
    extends: ['airbnb', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    rules: {
        indent: [2, 4], // 4 spaces for indentation
        'react/jsx-indent': [2, 4], // 4 spaces for indentation
        'react/jsx-indent-props': [2, 4], // 4 spaces for indentation
        'max-len': [2, 120], // 120 max line length
        'class-methods-use-this': 0, // Needed to return JSX from React component methods
        'compat/compat': 2,
        'function-paren-newline': ['error', 'consistent'],
        'no-underscore-dangle': ['error', { allow: ['__typename'] }],
        'no-process-env': 'error', // Use getEnv instead
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref'],
            },
        ],
        'operator-linebreak': ['error', 'after'],
        'no-only-tests/no-only-tests': 'error',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    plugins: [
        'compat',
        'no-only-tests',
    ],
};
