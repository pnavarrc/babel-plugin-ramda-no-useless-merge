# babel-plugin-ramda-no-useless-merge

> Replaces `R.merge(a, b)` with `{ ...a, ...b }`

Why?

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

- https://babeljs.io/docs/en/next/
- https://babeljs.io/docs/en/next/plugins
- https://github.com/jamiebuilds/babel-handbook
- YouTube
- Front-end masters course on AST
- AST Explorer

## License

MIT
