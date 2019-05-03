const LABELS =['second', 'minute', 'hour', 'day'];
const PLURAL_LABELS = LABELS.map((label) => label + 's');
const ALL_LABELS = LABELS.concat(PLURAL_LABELS);

function timeAdder(value1, label1, value2, label2) {
  if (!isPositiveInteger(value1) || !isPositiveInteger(value2) ||
      ALL_LABELS.indexOf(label1) === -1 || ALL_LABELS.indexOf(label2) === -1) {
    return false;
  }
  const numberOfSeconds = getNumberOfSeconds(value1, label1) + getNumberOfSeconds(value2, label2);

  return [numberOfSeconds, PLURAL_LABELS[0]];
}

function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

function getNumberOfSeconds(value, label) {
  let numberOfSeconds;
  switch (label) {
    case LABELS[0]:
    case PLURAL_LABELS[0]:
      numberOfSeconds = value;
      break;
    case LABELS[1]:
    case PLURAL_LABELS[1]:
      numberOfSeconds = value * 60;
      break;
    case LABELS[2]:
    case PLURAL_LABELS[2]:
      numberOfSeconds = value * 60 * 60;
      break;
    case LABELS[3]:
    case PLURAL_LABELS[3]:
      numberOfSeconds = value * 60 * 60 * 24;
  }
  return numberOfSeconds;
}

console.log(timeAdder(1, 'minute', 3, 'minutes'));
console.log(timeAdder(5, 'days', 25, 'hours'));
console.log(timeAdder(1, 'minute', 240, 'seconds'));
console.log(timeAdder(5, 'hour', 5, 'minutes'));

console.log(timeAdder(false, false, 5, 'minutes'));
console.log(timeAdder({}, 'days', 5, 'minutes'));
console.log(timeAdder(-2, 'days', 5, 'minutes'));
console.log(timeAdder(1, 'day', 2.25, 'minutes'));
console.log(timeAdder(1, 'day', 2, 'weeks'));
