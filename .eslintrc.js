module.exports = {
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    rules: {
        'compat/compat': 2,
        'default-param-last': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'jsx-a11y/anchor-ambiguous-text': ['error'],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref'],
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                depth: 5,
            },
        ],
        'no-only-tests/no-only-tests': 'error',
        'no-process-env': 'error', // Use getEnv instead
        'no-restricted-properties': [
            2,
            {
                object: 'window',
                property: 'config',
                message:
                    'Please pass configuration variables to the MFE via props or React context instead of using global variables',
            },
        ],
        'no-underscore-dangle': ['error', { allow: ['__typename'] }],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: ['arrow-function'],
            },
        ],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    },
    overrides: [
        {
            files: ['**/*.test.jsx', '**/*.test.js'],
            rules: {
                'compat/compat': 0,
                'react/display-name': 0,
            },
        },
    ],
    plugins: ['compat', 'no-only-tests'],
    settings: {
        polyfills: ['promises'],
        'jsx-a11y': {
            polymorphicPropName: 'as',
        },
    },
};
