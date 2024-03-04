// const obj1 = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//     e: "e",
//   },
// };

// const stringifiedComplexObject = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObject);

// function recursive() {
//   if (condition) {

//   } else {

//   }
// }
let numeritos = [
  15, 4, 89, 10, 1, 3, 7, 9, 2, 5, 6, 8, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];
// let numerito = 0;

// for (let i = 0; i < numeritos.length; i++) {
//   numerito = numeritos[i];
//   console.log(i, numerito);
// }

function recursive(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNumber = numbersArray[0];
    console.log(firstNumber);
    numbersArray.shift();
    return recursive(numbersArray);
  }
}
recursive(numeritos);

// function recursiveDeepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   let copy = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     copy[key] = recursiveDeepCopy(obj[key]);
//   }

//   return copy;
// }
