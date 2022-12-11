document.getElementById("decide").addEventListener("click",decideReward);
window.scrollsBought = 0;
function decideReward(){
	const rewards = ["curse of exercise","curse of traps take d4 quest damage","free crystal set",
			"gain 2*d10 streak bonus add to any random task","d4 loot bonus + 5 gold","10 day streak bonus"];
	const selectedReward = Math.floor(Math.random()*rewards.length);
	//window.alert(rewards[selectedReward]);
	document.getElementById("logreward").innerHTML += (rewards[selectedReward]) + "<br/>";
	window.scrollsBought +=1;
	document.getElementById("scrollsBought").innerHTML = (window.scrollsBought.toString() + " " +
		(window.scrollsBought*10).toString() + "gp"); 

}
