/* ***
  hoisting:
    "moving up" variable declaration;
    variable name could be used if it was declared in any place within function scope;
    this is applies only when 'var' keyword' was used for variable declaration;
    function hoisting work for declaration, but don't work for expression
** **
  var:
    variable is a place in operative memory where any data could be stored
  during program execution
** **
  let:
    variable defined with let isn't accessible in the outer scope;
    hoisting works but without initialization
** **
  const:
    constant is the same as variable defined with let, but its value couldn't be changed;
    must be initialized when declared
*** */


/* ***
  difference between var & let
*** */
for (var i = 0; i < 2; i++) {
  console.log(`Within loop: ${i}`);
}
// next line executes successfully: 'i' available in the outer scope
console.log(`After loop: ${i}`);

for (let j = 0; j < 2; j++) {
  console.log(`Within loop: ${j}`);
}
// next line (if not commented) throws error: 'j' is not defined
// console.log(`After loop: ${j}`);


/* ***
  var & hoisting
*** */

f(); // oldVar is already initialized as undefined
var oldVar = 1;
f();
oldVar = 'one';
f();

// function declaration hoisting
function f() {
  console.log(oldVar);
}


/* ***
  let & unable of hoisting
*** */

// function expression - hoisting unavailable
// calling g() before next line cause error: TypeError: g is not a function
var g = function() {
  console.log(letVar);
};

// next line (if not commented) throws error: 't' is not defined
// g(); letVar isn't initialized - known as "temporal dead zone"
let letVar = 11;
g();
letVar = 'eleven';
g();


/* ***
  const & unable of hoisting & unable to reassign
*** */
function h() {
  console.log(CONST_VAR);
}

// next line (if not commented) throws error: 'c' is not defined
// h();
const CONST_VAR = 20;
h();
// next line (if not commented) throws error: assignment to constant variable
// CONST_VAR = 'twenty';
