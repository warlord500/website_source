document.getElementById("decide").addEventListener("click",decide_one);
document.getElementById("decide_five").addEventListener("click",decide_five);
document.getElementById("decide_ten").addEventListener("click",decide_ten);
document.getElementById("reset_log").addEventListener("click",reset);
window.scrollsBought = 0;
window.scrollsCost = 0;
function decideReward(scrollsBought,cost){
	const rewards = ["curse of exercise","curse of traps take d4 quest damage","free crystal set",
			"gain 2*d10 streak bonus add to any random task","d4 loot bonus + 5 gold","10 day streak bonus"];
	//window.alert(rewards[selectedReward]);
	let selectedReward = Math.floor(Math.random()*rewards.length);
	for(let i = 0; i < scrollsBought; i++){
		selectedReward = Math.floor(Math.random()*rewards.length);
		let logText = (rewards[selectedReward]) + "<br/>";
		document.getElementById("logreward").innerHTML += logText;
	}
	window.scrollsBought += scrollsBought;
	window.scrollsCost += cost; 
	document.getElementById("numScrolls").innerHTML = window.scrollsBought.toString(); 
	document.getElementById("costScrolls").innerHTML = (window.scrollsCost).toString() + "gp"; 

}
function decide_one(){
	decideReward(1,14);
}

function decide_five() {
	decideReward(5,60);
}
function decide_ten(){
	decideReward(10,110);
}

function reset(){
	window.scrollsBought = 0;
	window.scrollsCost = 0;
	document.getElementById("numScrolls").innerHTML = window.scrollsBought.toString(); 
	document.getElementById("costScrolls").innerHTML = (window.scrollsCost).toString() + "gp"; 
	document.getElementById("logreward").innerHTML = "log: <br/>";
}
