/* exercice 1 */


function isString(myString) {
    return typeof myString === "String";
}

isString("Marc") // true
isString(2) // false

/* exercice 2 */

function greetings(isStudent) {
    isStudent  === "Bienvenue cher élève"
}

greetings(true) // Bienvenue cher élève
greetings(false) // Bienvenue cher parent

/* exercice 3 */

function checkWord(word) {

}

checkWord("qw") // Ce mot est trop court
checkWord("pizza") // Le mot pizza est tout à fait correct