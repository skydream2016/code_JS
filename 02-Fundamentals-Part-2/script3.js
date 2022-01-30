'use strict';

// const temps1 = ['error', 3, -2, 6, 17, 'error', -27, 0, 130];
// const temps2 = [-130, -12, -34, -45, -3, 0, 23];

// const calcTempAmplitude = function (a, b) {
//   const temps = a.concat(b);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     // if (typeof curTemp !== 'number') continue;
//     // console.log(typeof curTemp);
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temps1, temps2);
// console.log(amplitude);

const convertor = function () {
  const measurment = {
    value: Number(prompt('What is the temerature in celcius now')),
    name: 'temperature',
    units: 'celsius',
  };
  //   console.table(measurment);
  //   console.warn(measurment);
  //   console.error(measurment);
  const inKalv = Number(measurment.value) + 273;
  return inKalv;
};

console.log(convertor());
