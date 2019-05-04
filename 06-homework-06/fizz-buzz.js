/* **
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print "Fizz" instead of the number.
 * And for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 ** */

for (let number = 1; number <= 100; number++) {
  const isByThree = number % 3 === 0;
  const isByFive = number % 5 === 0;

  if (isByThree && isByFive) {
    console.log('FizzBuzz');
  } else if (isByThree) {
    console.log('Fizz');
  } else if (isByFive) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}
