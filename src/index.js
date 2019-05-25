import * as t from "@babel/types";

const isRamdaMerge = node =>
  t.isMemberExpression(node) &&
  t.isIdentifier(node.object, { name: "R" }) &&
  t.isIdentifier(node.property, { name: "merge" });

const isUselessRamdaMerge = node =>
  t.isCallExpression(node) &&
  isRamdaMerge(node.callee) &&
  node.arguments.length === 2;

const createMergeSpread = (a, b) =>
  t.objectExpression([t.spreadElement(a), t.spreadElement(b)]);

export default function() {
  return {
    name: "ramda/no-useless-merge",
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (!isUselessRamdaMerge(node)) return;
        const [a, b] = node.arguments;
        path.replaceWith(createMergeSpread(a, b));
      }
    }
  };
}
