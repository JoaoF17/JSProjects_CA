console.log('Hey');
//comment
/*
    Primitive Data types:
.Numbers - Any numbers including numbers with decimals;
.Strings - Text, surrounded by single quotes'..' our double quote "..";
.Boolean - Only has 2 possible values, 'yes' or 'no', 'true' or 'false;
.Null - Intentional absence of a value, (doesnt need quotes)
.Undefined - Also represents absence of value but different use from null (doesnt need quotes either);
.Symbol - 
.Object - Collections of related data

    Concatenation:
.When we chain strings with arithmentic operators (+,-,*,/,%) the last symbol being reminder;

    Properties:
.console.log('length'.length)// Prints 6 because lenght has 6 charactes;

    Methods:
.console.log('hello'.toUpperCase()); // Prints 'HELLO'
.console.log('Hey'.startsWith('H')); // Prints true
.console.log('    Remove whitespace   '.trim()); // Prints Remove whitespace

    Build in objects:
.console.log(Math.random()); // Prints a random number between 0 and 1
.console.log(Math.floor(Math.random()*50)); // Prints a random whole number between 0 and 50 rounded down, to round up use ceil instead of floor
 
    Variables:
.Variables label and store data in memory
.Variables are not values, variables contain values
.Variable key words: var; let; const;
.var firstName = 'Joao'
 console.log(firstName);
.let myName;
 myName = 'Joao';
 console.log(myName);
.Const varaible cannot be reassinged because it is a constant. They also must be assigned a value when declared.
*/

//Mathematical Assignment Operators
let levelUp = 1;
levelUp +=5;
console.log(levelUp); //prints 6

let powerLevel =150;
powerLevel -=100;
console.log(powerLevel); //prints 50


//The Increment and Decrement Operators
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

console.log(gainedDollar); //prints 4
console.log(lostDollar); //prints 49

//Concatenation with variables
let myFirstName ='Joao';

console.log('My name is ' + myFirstName);

//String Interpolation
let myCountry = 'Portugal';
let myAge = 30;

console.log(`I come from ${myCountry}, and I am ${myAge}.`);

//typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean