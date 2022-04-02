// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
const numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
//window for first prompt to ask for length of characters
var lengthPW = window.prompt(
  "Please enter the length of your password (between 8-128 characters)"
);
console.log(length);
//this will determine if the person puts appropriate amount
if (lengthPW > 7 && lengthPW < 129) {
  window.alert(
    "Your password length is " + lengthPW + ". Press OK to continue"
  );
}
else {
  window.alert(
    "Password must be between 8-128 characters. Click OK to try again"
  );
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//ask if they want upper caser letters
var passUp = confirm("Do you want to include upper case letters?")
//ask if they want lower caser letters
var passLow = confirm("Do you want to include lower case letters?")
//ask if they want special characters
var passSpec = confirm("Do you want to include special characters?")
//ask if they want number characters
var passNumb = confirm("Do you want to include numbers?")
// then final password options
var finalComboArray = []

//if else 
if (passUp) {
  finalComboArray = finalComboArray.concat(upperCase)
}
if (passLow) {
  finalComboArray = finalComboArray.concat(lowerCase)
}
if (passSpec) {
  finalComboArray = finalComboArray.concat(specialChar)
}
if (passNumb) {
  finalComboArray = finalComboArray.concat(numberChar)
}


console.log (finalComboArray)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
