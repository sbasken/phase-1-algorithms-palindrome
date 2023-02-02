function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = "";
  for (let i = (word.length - 1); i > -1 ; i-- ) {
    reversedWord += word[i]
  }
  if (reversedWord === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  - create a function that takes in a word as a parameter
  - create a empty string
  - iterate through the word letter by letter
  - add each letter to the end of the string
  - compare the string and the parameter
  - if they match, return true
  - if not, return false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
