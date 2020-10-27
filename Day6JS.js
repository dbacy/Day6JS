///////////////////////////////////////
// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYeah)
{
    return    2037 - birthYeah;
}

const age1 = calcAge1(1991);


// Function expression
const calcAge2 = function (birthYeah)
{
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);


// Functions Calling Other Functions
function cutFruitPieces(fruit)
{
    return fruit * 4;
}

function fruitProcessor(apples, oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// const scoreDolphines = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphines , scoreKoalas)
//
//
// if (scoreDolphines > scoreKoalas) {
//     console.log('Dolphines wins the trophy ')
// }else if (scoreKoalas > scoreDolphines) {
//     console.log('Koalas win the trophy ')
// }else (scoreDolphines === scoreKoalas); {
//     console.log('Both lose ')
// }

// const scoreDolphines = (97 + 112 + 80) /3
// const scoreKoalas = ( 109 + 95 + 50 ) / 3
// console.log(scoreDolphines,scoreDolphines)
//
//
// if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
//     console.log('Dolphines wins the trophy ')
// }else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy ')
// }else if (scoreDolphines === scoreKoalas && scoreDolphines >= 100 &&
//     scoreKoalas >= 100) {
//     console.log('Both win the trophy ')
// }else {
//     console.log('No one wins the trophy')
// }

// Arrow Function - Test
//the three scores + the three score divided by 3 to get the answer
const calcAvg = (score1 , score2, score3) => (score1 + score2 + score3) /3

// dolphins scores
let scoreDolphins = calcAvg(44,23,71)
//koalas scores
let scoreKoalas = calcAvg(65,54,49)

const checkWinner = function (avgDolphins , avgKoalas) {
    if (avgDolphins >=2* avgKoalas) {
        console.log('Dolphins win (' + avgDolphins + ' vs ' + avgKoalas + ')')
        // can use console.log('Dolphins win (${avgDolphins} vs ${avgKoalas})')
    }else  if (avgKoalas >=2* avgDolphins) {
        console.log('Koalas win (' + avgKoalas + ' vs ' + avgDolphins + ')')
        // can use console.log('Koalas win (${avgKoalas} vs ${avgDolphins})')
    }else {
        console.log('No team wins')
    }
}
checkWinner(scoreDolphins,scoreKoalas)

scoreDolphins = calcAvg(85,54,41)
scoreKoalas = calcAvg(23,34,27)
checkWinner(scoreDolphins,scoreKoalas)



