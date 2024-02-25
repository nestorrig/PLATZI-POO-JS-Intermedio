console.log("Hello World");

const juan = {
  name: "Juan",
  age: 25,
  approvedCourses: ["Curso 1", "Curso 2"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

// juan.addCourse("Curso 3");

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, "Navigator", {
//   value: "Chrome",
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });
// Object.defineProperty(juan, "editor", {
//   value: "VSCode",
//   enumerable: true,
//   writable: false,
//   configurable: true,
// });
// Object.defineProperty(juan, "terminal", {
//   value: "WSL",
//   enumerable: true,
//   writable: true,
//   configurable: false,
// });
// Object.defineProperty(juan, "pruebaNasa", {
//   value: "Extraterrestres",
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));
