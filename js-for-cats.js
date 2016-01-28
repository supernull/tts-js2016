// The console
console.log(Math.PI, 1+1)

// Values and variables
// Strings
// Using functions

var dogSentence = "Something about dogs."

console.log(dogSentence.replace('dogs','those blasted dogs'))


// Writing new functions
function makeMoreExciting(string) {
  return string + '!!!!'
}

console.log(makeMoreExciting("yee"));

var sentence = "time for a nap";
sentence = makeMoreExciting(sentence);
console.log(sentence);


function yellIt(x) {
  x = x.toUpperCase();
 return makeMoreExciting(x);

}

console.log(yellIt("make this loud"))

// Loops
function logANumber(someNumber) {
  for(var startingFrom=0; startingFrom<=someNumber;startingFrom++) { console.log(startingFrom) }
}
logANumber(5);


// Arrays

var myCatFriends = ["bill", "tabby", "ceiling"];
console.log(myCatFriends[0]);

myCatFriends.push("super hip cat");
console.log(myCatFriends.length);

// Objects
var firstCat = { name: "bill", lastName: "the cat", address: "The Alley" };
var secondCat = { name: "tabby", lastName: "cat", address: "Grandmas House" };
var thirdCat = { name: "ceiling", lastName: "cat", address: "Attic" };


// Callbacks
function measureLoopSpeed() {
  var count = 0;
  function addOne() { count = count + 1 };

  // Date.now() returns a big number representing the number of
  // milliseconds that have elapsed since Jan 01 1970
  var now = Date.now();

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into
  // the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne();

  // Finally it has been >= 1000ms, so let's print out our total count
  console.log(count)
}

measureLoopSpeed();
