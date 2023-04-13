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
