function theBeatlesPlay(musicians, instruments) {
<<<<<<< HEAD
  const array = [];

  for (let i = 0; i < musicians.length; i++) {
=======
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
>>>>>>> ec3e8f7d0d4e1cdf9a827017b506708f232aa357
    var newString = `${musicians[i]} plays ${instruments[i]}`;

    array.push(newString);
  }

  //console.log(array);
  return array

}

function johnLennonFacts(facts) {
<<<<<<< HEAD
  const newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    ++i
=======
  var exclamation = "!!!";
  while (facts > 0) {
    var newFacts = facts + exclamation;
>>>>>>> ec3e8f7d0d4e1cdf9a827017b506708f232aa357
  }

  return newFacts
}

function iLoveTheBeatles(n) {
<<<<<<< HEAD
  const array = [];

  do {
    array.push("I love the Beatles!");
    ++n
  } while (n < 15);

  return array;
=======
  var array = [];

  do {
    array.push("I love the Beatles!")
  } while (n < 15);
>>>>>>> ec3e8f7d0d4e1cdf9a827017b506708f232aa357
}
