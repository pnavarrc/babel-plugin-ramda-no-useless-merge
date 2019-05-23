# babel-plugin-ramda-no-useless-merge

> Replaces `R.merge(a, b)` with the `{ ...a, ...b }`

## Installation

Using npm

```sh
npm install --save-dev @pnavarrc/babel-plugin-no-useless-merge
```

or using yarn

```sh
yarn add @pnavarrc/babel-plugin-no-useless-merge
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
  "plugins": ["babel-plugin-ramda-no-useless-merge"]
}
```

### Via CLI

```shell
babel --plugins babel-plugin-ramda-no-useless-merge script.js
```

## Learn More
