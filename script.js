
var wordsEasy = [ "", "apple", "banana", "coloured", "orange", "sweet", "candy", "love", "cardboard", "uranus", "star" ];
var wordsMed = ["","aardvark" , "ruthless", "difficult", "woodwork","particle", "carnivore", "hadron", "sweden","helpless","fractured" ];
var wordsHard = ["", "onomatopoeia", "conundrum", "ruptured", "conniving", "orthodontist" , "oscillation",
    "supercalifragilisticexpialidocious", "incomprehensible", "adjudicator","unreasonable"];
var imageArray = [
    { name: 'h1', image: 'Drawing1.png' },
    { name: 'h2', image: 'Drawing2.png' },
    { name: 'h3', image: 'Drawing3.png' },
    { name: 'h4', image: 'Drawing4.png' },
    { name: 'h5', image: 'Drawing5.png' },
    { name: 'h6', image: 'Drawing6.png' },
    { name: 'h7', image: 'Drawing7.png' }
];


var wordDisplay = "";
var word = "";
var tries = 0;
var lettersTried ="";
var display = "<img width=576 height=328.8 src='img/" +  imageArray[0].image  + "'> <br> ";
function resetGame() {
    word = "";
    display = "<img width=576 height=328.8 src='img/" + imageArray[0].image + "'> <br> ";
    tries = 0;
    wordDisplay = "";
    return (word + display);
}

function setWordDisplay(x){
    var y = x.length;
    for(var i = 0; i < y; i++){
        wordDisplay += "_ ";
    }
}


/*function onStart(){
    return "<img width=500 height=500 src='img/\" +  imageArray[0].image  +  \"'>"
}
*/

function startGame(difficulty) {
    var temp = Math.floor((Math.random() * 10) + 1);
    if(difficulty === 0){
        word += wordsEasy[temp];
    }
    if(difficulty=== 1){
        word += wordsMed[temp];
    }
    if(difficulty ===2){
        word += wordsHard[temp];
    }


}

function getWord() {
        var tempDif = document.getElementById("difficulty").value;
        var difficulty = parseInt(tempDif);
        startGame(difficulty);
        setWordDisplay(word);
        return (display + wordDisplay);

}


function guessLetter() {
    if(tries <= 7) {
        var letter = document.getElementById("letter").value;
        console.log(word);
        if (checkLetter(letter) === true) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    word.replace(letter, "_");
                    var temp2 = word.indexOf(i);
                    console.log(word);
                    wordDisplay.replace(temp2, letter);
                }
            }
            return (display + wordDisplay);
        }
        else {
            triedLetters(letter);

        }
    }else{
        return (display + "you lost! restart the game!");
    }

}

function triedLetters(a){
    if(lettersTried.includes(a) === false){
        lettersTried += a + ",";
    }else {
        return "you have already tried that letter.";
    }
    tries += 1;
}



function checkLetter(x){
    return (word.includes(x) === true)

}
/*function displaytries(){
    document.getElementById("output").innerHTML = ;
}
*/
/*function replaceImage(){
    display.replace(0, )
}
*/
function getword(){
    document.getElementById("output").innerHTML = getWord();
}

function tester(){
    document.getElementById("output").innerHTML = guessLetter();

}
function reset() {
    document.getElementById("output").innerHTML = resetGame();
}