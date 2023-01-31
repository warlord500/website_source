document.getElementById("decide").addEventListener("click",decide_one);
document.getElementById("decide_five").addEventListener("click",decide_five);
document.getElementById("decide_ten").addEventListener("click",decide_ten);
document.getElementById("reset_log").addEventListener("click",reset);
window.scrollsBought = 0;
window.scrollsCost = 0;

function decide_one(){
	decideReward(1,14);
}

function decide_five() {
	decideReward(5,60);
}
function decide_ten(){
	decideReward(10,110);
}

function decideReward(scrollsBought,cost){
	//window.alert(rewards[selectedReward]);
	for(let i = 0; i < scrollsBought; i++){
		let logText = generateLogText();
		document.getElementById("logreward").innerHTML += logText;
	}
	window.scrollsBought += scrollsBought;
	window.scrollsCost += cost; 
	document.getElementById("numScrolls").innerHTML = window.scrollsBought.toString(); 
	document.getElementById("costScrolls").innerHTML = (window.scrollsCost).toString() + "gp"; 

}

function reset(){
	window.scrollsBought = 0;
	window.scrollsCost = 0;
	document.getElementById("numScrolls").innerHTML = window.scrollsBought.toString(); 
	document.getElementById("costScrolls").innerHTML = (window.scrollsCost).toString() + "gp"; 
	document.getElementById("logreward").innerHTML = "log: <br/>";
}

//generates log text simplifies the above loop
//but complicates the generating
function generateLogText(){
	const rewards = ["curse of exercise","curse of traps take d4 quest damage","free crystal set",
			"gain 2*d10 streak bonus add to any random task","d4 loot bonus + 5 gold","10 day streak bonus"];
	let selectedReward = Math.floor(Math.random()*rewards.length);
	let logText = "<label><input type=\"checkbox\"> ";
	if(selectedReward == 1){
		logText += "(" + rollDice4().toString() + "dmg) ";
	} else if( selectedReward == 3){
		logText += "(" + rollDice10().toString() + "streak) ";
	
	} else if( selectedReward == 4){
		logText += "(" + rollDice4().toString() + "habit click) ";
	} else if( selectedReward == 5){
	}
	 logText += (rewards[selectedReward]); 
	logText += "</label><br />";

	return logText;
}

function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const rollDice4 = () => rollDice(1, 4);
const rollDice6 = () => rollDice(1, 6);
const rollDice8 = () => rollDice(1, 8);
const rollDice10 = () => rollDice(1, 10);
const rollDice12 = () => rollDice(1, 12);
const rollDice20 = () => rollDice(1, 20);
const rollSomeUltimateDice = () => rollDice(42, 42);
