# babel-plugin-ramda-no-useless-merge
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpnavarrc%2Fbabel-plugin-ramda-no-useless-merge.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpnavarrc%2Fbabel-plugin-ramda-no-useless-merge?ref=badge_shield)


> Replaces `R.merge(a, b)` with `{ ...a, ...b }`

## Installation

Using npm

```sh
npm install --save-dev babel-plugin-ramda-no-useless-merge
```

or using yarn

```sh
yarn add babel-plugin-ramda-no-useless-merge
```

## Example

### In

```js
const c = R.merge(a, b);
```

### Out

```js
const c = { ...a, ...b };
```

## Usage

### Via `.babelrc`

```json
{
  "plugins": ["ramda-no-useless-merge"]
}
```

### Via CLI

```shell
babel --plugins ramda-no-useless-merge script.js
```

## Learn More

- [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md) by [@thejameskyle](https://twitter.com/thejameskyle)
- [Using Babel to Codemod your Code](https://youtu.be/Hn6Ca6gzNsw) by [@kentcdodds](https://twitter.com/kentcdodds)
- [Frontend Masters Course - Code Transformation and Linting with ASTs](https://frontendmasters.com/courses/linting-asts/) by [@kentcdodds](https://twitter.com/kentcdodds)
- [AST Explorer](https://astexplorer.net/)

## License

MIT


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpnavarrc%2Fbabel-plugin-ramda-no-useless-merge.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpnavarrc%2Fbabel-plugin-ramda-no-useless-merge?ref=badge_large)