const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool. Input the password you will like to validate.(Password needs to be at least 10 characters long, contain at least two uppercase letters and one special character)", function(input){

	password = input

	upperCaseCount = 0;
	specialCharCount = 0;

		for (let i=0; i < password.length; i++) {
			if ( /[A-Z]/.test(password[i])) {
				upperCaseCount++
			}
			if (/[^A-z0-9]/.test(password[i])) {
				specialCharCount++
			}
		}

		if(password.length >= 10 && upperCaseCount >= 2 && specialCharCount >= 1) {
			console.log('Valid password.')
		} else {
			console.log(`Invalid password. Password length: ${password.length}. Upper case count: ${upperCaseCount}. Special character count: ${specialCharCount}. `)
		}

	// This line closes the connection to the command line interface.
	reader.close()

});