function isUpperCase(str) {
    // Check if the string is empty or doesn't have any letters
    if (!str || !/[a-zA-Z]/.test(str)) {
      return false;
    }
  
    // Check if all characters in the string are uppercase
    return str === str.toUpperCase();
  }
  
  // Example usage:
  // console.log(isUpperCase("HELLO"));    // true
  // console.log(isUpperCase("Hello"));    // false
  // console.log(isUpperCase(""));         // false
  // console.log(isUpperCase("123"));      // false
  