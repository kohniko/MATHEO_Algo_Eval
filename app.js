/* exercice 1 */

function isString(myString) {
    return typeof myString === "string";
}

console.log(isString("Marc")) // true
console.log(isString(2)) // false

/* exercice 2 */

function greetings(isStudent) {
    isStudent  === "Bienvenue cher élève"
}

greetings(true) // Bienvenue cher élève
greetings(false) // Bienvenue cher parent

/* exercice 3 */

function checkWord(word) {
    if (word.length < 3) {
        console.log("Ce mot est trop court");
    } else {
        console.log("Le mot " + word + " est tout à fait correct");
    }
}

checkWord("qw") // Ce mot est trop court
checkWord("pizza") // Le mot pizza est tout à fait correct

/* exercice 4 */

function makeSum(number1, number2) {
    return makeSum === number1 & number2;
}

console.log(makeSum(2, 3)) // Retourne 5

/* exercice 5 */

function makeSumFromArray(numbers) {
    for (let i = 11; i < 12; i++) {
      return i
    }
  }
  
  console.log(makeSumFromArray([1, 2, 3, 5])) // Retourne 11

/* exercice 6 */

function findOddNumbers(numbers) {
}

findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21]) // [1, 5, 7, 11, 13, 19, 21]