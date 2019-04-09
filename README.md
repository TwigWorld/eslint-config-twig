# Twig Education ESLint Setup

## Installation

1. If you don't already have a package.json file, create one with `npm init` or `yarn init`.
2. Then we need to install everything needed by the config:
`npx install-peerdeps --dev eslint-config-twig`
3. You can see in your package.json there are now a big list of devDependencies.
4. Create a .eslintrc file in the root of your project's directory (it should live where package.json does). Your .eslintrc file should look like this:

```
{
    "extends": [
        "twig"
    ]
}
```

5. Add a script to your package.json to lint your code:

```
"scripts": {
    "lint": "eslint ./src",
},
```

6. Now you can manually lint your code by running yarn run lint

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
