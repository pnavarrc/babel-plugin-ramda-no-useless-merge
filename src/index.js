export default function({ types: t }) {
  const isRamdaMerge = node =>
    t.isMemberExpression(node) &&
    t.isIdentifier(node.object, { name: "R" }) &&
    t.isIdentifier(node.property, { name: "merge" });

  const isUselessRamdaMerge = node =>
    t.isCallExpression(node) && isRamdaMerge(node.callee) && node.arguments.length === 2;

  const createMergeSpread = (a, b) =>
    t.objectExpression([t.spreadElement(a), t.spreadElement(b)]);

  return {
    name: "ramda/no-useless-merge",
    visitor: {
      CallExpression: function(path) {
        if (!isUselessRamdaMerge(path.node)) return;
        const [a, b] = path.node.arguments;
        path.replaceWith(createMergeSpread(a, b));
      },
    },
  };
}
