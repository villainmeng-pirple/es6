/* **
  All men are mortal
  Socrates is a man.
  Therefore, socrates is mortal.
** */

function Mortal(entity) {
  this.entity = entity;
}

const man = new Mortal('Man');

function Person(name) {
  this.kind = man;
  this.name = name;
}

const socrates = new Person('Socrates');

if (man instanceof Mortal && socrates.kind === man) {
  console.log(socrates.name + ' is mortal');
} else {
  console.log('Mortality of ' + socrates.name + ' unknown');
}


/* **
  This cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
** */

const theCake = {
  flavor: 'vanilla',
};

if (theCake.flavor === 'vanilla' || theCake.flavor === 'chocolate') {
  if (theCake.flavor !== 'chocolate') {
    console.log('This cake is vanilla');
  } else {
    console.log('This cake is chocolate');
  }
} else {
  console.log('This cake is not vanilla or chocolate');
}
