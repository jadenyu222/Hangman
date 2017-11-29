
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

var youTried = "";
var wordDisplay = "";
var word = "";
var tries = 0;
var lettersTried ="";
var display = "<img width=576 height=328.8 src='img/" +  imageArray[tries].image  + "'> <br> ";

function resetGame() {
    word = "";
    tries = 0;
    display = "<img width=576 height=328.8 src='img/" + imageArray[tries].image + "'> <br> ";
    wordDisplay = "";
    lettersTried = "";
    lT();
    displayTries();
    return (display + wordDisplay);
}

function setWordDisplay(x){
    var y = x.length;
    for(var i = 0; i < y; i++){
        wordDisplay += "_";
    }
}




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

function getWordA() {
        var tempDif = document.getElementById("difficulty").value;
        var difficulty = parseInt(tempDif);
        startGame(difficulty);
        setWordDisplay(word);
        return (display + wordDisplay);

}


function spliceDisplay(letter, position){
    var front = "";
    var pos = position;
    if(position >= 1) {
        front = wordDisplay.slice(0, (pos));
    }else{
        front = "";
    }
    var back = wordDisplay.slice((pos + 1), ((wordDisplay.length + 1)));
    console.log(wordDisplay);
    console.log(word);
    front += letter;
    console.log(wordDisplay);
    console.log(word);
    wordDisplay =  (front + back);
    console.log(wordDisplay);
    console.log(word);
}


function guessLetter(){
    var letter = document.getElementById("letter").value;
    if((tries < 5) && (checkIfWon() === false) ){
        if(checkLetter(letter) === true){
            for(var i = 0; i <word.length; i++){
                if(word[i] === letter){
                    word.replace(letter, "_");
                    spliceDisplay(letter, i);
                }
            }
            rightLetter(letter);
        }else{
            wrongLetter(letter);
            console.log(display);
        }
        tester();
        checkIfWon();
    }else{
        if(tries >= 5){
            tries += 1;
            displayTries();
            failedGame();
        }else{
            display = "Congratulations, You won! Reset and play again!";
            tester();
        }

    }
}

function checkIfWon(){
    return (wordDisplay === word);

}

function rightLetter(a){
    if(lettersTried.includes(a) === false){
        lettersTried += (a + ",");
        lT();
    }else {

        message();
        tries += 1;
        display = "<img width=576 height=328.8 src='img/" +  imageArray[tries].image  + "'> <br> ";
        tester();
        displayTries();
    }
}

function wrongLetter(a){
    console.log(display);
    if(lettersTried.includes(a) === false){
        lettersTried += (a + ",");
        lT();
    }else {
        message();
    }
    tries += 1;
    display = "<img width=576 height=328.8 src='img/" +  imageArray[tries].image  + "'> <br> ";
    tester();
    console.log(display);
    displayTries();
}



function checkLetter(x){
    return (word.includes(x) === true)

}

function submitDisplay(){
    var result = (display + wordDisplay);
    return result;
}

function message(){
    youTried = "You already Tried this letter";
    document.getElementById("output2").innerHTML = youTried;
    youTried = "";
}

function lT(){
    document.getElementById("output1").innerHTML = lettersTried;
}

function failedGame(){
    document.getElementById("output").innerHTML = "You lost! Reset the game and try again! <br> Your word was " + word;
}

function displayTries(){
    document.getElementById("output3").innerHTML = tries.toString();
}

function getword(){
    document.getElementById("output").innerHTML = getWordA();
}

function tester(){

    document.getElementById("output").innerHTML = submitDisplay();

}
function reset() {
    document.getElementById("output").innerHTML = resetGame();
}