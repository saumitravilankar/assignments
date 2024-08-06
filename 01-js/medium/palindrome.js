/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const formattedString = str.replace(/[^a-zA-Z0-9]+/g, ""); // Regex to remove spaces and special characters
  return (
    formattedString.toLowerCase() ===
    Array.from(formattedString.toLowerCase()).reverse().join("")
  );
}

module.exports = isPalindrome;
