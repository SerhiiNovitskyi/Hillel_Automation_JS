// hometask1
// rewrite to while

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// hometask2
// create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2 and console every time that number

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
      let NotDivide = i;
      console.log(NotDivide);
    }
  }

// hometask3
// create loop with condition from 0 to 10, and jump to the next iteration when i is 5

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }

//hometask4
// create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ', (input) => {
  const number = parseFloat(input);

  if (!isNaN(number)) {
    if (number < 10) {
      console.log('Hello');
    } else {
      console.log('Bye');
    }
  } else {
    console.log('Please, enter the valid number!');
  }

  rl.close();
});