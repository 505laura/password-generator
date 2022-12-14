// Create a variable for the 'generate password' button
const generateBtn = document.querySelector('#generate');

// Create variables to store the different sets of characters to be used in the password
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const specialChars = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

// Create the function that will generate a password when called
function generatePassword() {
    // Ask the user what length they want their password to be
    let length = prompt('Please choose a password length between 8 and 128 characters.');
    // Convert length to a number from a string
    length = Number(length);
    // Make sure the chosen length is a valid password length
    if (length < 8 || length > 128 || Number.isNaN(length)) {
        alert('Invalid number. Please choose a number between 8 and 128.');
        // Stop executing the generatePassword function and return an empty string
        return '';
    }
    
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
    
    // Create a variable to store the possible characters that can go into the password
    let possibleCharacters = ''; 
    // Use if statements to define what 'possibleCharacters' contains
    if (upper) {
        possibleCharacters += upperChars;
    }
    if (lower) {
        possibleCharacters += lowerChars;
    }
    if (number) {
        possibleCharacters += numberChars;
    }
    if (special) {
        possibleCharacters += specialChars;
    }
    
    let password = '';
    // Pick a random character and add it to the password as many times as defined by the length above
    for (let i = 0; i < length; i++) {
        // Pick a random character from the possible characters
        const randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
        password += randomCharacter;
    }
    // Return the password to display on the page
    return password;
}

// Write password to the #password input
function writePassword() {
    const password = generatePassword(); 
    const passwordText = document.querySelector('#password');
    
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
