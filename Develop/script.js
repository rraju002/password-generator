// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// generatePassword() function will be stored in the variable password
function writePassword() {
  
  // there is no generatePassword function 
  var password = generatePassword();

  
  //targets the password id line 22 on html
  var passwordText = document.querySelector("#password");

  // gets value of generated password and shows on screen
  passwordText.value = password;

}

// function to generate password
function generatePassword() {

  //all variables, let for variables later being filled in, const for ones that wont be changed
  var chars = ""
  let specialCharacters = "!@#$%^&*()"
  let numbers = "0123456789"
  let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

  // var passwordLength = prompt("Enter any number (8-128)") 
  var password = "";

// 1. prompt the user for the password criteria
  let passLength = prompt ("Please indicate your desired password length (between 8 and 128 characters)")
  passLength = parseInt(passLength);

  if (isNaN (passLength)) {
    alert ("Please indicate your desired password length (between 8 and 128)")
    return "Please pick a number between 8 and 128"
  }

// 2. a password between 8-128 characters 
  //this loop keeps the characters within 8 and 128
  if  (passLength <8 || passLength >128 ) {
    alert ("Please indicate your desired password length (between 8 and 128)")
    return "Please pick a number between 8 and 128"
  }

// 3. special, num, capLetters, lowLetters char
  let special = confirm("Click 'OK' to allow your password to contain special character values!")

  let num = confirm("Click 'OK' to allow your password to contain number values!")

  let capLetters = confirm("Click 'OK' to allow your password to contain capital letter values!")

  let lowLetters = confirm("Click 'OK' to allow your password to contain lowercase letter values!")

  // 4. "if" statmentes to validate the input(s)
if (special) {
  chars += chars.concat(specialCharacters)
}

if (num) {
  chars += chars.concat(numbers)
}

if (capLetters) {
  chars += chars.concat(capitalLetters)
}

if (lowLetters) {
  chars += chars.concat(lowercaseLetters)
}
// 5. for loop, for vairable i = 0; i is less than  or equal to passMsg(saved user input, will increment by 1)
  // variable randomNumber = math.floor(rounds down to nearest whole number) math.random(get random number * max of what is given, char.length)
  // variable password plus or equals to variable char .substring(extracts a part of a string )
  for (var i = 0; i < passLength; i++) {             
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomNumber);
   }

   document.getElementById("password").value = password;

   

   return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
