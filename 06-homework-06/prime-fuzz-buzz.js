/* **
 * Write a program that prints the numbers from 1 to 100.
 * But for multiples of three print "Fizz" instead of the number.
 * And for the multiples of five print "Buzz".
 * For numbers which are multiples of both three and five print "FizzBuzz".
 *
 * Add a fourth print statement: "prime".
 * You should print this whenever you encounter a number that is prime
** */

const PRIMES = [];

for (let number = 1; number <= 100; number++) {
  const isPrime = isPrimeNumber(number);
  const isByThree = number % 3 === 0;
  const isByFive = number % 5 === 0;

  if (isPrime) {
    console.log('Prime');
  } else if (isByThree && isByFive) {
    console.log('FizzBuzz');
  } else if (isByThree) {
    console.log('Fizz');
  } else if (isByFive) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}

function isPrimeNumber(n) {
  for (const PRIME of PRIMES) {
    if (PRIME > Math.sqrt(n)) {
      break;
    }
    if (n % PRIME === 0) {
      return false;
    }
  }
  if (n > 1) {
    PRIMES.push(n);
    return true;
  } else {
    return false;
  }
}
