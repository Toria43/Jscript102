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