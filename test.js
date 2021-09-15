const { Num } = require("example-typescript-package");

if (!new Num(5).add(new Num(6)).val() === 11) {
  throw new Error();
}
