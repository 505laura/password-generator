// Create a variable for the 'generate password' button
const generateBtn = document.querySelector('#generate');

// Create variables to store the different sets of characters to be used in the password
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

// Create the function that will generate a password when called
function generatePassword() {
   // Create pop up messages that the user can respond to with 'Ok' or 'Cancel' with questions about what characters to include 
   const upper = confirm('Would you like to include uppercase letters in your password?');
   const lower = confirm('Would you like to include lowercase letters in your password?');
   const number = confirm('Would you like to include numbers in your password?');
   const special = confirm('Would you like to include special characters in your password?');
   // Create an alert asking the user to choose one of the above options if none were chosen
   if (!upper && !lower && !number && !special) {
       alert('Please choose at least one of the options.');
       return '';
   }
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); 
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
