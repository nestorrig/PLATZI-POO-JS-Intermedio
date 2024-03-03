const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

const stringifiedComplexObject = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObject);