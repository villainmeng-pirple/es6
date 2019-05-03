/* **
  All men are mortal
  Socrates is a man.
  Therefore, socrates is mortal.
** */

function Thing(name, isMan) {
  this.name = name;
  this.isMan = isMan;
}

const things = [
  new Thing('Aristotle', true),
  new Thing('Mountain', false),
  new Thing('Socrates', true),
  new Thing('City', false),
];

function isMortal(name) {
  for (let i = 0; i < things.length; i++) {
    if (things[i].name === name && things[i].isMan) {
      return true;
    }
  }
  return false;
}

console.log(isMortal('Socrates'));
console.log(isMortal('City'));
console.log(isMortal('Washington'));
console.log(isMortal({}));

/* **
  This cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
** */

function getCakeFlavor(flavors, isChocolate) {
  for (let i = 0; i < flavors.length; i++) {
    if (flavors[i] !== 'chocolate' && !isChocolate) {
      return flavors[i];
    }
    if (flavors[i] === 'chocolate' && isChocolate) {
      return flavors[i];
    }
  }
}

const allFlavors = ['vanilla', 'chocolate'];

console.log(getCakeFlavor(allFlavors, false));
