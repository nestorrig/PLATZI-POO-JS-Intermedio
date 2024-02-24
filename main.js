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

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
  value: "Extraterrestres",
  writable: true,
  configurable: true,
  enumerable: true,
});
