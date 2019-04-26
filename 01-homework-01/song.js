/*
  Metadata for the song 'Hotel California' (Eagles, 1977).
  Used JS data types: string, number, boolean, null, undefined, array, object, function
*/

var name = 'Hotel California'; // string
var year = 1977; // number
var authors = ['Don Felder', 'Don Henley', 'Glenn Frey']; // array

// function
var printSongData = function() {
  console.log(`Name: ${name}; year: ${year}; authors: ${authors}.`);
};

// constructor
function Artist(name, isBand = false, members = []) {
  this.name = name; // string
  this.isBand = isBand; // boolean
  this.members = members; // array of objects

  // function
  this.print = function() {
    console.log(`Artist: ${this.name}`);
  };
}

// object containing array of objects
var artist = new Artist('Eagles', true, [
  new Artist('Glenn Frey'),
  new Artist('Randy Meisner'),
  new Artist('Don Felder'),
]);

var duration; // undefined
var producer = null; // null
var lyricsLink = 'https://www.azlyrics.com/lyrics/eagles/hotelcalifornia.html'; // string
var awards = ['Grammy Award for Record of the Year', 'Billboard Hot 100']; // array

// logging
console.log(name);
console.log(year);
console.log(authors);
console.info(printSongData);
printSongData();
console.log(artist);
console.log(artist.members[0]);
artist.print();
artist.members[1].print();
console.log(duration);
console.log(producer);
console.log(lyricsLink);
console.log(awards);
console.log(typeof artist);
