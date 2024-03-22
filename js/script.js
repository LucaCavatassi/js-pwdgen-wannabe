// NAME
let userFirstName = prompt ("Ciao, qual'è il tuo nome?"); //string
console.log(userFirstName , typeof userFirstName)
// SURNAME
let userSurname = prompt ("Ciao, qual'è il tuo cognome?"); //string
console.log(userSurname , typeof userSurname)
// COLOR
let userColor = prompt ("Ciao, qual'è il tuo colore preferito?"); //string
console.log(userColor , typeof userColor)
// RANDOM NUMBER
const number = Math.floor(Math.random() * 100);

// RESULT
const userPassword = userFirstName + userSurname + userColor + number;
console.log(userPassword)

// MESSAGE
const resultMessage = `${userPassword}`;
console.log(resultMessage)
// MESSAGE-PRINT
document.getElementById("result").innerHTML = resultMessage;
