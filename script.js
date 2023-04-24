// Assignment code here
var lower_case = confirm ('Do you want lower case characters?')
var upper_case = confirm ('Do you want upper case characters?')
var numbers = confirm ('Do you want numbers?')
var special_characters = confirm ('Do you want special characters?')
var password_length = Number (prompt ('Please choose a password length between 8 and 128 characters') )

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
// This function is to get a random integer within a string length
function getRandomIndex(mystring) {
  var randomIndex = Math.floor(Math.random() * mystring.length);
  return randomIndex;
}

// This function creates and returns the chosen password by placing it into a string and adding from the allowed characters
function generatePassword () {
  var password = '';
  var passwordLength = password_length;
  for (let X = 0; X < passwordLength; X++) {
    password += getAllowedCharacters().charAt(getRandomIndex(getAllowedCharacters()));
    
  }
  return password;
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


// if the user chooses a number then the password must contain a number



function numberChecker(password) {
  for (let index = 0; index < charsNumbers.length; index = index + 1 ) {
    password.includes (charsNumbers.charAt(index))
  }
}

function lowerCaseChecker(password) {
if (lower_case){
    for (let index = 0; index < charsLowerCase.length; index = index + 1 ) {
    if (password.includes (charsLowerCase.charAt(index))) {
      return true;
    
    }
  }
  return false
}
  else 
  {
    return true
  }; 
}

function upperCaseChecker (password) {
  if (upper_case){
    for (let index = 0; index < charsUpperCase.length; index = index + 1 ) {
      if (password.includes (charsUpperCase.charAt(index))) {
        return true;
      }
    }
    return false
  }
  else
  {
    return true
  };
}

function specialCharacterChecker (password) {
  if(special_characters){
    for (let index = 0; index < charsSpecialCharacters.length; index = index + 1 ) {
      if (password.includes (charsSpecialCharacters.charAt(index))) {
        return true;
      }
    }
    return false
  }
  else
  {
    return true
  };
}