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

// const firstName= 'Victory';
// const victory = [firstName, 'Agholor', 2024 - 2003, 'student', friends];
// console.log(victory);
// console.log(victory.length);

//Exercise
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1995, 2000, 2003, 2015];

// const old1 = calcAge(years[0]);
// const old2 = calcAge(years[1]);
// const old3 = calcAge(years[years.length - 1]);
// console.log(old1, old2, old3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

/*Methods(Basic Array Operators)*/
const friend = ['Timmy', 'Joy', 'Tobi'];
// Add Elements
const newLength = friend.push('Elizabeth');
console.log(friend);
console.log (newLength);

friend.unshift('Simi');
console.log(friend);
// Remove Elements
friend.pop(); //Last
const popped = friend.pop();
console.log(popped);
console.log(friend);

friend.shift(); //First
console.log(friend);

console.log(friend.indexOf('Joy'));
console.log(friend.indexOf('Simi'));

friends.push(24);
console.log(friend.includes('Joy'));
console.log(friend.includes('Simi'));
// this wont work because 24 to string is different from 24 to number and it would give a FALSE
console.log(friend.includes('24'));

if (friend.includes('Joy')) {
    console.log('You have a friend called Joy!')
}


/*Challenge 2*/
/* FROM CHALLENGE 5
const bill = 100;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
const calcTip = function (bill) {
    return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
// Alternatively, const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


/*Objects*/
// objects are used to group variables that belong together, and its order do not matter at all
// const victoryArray = [
//     'Victory',
//     'Agholor',
//     2040 - 2003,
//     'student',
//     ['Timmy', 'Tobi', 'Joy']
// ];
/* OBJECT LITERAL SENTENCE*/
const vicky = {
    firstName: 'Victory',
    lastName: 'Agholor',
    age: 2037-2003,
    job: 'teacher',
    friends: ['Timmy', 'Tobi', 'Joy']
};
console.log(vicky);

/*Dot Notation - can only use real property name*/
console.log(vicky.lastName);
/*Bracket Notation*/
console.log(vicky['lastName']);

const nameKey = 'Name';
console.log(vicky['first' + nameKey]);
console.log(vicky['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Vicky? Choose between firstName, lastName, age, job, friends');
if (vicky[interestedIn]) {
console.log(vicky[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}
vicky.location = 'Nigeria';
vicky['twitter'] = '@victoryagholor';
console.log(vicky);

console.log(`${vicky.firstName} has ${vicky.friends.length}, and her best friend is called ${vicky.friends[0]}`);

/* Object Methods*/
const vick = {
    firstName: 'Victory',
    lastName: 'Agholor',
    birthYear: 2003,
    job: 'doctor',
    friends: ['Timmy', 'Tobi', 'Joy'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age; 
     },
     getSummary: function(){
        return`${this.firstName} is a ${this.calcAge()}-years old ${vick.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
     }
    // calAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    
};
console.log(vick.calcAge());

console.log(vick.age);
console.log(vick.age);
console.log(vick.age);

// console.log(vick.calAge(1991));
// console.log(vick['calAge'](1991));
// Challenge
// Vick is a 34 year old doctor ans she has a driver's license
console.log(vick.getSummary());


/*Challenge #3*/

const mark = {
    fullName: 'Mark Miller',
    mass: "78",
    height: "1.69",
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi; 
     }
};
const john = {
    fullName: 'John Smith',
    mass: "92",
    height: "1.95",
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi; 
     }
};
mark.calcBMI();
john.calcBMI();

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
     };

/*Loops*/
//repetitions: 
// console.log('Exquisite repitition 1');
// console.log('Exquisite repitition 2');
// console.log('Exquisite repitition 3');
// console.log('Exquisite repitition 4');
// console.log('Exquisite repitition 5');
// console.log('Exquisite repitition 6');
// console.log('Exquisite repitition 7');
// console.log('Exquisite repitition 8');
// console.log('Exquisite repitition 9');
// console.log('Exquisite repitition 10');
/* forLOOP */
for(let rep = 1; rep <= 10;
    //rep = rep + 1
    rep++) {
console.log(`Exquisite repitition ${rep}`);
    };

/*Looping array*/
const victory = [
    'Victory',
    'Agholor',
    2040 - 2003,
    'student',
    ['Timmy', 'Tobi', 'Joy'],
    true
];
const types = [];
// console.log(victory[0]);
// console.log(victory[1]);
// .
// .
// .
// console.log(victory[4]);
// victory[5] doesn't exist
for(let i = 0; i < victory.length; i++) {
 // reading for victory array
    console.log(victory[i], typeof victory[i]);
//filing types array
//types[i] = typeof victory[i];
     types.push(typeof victory[i]);
    }
console.log(types);

const years = [1991, 2003, 2007, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2030 - years[i]);
}
console.log(ages);

// Continue and Break statement
console.log('---ONLY STRINGS---')
for(let i = 0; i < victory.length; i++) {
    if (typeof victory[i] !== 'string') continue;

    console.log(victory[i], typeof victory[i]);
}
console.log('---BREAK WITH NUMBER---')
for(let i = 0; i < victory.length; i++) {
    if (typeof victory[i] === 'number') break;

    console.log(victory[i], typeof victory[i]);
}

/* LOOPING BACKWARDS */
const chole = [
    'Chole',
    'Garret',
    2040 - 2004,
    'teacher',
    ['Theodore', 'Tori', 'Justin']
];
//4, 3, ..., 0
for(let i = chole.length - 1; i >= 0; i--) {
    console.log(i, chole[i]);
}

/*LOOP IN A LOOP*/
for (let exercise = 1; exercise < 4;  exercise++) {
    console.log(`-------- Starting Exercise ${exercise}`);

for (let rep = 1; rep < 6;  rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`);
}
}

/* whileLOOP */
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Exquisite repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}















/*
// Print “Number is even” if the number is divisible by 2.
// Else print “Number is odd” if the number returns a remainder when divided by 2.

const number = 20;

if (number % 2 === 0) {
    console.log(`${number} is even!`);
} else {
    console.log(`${number} is odd!`);
}*/