// Declaration of variables
var lower_case;
var upper_case; 
var numbers; 
var special_characters; 
var password_length; 
// Checking that at least one of the input is selected
function characterChecker(){
  return lower_case || upper_case || numbers || special_characters
}
// this function is checking that the length is in the desired range
function lengthChecker(){
  return password_length >= 8 && password_length <= 128 && password_length != NaN
}
// Pop up confirms for inputs and checks the inputs
do { 
  lower_case = confirm ('Do you want lower case characters?')
  upper_case = confirm ('Do you want upper case characters?')
  numbers = confirm ('Do you want numbers?')
  special_characters = confirm ('Do you want special characters?')
  
} while (characterChecker() == false); 
// pop up prompts the user to input the length and checks the length
do { 
  password_length = Number (prompt ('Please choose a password length between 8 and 128 characters') )
  
} while (lengthChecker() == false);
// const of possible characters
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
  var password;
  var passwordLength = password_length;
  do {
    password = '';
    for (let X = 0; X < passwordLength; X++) {
      password += getAllowedCharacters().charAt(getRandomIndex(getAllowedCharacters()));
    }
  } while (!passwordChecker(password));
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log (passwordChecker(password))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// this function checks the password for all inputs
function passwordChecker(password) {
  return (numberChecker(password) && lowerCaseChecker(password) && upperCaseChecker(password) && specialCharacterChecker(password))
}
// this function checks the password for numbers input
function numberChecker(password) {
if (numbers){   
    for (let index = 0; index < charsNumbers.length; index = index + 1 ) {
    if  (password.includes (charsNumbers.charAt(index))) {
      return true;
    }
  } return false
} return true
}
// this function checks the password for the lower case input
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
// this function checks the password for the uppercase input
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
// this function checks the password for the special character input
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