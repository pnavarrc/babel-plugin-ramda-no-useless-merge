import pluginTester from "babel-plugin-tester";
import noUselessRamdaMerge from "../src";

pluginTester({
  plugin: noUselessRamdaMerge,
  babelOptions: {
    retainLines: true
  },
  tests: [
    {
      title: "R.merge with 2 identifiers",
      code: "R.merge(a, b)",
      snapshot: true
    },
    {
      title: "R.merge with 2 objects",
      code: "R.merge({ name: 'a' }, { name: 'b' })",
      snapshot: true
    },
    {
      title: "R.merge with R.merge",
      code: `
      R.merge({ name: 'a' }, R.merge(a, b));
      `,
      snapshot: true
    },
    {
      title: "R.merge with more nested R.merge",
      code: `
      R.merge({ name: 'a' }, R.merge(a, R.merge(b, c)));
      `,
      snapshot: true
    },
    {
      title: "R.merge with function arguments",
      code: `
      const c = R.merge(createObject(), getOptions());
      `,
      snapshot: true
    },
    {
      title: "R.merge not being called",
      code: `
      const Rmerge = R.merge;
      `,
      snapshot: false
    },
    {
      title: "R.merge with one argument",
      code: `
      R.merge({ name: 'a' });
      `,
      snapshot: false
    },
    {
      title: "R.merge with 3 arguments",
      code: `
      R.merge({ name: 'a' }, b, c);
      `,
      snapshot: false
    }
  ]
});
