//A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

//Function Declarations
function getReminder() {
    console.log('Water the plants.');
  }

// Calling a function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  sayThanks();

//Paramenters and Arguments
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Joao');

//Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList();

//Return
function monitorCount(rows, columns) {
    return rows*columns;
  }
  
const numOfMonitors = monitorCount(5,4);
  
console.log (numOfMonitors);

//Function expressions
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//Arrow Functions

//Original
const plantNeedsWater = function(day) {}
//With Arrow Functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

