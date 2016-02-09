var superHeroes = [["Batman","Bruce Wayne"],["Spiderman","Peter Parker"],["The Flash","Berry Allen"]]

var secretIdentity = superHeroes.map(
  function(revealArray) {
    return superHeroes[[0]] + " is " + superHeroes[[1]];
  }
);

console.log(secretIdentity);
