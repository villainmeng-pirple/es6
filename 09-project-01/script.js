import {sha1} from './webtoolkit.sha1.js';

/* **
 * password hashing
** */
function createHash(password) {
  return sha1(password);
}

function checkPassword(password, hash) {
  return sha1(password) === hash;
}

const password = 'some pass';
const hash = createHash(password);

console.log(hash);
console.log(checkPassword(password, hash));

