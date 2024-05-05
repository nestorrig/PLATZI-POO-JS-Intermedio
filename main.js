const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  }
};

function isObject(obj) {
  return typeof obj === "object" && obj.constructor === Object;
}

function isArray(obj) {
  return typeof obj === "object" && obj.constructor === Array;
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (const key in subject) {
    const keyIsObject = isObject(subject[key]);
    const keyIsArray = isArray(subject[key]);

    if (keyIsArray || keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

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
