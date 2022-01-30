'use strict';
// // Variable
// // console.log(me); //undefined
// // console.log(job);  // Cannot access 'job' before initialization
// // console.log(year); // Cannot access 'job' before initialization

// var me = 'Andrii';
// let job = 'Developer';
// const year = 1993;

// // Functions
// // console.log(addDec(2, 3));      // 5
// // console.log(addExp(2, 3));      // Cannot access 'addExp' before initialization
// // console.log(addArrow(2, 3));    // Cannot access 'addExp' before initialization

// function addDec (a, b) {
//     return a + b;
// }

// const addExp = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b; // if VAR 'addArrow is not a function'

// var x = 1;
// let y = 2;
// const z = 3;

// // console.log(window.x === x);
// // console.log(window.y ===y);
// // console.log(window.z === z);

// // This
// // console.log(this);

// const calcAge = function(birthYear) {
//     // console.log(2037 - birthYear);
//     console.log(this); //undefined in strict mode but window in sloopy mode
// }
// // calcAge(1993);

// const calcAgeArrow = birthYear => {
//     // console.log(2037 - birthYear);
//     console.log(this); // window becouse arrow doesnt have this and return this from global scope
// }
// // calcAgeArrow(1993);

// const person = {
//     year: 1993,
//     calcAge: function() {
//         console.log(this);
//     }
// }
// person.calcAge();

// const andrii = {
//     job: 'Developer'
// }

// andrii.calcAge = person.calcAge;

// andrii.calcAge();

// const andrii = {
//     firstName: 'Andrii',
//     lastName: 'Komandik',
//     year: 1993,

//     calcAge: function() {
//         console.log(2037 - this.year);
//         const that = this;

//         const isMillenial = function() {
//             if (that.year >= 1981 && that.year <= 1996) {
//                 console.log(`${that.firstName} are old`);
//             }
//         };
//         isMillenial()
//     },

//     greet: function() {
//         console.log(`Hey ${this.firstName}`)
//     }
// }
// andrii.greet();
// andrii.calcAge();

// // const semen = {
// //     firstName: 'Semen',
// //     year: 1996
// // }

// // semen.greet = andrii.greet;
// // semen.greet();

// const arr = [4, 5, 6];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring of array
// const [x, y, z] = arr;
// console.log(x, y, z);

// let lastName = 'Pupok';
// let oldLastName = lastName;
// lastName = 'Komandik';
// console.log(lastName, oldLastName);

// const Jesica = {
//   firstName: 'Jesica',
//   lastName: 'Williams',
//   age: 21,
// };
// const marriedJesica = Jesica; // new reference

// const jesicaCopy = Object.assign({}, Jesica);

// const restoraunt = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo, Frienxe, Italy',
//   categories: ['Italian', 'Pizerria', 'Vegeterian', 'Organic'],
//   starterMenu: ['Borsch', 'Okroshka', 'Holodec', 'Vareniky', 'Golubci'],
//   mainMenu: ['Pizza', 'Pasta', 'Samogon'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// let [main, , secondary, third] = restoraunt.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// console.log(restoraunt.order(2,0));

// const myObject = {
//   nameOfarr: ['a', 'b', 'c'],

//   myFunction: function(item1, item2) {
//       return [this.nameOfarr[item1], this.nameOfarr[item2]];
//   },
// };
// console.log(myObject.myFunction(0,2));

// const nested =[2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i,j);

// const [i, , [v, k]] = nested;
// console.log(i, v, k);

const restoraunt = {
  name: 'Classico Italiano',
  location: 'Via Angelo, Frienxe, Italy',
  categories: ['Italian', 'Pizerria', 'Vegeterian', 'Organic'],
  starterMenu: ['Borsch', 'Okroshka', 'Holodec', 'Vareniky', 'Golubci'],
  mainMenu: ['Pizza', 'Pasta', 'Samogon'],

  openInHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openInHours, categories } = restoraunt;
console.log();

const {
  name: restourantName,
  openInHours: hours,
  categories: tags,
} = restoraunt;
console.log(restourantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restoraunt;
console.log(menu, starters);

// const aa = 10;
// const bb = 21;
// const cc = 32;

// const x = (aa, bb, cc) => {
//     const z = aa + bb;
//     const y = aa + cc;
//     return [z, y];
// };
// // console.log(x(aa,bb,cc));

// const myFunc = function() {
//     const z = aa + bb;
//     const y = aa + cc;
//     return z,y;
// };
// myFunc();
// // myFunc(aa,bb,cc);
// console.log(myFunc(aa,bb,cc));

// function abc() {
//     const z = aa + bb;
//     const y = aa + cc;
//     return [z, y];
// };

// // abc(aa,bb,cc);
// // console.log(abc());

// let a = 111;
// let b = 999;

// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };
// ({ a, b } = obj);
// console.log(a, b);

// const { fri: {open, close} } = openInHours;
// console.log(open, close);

// const arr = [7, 8 ,9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// // Spreading array by spread operator
// const newArr = [1, 2, ...arr]; 
// console.log(newArr);

// const newMenu = ['xxxxxxxx', ...restoraunt.mainMenu];
// console.log(newMenu);



const myObject = {
name: 'Andrii',
coolmetr: function() {
    return this.name + ' Krasava!!';
},
};

const arr = [1,2,4,5,6,7,7];

function my(array) {
    return [array];
}

console.log(my(...arr));