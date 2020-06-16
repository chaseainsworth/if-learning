/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(overTwenty) {
  if (overTwenty.length > 20) {
  return "That's a long string!" }
}

function isItMedium(between) {
  if (between.length <= 20 && between.length >= 10) {
  return "That's a regular sized string!"
  }
}

function isItShort(tiny) {
  if (tiny.length < 10) {
  return "That's a small string!";
} else {
  return "That's not a small string!"
  }
}

function howLongIsMyString(tellMe) {
  if (tellMe.length > 20) {
  return "That's a long string!";
  } else if (tellMe.length <= 20 && tellMe.length >= 10) {
  return "That's a regular sized string!";
  } else { (tellMe.length < 10)
  return "That's a small string!";
  }
}

function instructorHeight(height) {
  if (height === "Colin") {
  return 62;
  } else if (height === "Mesuara") {
  return 69;
  } else { 
  return "I don't know that instructor!";
  }
}
// function isItLong(twentyCharactersPlus) {
//   return "That's a long string" if twentyCharactersPlus > 20
// }




/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}