var word= "";
var guessedLetters= [];
var easyWords=["dog", "hand", "boat", "plane", "slam", "scream" ];
var mediumWords=["level", "albinson" , "computer", "avenue", "colonel"];
var hardWords=["itziar", " resurrected" , "incognito" , "leicester" ];
var extraHard=["vidic",  "milivojevic", "dzeko","ivanovic", "nemanja", "wojciechszczesny" ];
var lives=6;



function makeWord(){
    var diff=document.getElementById("level").value;
    console.log(diff);
    if(diff=="easy"){
        word=easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if(diff=="medium"){
        word=mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    if(diff=="hard"){
        word=hardWords[Math.floor(Math.random() * hardWords.length)];
    }
    if(diff=="Eastern European soccer players"){
        word=extraHard[Math.floor(Math.random() * extraHard.length)];
    }
    console.log(word);
    printWord(word);
    return word;
}

function printWord(){
    var answer = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) >= 0) {
            answer += word[i];
        } else {
            answer += " _";

        }
    }
    if(answer==word){
        document.getElementById("win/lose").innerHTML="you win!!!!!";
    }
    console.log(answer);
    document.getElementById("answer").innerHTML=answer;


}

function guessLetter(letter){
    var currentLives=lives;
    var guess = document.getElementById("guess").value;
    if(guessedLetters.includes(guess)) {
        return false;
    }
    guessedLetters.push(guess);
    printWord();
    document.getElementById("guessedltrs").innerHTML= "guessed letters:" + guessedLetters;
    if(word.indexOf(guess)==-1){
        lives=lives-1;
        document.getElementById("lives").innerHTML="you have " + currentLives +" lives";
    }

    if(currentLives==0){
        document.getElementById("enter").disabled = true;
        document.getElementById("win/lose").innerHTML="you lose, the correct word was " +word + " but you are an idiot and cant spell that";

    }
    if(currentLives==5){
        document.getElementById("img").src="img/hangman-2.jpg";
    }
    if(currentLives==4){
        document.getElementById("img").src="img/hangman-3.gif";
    }
    if(currentLives==3){
        document.getElementById("img").src="img/hangman-4.png";
    }
    if(currentLives==2){
        document.getElementById("img").src="img/hangman-5.png";
    }
    if(currentLives==1){
        document.getElementById("img").src="img/hangman-6.png";
    }
    if(currentLives==0){
        document.getElementById("img").src="img/hangman-7.png";
        document.getElementById("reload").disabled=false;

    }
}
function reload(){
     word="";
    guessedLetters=[];
    lives=6;
     makeWord();
    document.getElementById("guessedltrs").innerHTML="";
    document.getElementById("win/lose").innerHTML="";
    document.getElementById("lives").innerHTML="";
    document.getElementById("img").src=""; 

}

function page(){
    document.getElementById("reload").disabled=true;

}





