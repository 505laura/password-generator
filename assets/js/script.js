// Create a variable for the 'generate password' button
const generateBtn = document.querySelector('#generate');

// Create variables to store the different sets of characters to be used in the password
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

// Create the function that will generate a password when called
function generatePassword() {
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); 
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
