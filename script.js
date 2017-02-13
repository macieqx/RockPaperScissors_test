var won = 0;
var lost = 0;

document.getElementById("yourScore").innerHTML = won;
document.getElementById("compScore").innerHTML = lost;

function chooseP() {
	userChoice = "Paper";
	document.getElementById("p").style = 'border: 10px white solid;';
	document.getElementById("k").style = 'border: none;';
	document.getElementById("n").style = 'border: none;';
}

function chooseK() {
	userChoice = "Rock";
	document.getElementById("k").style = 'border: 10px white solid;';
	document.getElementById("p").style = 'border: none;';
	document.getElementById("n").style = 'border: none;';
}

function chooseN() {
	userChoice = "Scissors";
	document.getElementById("n").style = 'border: 10px white solid;';
	document.getElementById("p").style = 'border: none;';
	document.getElementById("k").style = 'border: none;';
}

function play(){


var defaultCompChoice = Math.random();
var compChoice = defaultCompChoice * 3;

if (compChoice < 1) {
    compChoice = "Rock";
}
else if (compChoice > 2) {
    compChoice = "Scissors";
}
else {
    compChoice = "Paper";
}

if (userChoice === compChoice) {
document.getElementById("results").innerHTML = "Draw";
}

else if (compChoice === "Rock") {

if (userChoice === "Paper") {
document.getElementById("results").innerHTML = "You won! Computer choice was " + compChoice;
won++; }

else {
document.getElementById("results").innerHTML = "You lost! Computer choice was " + compChoice;
lost++; }
}

else if (compChoice === "Scissors") {

if (userChoice === "Paper") {
document.getElementById("results").innerHTML = "You lost! Computer choice was " + compChoice;
lost++;  }

else {
document.getElementById("results").innerHTML = "You won! Computer choice was " + compChoice;
won++; }
}

else {
if (userChoice === "Rock") {
document.getElementById("results").innerHTML = "You lost! Computer choice was " + compChoice;
lost++; }

else {
document.getElementById("results").innerHTML = "You won! Computer choice was " + compChoice;
won++; }
}

document.getElementById("yourScore").innerHTML = won;
document.getElementById("compScore").innerHTML = lost;


console.log(userChoice);
console.log(compChoice);
console.log(defaultCompChoice); 
console.log(lost); 
console.log(won); 
}

function resetGame(){
	won = 0;
	lost = 0;
	defaultCompChoice = 0;
	userChoice = 0;
	document.getElementById("p").style = 'border: none;';
	document.getElementById("n").style = 'border: none;';
	document.getElementById("k").style = 'border: none;';
	document.getElementById("results").innerHTML = "";
	document.getElementById("yourScore").innerHTML = won;
	document.getElementById("compScore").innerHTML = lost;

}