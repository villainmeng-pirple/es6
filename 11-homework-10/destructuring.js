/* ***
  Destructuring objects and arrays:
    - if we need get value of one or many array elements and assign each value to different variables
    then we use array destructuring syntax construction
    - if we need get value of one or many object properties and assign each value to different variables
    then we use object destructuring syntax construction
*** */

// destructuring an array
const simpleArray = ['a string', 22, true];
const [element1, element2, element3] = simpleArray;
console.log(`element1='${element1}'; element2='${element2}'; element3='${element3}'`);

// destructuring an object
const simpleObject = {
  property1: 'another string',
  property2: 33,
  property3: false,
};
const {property1: value1, property2, property3: value3} = simpleObject;
console.log(`value1='${value1}'; value2='${property2}'; value3='${value3}'`);


/* ***
  Destructuring nested objects and nested arrays:
    - to destructuring nested array or nested object we need to reproduce structure of this array
    or object at the left side of assign operator in destructuring syntax construction
*** */

// destructuring nested array
const nestedArray = [
  [1, 2, 3],
  ['a', 'b', 'c'],
];
const [[, el2, el3], [el4, , el6]] = nestedArray;
console.log(`el2='${el2}'; el3='${el3}'; el4='${el4}'; el6='${el6}'`);

// destructuring nested object
const nestedObject = {
  property1: {
    nested1: 's1',
    nested2: 's2',
  },
  property2: {
    nested1: 7,
    nested2: 9,
  },
};
const {property1: {nested1: v1, nested2}, property2: {nested2: v4}} = nestedObject;
console.log(`value1='${v1}'; value2='${nested2}'; value4='${v4}'`);
