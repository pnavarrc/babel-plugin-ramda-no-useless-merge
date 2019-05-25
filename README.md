# babel-plugin-ramda-no-useless-merge

> Replaces `R.merge(a, b)` with `{ ...a, ...b }`

## Installation

Using npm

```sh
npm install --save-dev @pnavarrc/babel-plugin-ramda-no-useless-merge
```

or using yarn

```sh
yarn add @pnavarrc/babel-plugin-ramda-no-useless-merge
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
