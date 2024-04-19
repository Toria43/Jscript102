'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive! :D')

//const interface = 'Audio';
//const private = 534;

/*functions*/
function logger() {
    console.log('My name is Victory');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples,pineapples) {
    console.log(apples, pineapples);
    const juice = `Juice with ${apples} apples and ${pineapples} pineapples.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const applePineappleJuice = fruitProcessor(2, 4);
console.log(applePineappleJuice);

const num = Number ('23');

/*Function Declaration*/
//You can call a function declaration before ypu define it although it is not advisable
function calcAge1(birthYear) {
   // const age = 2037 - birthYear;
   // return age 
   return 2037 - birthYear; 
}

const age1 = calcAge1 (1991);
console.log(age1);

/*Function  Expression*/
//You cannot call a function expression before defining it
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

/*Arrow Function*/
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilretirement = (birthYear, firstName) => {
 const age = 2037 - birthYear;
 const retirement = 65- age;
 return retirement;
 return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilretirement(1991, 'Chole'));
console.log(yearsUntilretirement(1980, 'Phoebe'));

/*Call a function calling other functions*/
function cutFruitPieces (fruit) {
    return fruit * 4;
}
function fruitProcessor(apples,pineapples) {
    const applePieces = cutFruitPieces(apples);
    const pineapplePieces = cutFruitPieces(pineapples);

    const juice = `Juice with ${applePieces} apples and ${pineapplePieces} pineapples.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

/*Challenge 1*/
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage);
//Value 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins>= 2 * avgKoalas){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas>= 2 * avgKoalas) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//Value 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

/*Arrays*/
const friend1 = 'Timmy';
const friend2 = 'Joy';
const friend3 = 'Tobi';

const friends = ['Timmy', 'Joy', 'Tobi'];
console.log(friends)

const year = new Array(1990, 1995, 2000, 2003);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'Elizabeth';
console.log(friends);
// you cannot mutatate all at once e.g friends = ['Bob',  'Chole']

const firstName= 'Victory';
const victory = [firstName, 'Agholor', 2024 - 2003, 'student', friends];
console.log(victory);
console.log(victory.length);

//Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1995, 2000, 2003, 2015];

const old1 = calcAge(years[0]);
const old2 = calcAge(years[1]);
const old3 = calcAge(years[years.length - 1]);
console.log(old1, old2, old3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

/*Methods(Basic Array Operators)*/
const friends = ['Timmy', 'Joy', 'Tobi'];
friends.push('Elizabeth');
console.log(friends);





























































