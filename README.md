# Twig Education ESLint Setup

## Installation

1. If you don't already have a package.json file, create one with `npm init` or `yarn init`.
2. Then install everything needed by the config:
`npx install-peerdeps --dev eslint-config-twig`
3. Create a .eslintrc config file in the root of your project if you don't have one already and add the `twig` config to it.

```
{
    "extends": [
        "twig"
    ]
}
```

4. Add a script to your package.json to lint your code:

```
"scripts": {
    "lint": "eslint ./",
},
```

5. The `twig` eslint config uses [eslint-config-compat](https://www.npmjs.com/package/eslint-plugin-compat). This will lint your code for browser compatibility. There are default settings but we recommend adding these settings to your package.json file for Twig Science projects:

```
"browserslist": [
    "defaults",
    "ios_saf >= 14",
    "not op_mini all"
]
```

6. Now you can manually lint your code by running `yarn lint`

## Settings

If you'd like to overwrite the eslint settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```
{
  "extends": [
    "twig"
  ],
  "rules": {
    "no-console": 2,
  }
}
```
