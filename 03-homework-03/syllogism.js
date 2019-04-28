/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter a number: `, (inputString) => {
  const answer = isNaN(inputString) ? 0 : parseInt(inputString);

  const condition = answer === 1;

  if (condition) {
    console.log('condition is true');
  }

  readline.close();
});
*/

const answer = 1;
const condition = answer === 1;

if (condition) {
  console.log('condition is true');
}
