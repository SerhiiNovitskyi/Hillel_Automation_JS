// hometask1
// create a function that takes one param and inside makes the value Uppercase

function makeUppercase(inputString) {
    if (typeof inputString === 'string') {
      return inputString.toUpperCase();
    } else {
        console.log('Please, enter the string.');
    }
  }
  
  // Example using function:
  const uppercasedString = "Hello, world!";
  const originalNumber = 777;
  console.log(makeUppercase(uppercasedString)); // Prints "HELLO WORLD!"
  makeUppercase(originalNumber); //Displays an error message
  

//  hometask2
//  create js function that add properties for the object, allowing only number

function addNumericProperty(obj, propertyName, numericValue) {
    obj[propertyName] = numericValue;
  }
  
  // Example using function:
  const myObject = {};
  addNumericProperty(myObject, 'age', 25); // Adding the "age" property with a numeric value
  console.log(myObject); // Output object: { age: 25 }
  
  addNumericProperty(myObject, 'name', 'John'); // Adding the "name" property with an incorrect value
  console.log(myObject); // Output the object: { age: 25, name: 'John' }
  

// hometask3
// create JS object with 5 different properties
  const my5Object = {
    name: 'John',
    age: 30,
    city: 'New York',
    isStudent: false,
    hobbies: ['reading', 'cooking', 'hiking']
  };
//   with previously created function add a new property
my5Object.gender = 'Male';

// Output the updated object
console.log(my5Object);

// hometask4
// check the function syntax and if some issues propose
// let sum == function{a, b} (
//   return a + b;
// )
let sum = function(a, b) {
    return a + b;
  };
//   Here's what has been corrected:
//   - Replace == with = to assign the function to the variable sum.
//   - Enclose the parameter list (a, b) in parentheses.
//   - Use curly braces {} to enclose the function body.
//   - Add a semicolon ; at the end to terminate the statement.


