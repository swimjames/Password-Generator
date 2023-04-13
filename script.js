// Assignment code here
var lower_case
var upper_case
var numbers
var special_characters
var password_length

const charsUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charsLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const charsNumbers = '0123456789';
const charsSpecialCharacters = '!@#$%^&*()_+-={}[]|\\:;\'"<>,.?/';

// This function pulls chosen characters from the const characters and returns the allowed characters
function getAllowedCharacters () {
  var allowedCharacters = '';
  if (numbers) {
    allowedCharacters += charsNumbers;
  }
  if (upper_case) {
    allowedCharacters += charsUpperCase;
  }
  if (lower_case) {
    allowedCharacters += charsLowerCase;
  }
  if (special_characters) {
    allowedCharacters += charsSpecialCharacters;
  }
  return allowedCharacters;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
