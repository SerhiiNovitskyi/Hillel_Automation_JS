// homtask #1
// create array with 10 elements
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//hometask #2
//create a function that will add value to array under index 500

function addToIndex500(array, value) {
    array[500] = value;
  }
  
  // Create an empty array
  const myArray2 = [];
  
  // Call the function to add a value at index 500
  addToIndex500(myArray2, "Hello, World!");
  
  console.log(myArray2[500]); // "Hello, World!"

  //hometask #3
  // create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers
  function categorizeElements(arr) {
    const stringsArray = [];
    const numbersArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        stringsArray.push(arr[i]);
      } else if (typeof arr[i] === 'number') {
        numbersArray.push(arr[i]);
      }
    }
  
    return { strings: stringsArray, numbers: numbersArray };
  }
  
  // Example array with mixed data types
  const mixedArray = [1, 'apple', 2, 'banana', 'cherry', 3, 'date', 4, 5];
  
  // Call the function to categorize the elements
  const categorized = categorizeElements(mixedArray);
  
  console.log(categorized.strings); // ['apple', 'banana', 'cherry', 'date']
  console.log(categorized.numbers); // [1, 2, 3, 4, 5]

  
  