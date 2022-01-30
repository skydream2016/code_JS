'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'tasty'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:43',
        address,
    }) {
        console.log(
    //         `order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    //    will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngr, ...otherIngr) {
        console.log(mainIngr);
        console.log(otherIngr);
    }
};

/// spread operator 
const arrToTry = [1,3, ...[4,5,6]];
//// rest 
const [a,b, ...others] = [1,2,3,4,5,6];
console.log(a,b,others);

const [pizza, , risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
console.log(pizza, risotto, othersFood);

//////// objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//////////// Functions

const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum);
    }

}
add(2,3)
add(5,3,7,2)

const anyArr = [23,5,7];
add(...anyArr);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


restaurant.orderDelivery({
    time: '22:30',
    address: 'Vm 11',
    mainIndex: 2,
    starterIndex: 2,
});

// const { name, openingHours, categories } = restaurant;
// // console.log(openingHours);

// const { fri } = openingHours;
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(fri);
// // console.log(o, c);

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];

// const [x, y, z] =arr;
// // console.log(x, y, z);
// // console.log(arr);

// let [first, second, third, , five] = restaurant.categories;
// // console.log(first, second);

// [second, first] = restaurant.categories;
// // console.log(first, second);

// [second, first] = [first, second]
// // console.log(first, second);

// // console.log(restaurant.order(2, 0));

// // const [firstItteem, mainIttem] = restaurant.order(inputFirstIttem, inputMainIttem);
// // console.log(firstItteem, mainIttem); // display output

// const nested = [2 , 4, [5, 6]];
// const [i, , j] = nested;
// // console.log(i, j);

// const nested2 = [2 , 4, [5, 6]];
// const [anotherA, , [anotherC, anotherD]] = nested2;
// // console.log(anotherA, anotherC, anotherD);

///// spread operator
// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// const goodArr = [1, 2, ...arr];
// console.log(goodArr);

// console.log(...goodArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// ////// copy arr

// const mainMenuCopy = [...restaurant.mainMenu];

// ///// join

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

/////////// iterables : arr, str, maps, sets, but Not OBJECTS

// const str = 'Andrii';
// // const letters = [...str];
// const letters = [...str, ' ', 'A.'];
// console.log(letters);
// console.log(...letters);
// console.log(...str);

// const ingredients = [prompt('Let\'s make borsch!!!!! ingredient 1?'),
// prompt('Let\'s make borsch!!!!! ingredient 2?'),
// prompt('Let\'s make borsch!!!!! ingredient 3?') ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//////////////////   objects

// const newRestaurant = {founded: 1993, ...restaurant, founder: 'Komandik'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'KomRest';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
