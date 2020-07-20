//If Statement
let sale = true

if (sale) {
    console.log ('I am rich');
}

//If...Else Statement
let coffeeGood = true;
coffeeGood = false;

if (coffeeGood) {
  console.log('Buy');
} else {
  console.log('Do not buy')
}

//Comparisson operators (=== is equal to) (!== is not equal to), all comparison statements evaluate to either true or false
let hungerLevel = 7;

if (hungerLevel>7) {
    console.log('Time to eat');
} else {
    console.log('We can eat later!');
}

//Logical Operators (&& and; || or; ! not,bang)
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood==='sleepy' && tirednessLevel>8) {
    console.log('Time to sleep');
} else {
    console.log('Not bad time yet');
}

//Truthy and Falsy statements (0; "" ''; null; undefined; NaN)
let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Example 2: Short hand
let tool = '';

let writingUtensil = tool ||'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`); //pen will be assingned

//Using Ternary to replace if...else statements
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
//condition before "?"; Two expressions after it and separeted by ?; If the condition is met the first expression executes otherwise the second will.
//'is this true' ? 'yes' : 'no'

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Else if Statements (always come after an if statement and ends in else-> if>else if>else)
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season==='winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season==='fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season==='summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

//The switch keyword (Faster way to do 'else if' statements; important to have BREAK in between the cases or it will print/log all of them)
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
   console.log('You get the silver medal!');
    break; 
  case 'third place':
    console.log('You get the bronze medal!');
   break; 
  default:
    console.log('No medal awarded.')
    break;
}



