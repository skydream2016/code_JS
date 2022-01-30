'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive')

// function logger() {
//     console.log('my name andrii');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice= fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice= fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
/////////////////function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

//function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1993, 'Andrii'));

// const cutPieces = function(fruit) {
//     return fruit * 4;
// }

// const  fruitProcessor = function(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// const res = fruitProcessor(2, 3);
// console.log(res);

// Data structure

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(3991, 2984, 2108, 2021);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Andrii';
// const Andrii = [firstName, 'Komandik', 2037 - 1993, 'pilot', friends];
// console.log(Andrii);

// //Exer
// const calcAge = birthYear => 2037 - birthYear;
// const years = [1963, 1968, 1993, 2001, 2021];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Methods
// Add elements push unsift
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// console.log('push Jay');
// const Pusher = friends.push('Jay'); // add end
// console.log(friends);
// console.log(Pusher); // return 4

// console.log('unshift John');
// const unShifter = friends.unshift('John'); // add begin
// console.log(friends);
// console.log(unShifter); // return 5

// // Remove elements pop shift
// console.log('pop');
// const popper = friends.pop(); // remove last
// console.log(friends);
// console.log(popper); // return popped element

// console.log('shift');
// const shifter = friends.shift(); // remove first
// console.log(friends);
// console.log(shifter); // return shifted

// //////////////add///////////////////////////////////remove////////////////
// //LAST/// push    - засунуть в конец массива     pop   - убрать всплывший в конце
// //FIRST// unshift - сдвиг вправо с добавлением   shift - сдвиг с выпаданием влево

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // -1 dont exist

// // ES6 more modern method!  .include
// friends.push(23);
// console.log(friends.includes('Bob'));   // false dont exist
// console.log(friends.includes('Peter')); // true

// console.log(friends.includes('23')); // false '23' is not 23
// //Dont type coercion. Strict equal must be ===
// console.log(friends.includes(23));  // true because 23 === 23

// if (friends.includes('Steven')) {
//     console.log(`You have a friend called Steven`);
// }

// Objects

// const AndriiiArray = [
//     'Andrii',
//     'Komandik',
//     1993-2037,
//     'software developer',
//     ['Ivan', 'Semen', 'John']
// ];

// // its object literal sintax
// const Andrii = {
//     firstName: 'Andrii', //property is 'firstName' and his value is 'Andrii'
//     lastName: 'Komandik',
//     age: 2037 - 1993,
//     job: 'software developer',
//     friends: ['Ivan', 'Semen', 'John']
// };

// console.log(Andrii);

// console.log(Andrii.lastName); // dot notation
// console.log(Andrii['lastName']); //braket notation

// const nameKey = 'Name';
// console.log(Andrii['first' + nameKey]);
// console.log(Andrii['last' + nameKey]);

// // Inbuild JS function
// const interestedIn = prompt('What do you want motherfucker? Choose between first name and last name!!!');
// console.log(interestedIn);

// if (Andrii[interestedIn]) {
//     console.log(Andrii[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between first name and last name!!!');
// }

// Andrii.location = 'Ukraine'; // add property location with value 'Ukraine'
// Andrii['twitter'] = '@AndriiKomandik';  // the same
// console.log(Andrii);

// // challenge
// // 3 friends   best is Nick

// const Jon = {
//     firstName: 'Jonas',
//     friends: ['Nick', 'Sam', 'Drew']
// };

// console.log(`${Jon.firstName} has the ${Jon.friends.length} friends, and his best friend is called ${Jon.friends[0]}!`);

// Object methods

// const Andrii = {
//     firstName: 'Andrii', //property is 'firstName' and his value is 'Andrii'
//     lastName: 'Komandik',
//     birthYear: 1993,
//     job: 'software developer',
//     friends: ['Ivan', 'Semen', 'John'],
//     hasDriversLicense: true,

//     calcAge: (birthYear) => 2037 - birthYear // method  of the object
// };

// const komandik = {
//     firstName: 'Andrii',
//     lastName: 'Komandik',
//     birthYear: 1993,
//     job: 'pilot',
//     hasDriverslicense: true,

//     yearOld: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.yearOld()}-year old ${this.job}, and he has ${this.hasDriverslicense ? 'a' : 'no'} driver's license!`
//     }

// };

// console.log(komandik.getSummary());
