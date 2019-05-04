/* **
 * Create a function called "timeAdder" that can add two time values together.
 * For example, it should be able to add 25 hours and 3 days together.
 * The function should accept 4 parameters:
 * value1, label1, value2, label2
 * - value1 and value2 should accept positive integers
 * - label1 and label2 should accept any of the following strings:
 * "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
 *
 * Return the largest label that can be used with an integer value
** */

function Unit(name, multiplier) {
  this.name = name;
  this.multiplier = multiplier;
}

const UNITS = [
  new Unit('second', 1),
  new Unit('minute', 60),
  new Unit('hour', 60 * 60),
  new Unit('day', 60 * 60 * 24),
];

const LABELS = UNITS.map((unit) => unit.name);
const PLURAL_LABELS = LABELS.map((label) => label + 's');
const ALL_LABELS = LABELS.concat(PLURAL_LABELS);
const MULTIPLIERS = UNITS.map((unit) => unit.multiplier);

function timeAdder(value1, label1, value2, label2) {
  const IDX_1 = ALL_LABELS.indexOf(label1) % 4;
  const IDX_2 = ALL_LABELS.indexOf(label2) % 4;
  if (!isPositiveInteger(value1) || !isPositiveInteger(value2) || IDX_1 === -1 || IDX_2 === -1) {
    return false;
  }
  const numberOfSeconds = getNumberOfSeconds(value1, IDX_1) + getNumberOfSeconds(value2, IDX_2);

  return convertToMaxPossibleUnit(numberOfSeconds);
}

function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

function getNumberOfSeconds(value, idx) {
  return value * MULTIPLIERS[idx];
}

function convertToMaxPossibleUnit(sum) {
  let value = sum;
  let label = LABELS[0];
  for (let i = 1; i < MULTIPLIERS.length; i++) {
    if (sum % MULTIPLIERS[i] === 0) {
      value = sum / MULTIPLIERS[i];
      if (value > 1) {
        label = PLURAL_LABELS[i];
      } else {
        label = LABELS[i];
      }
    } else {
      break;
    }
  }
  return [value, label];
}

console.log(timeAdder(20, 'hours', 4, 'hours')); // 1 day
console.log(timeAdder(20, 'hours', 5, 'hours')); // 25 hours

console.log(timeAdder(1, 'minute', 3, 'minutes')); // 4 minutes
console.log(timeAdder(5, 'days', 25, 'hours')); // 145 hours
console.log(timeAdder(1, 'minute', 240, 'seconds')); // 300 seconds
console.log(timeAdder(5, 'hour', 5, 'minutes')); // 305 minutes

console.log(timeAdder(false, false, 5, 'minutes')); // false
console.log(timeAdder({}, 'days', 5, 'minutes')); // false
console.log(timeAdder(-2, 'days', 5, 'minutes')); // false
console.log(timeAdder(1, 'day', 2.25, 'minutes')); // false
console.log(timeAdder(1, 'day', 2, 'weeks')); // false
