// console.log("gameOver");
// console.log(23);
// console.log("Jonas");

// let firstName ="Lara";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jm = "Jonas Matilda";
// let birthDay;
// let currentYear = 2021;
// let $yearsOld = (birthDay - currentYear) + 27 + 'years';

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "pilot";
// let myCurrentJob = "pilot";

// let job1 = "pilot";
// let job2 = "software developer";

// newFunction();

// function newFunction() {
//     console.log(myFirstJob);
//     console.log(myCurrentJob);
// }

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// // console.log(typeof javascriptIsFun);
// let a = 0;
// let b = 2;
// let c;
// let d = 2 * '4';
// let e = null;
// let year = 2 + d + c;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // error birthYear = 1990;
// //error const job;

// let job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(job);
// console.log(lastName);
// console.log();
// console.log();

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// let tryNotNumber = 2 * 'b';
// console.log(tryNotNumber);
// console.log(typeof tryNotNumber);
// console.log(Boolean(tryNotNumber));

// console.log(Boolean()); //NuN its nothing, "empty space" without space!
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// let a = 1;
// let b = 2;
// let c = 3;

// console.log(Boolean('Jonas'));
// console.log(Boolean({a, b, c}));
// console.log(Boolean('      '));

//////////////////////////defined or not money and height
// const money = 10;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

// // Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

condition ? val1 : val2;
