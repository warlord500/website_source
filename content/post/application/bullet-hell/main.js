"use strict";
console.log("game loading up");
window.addEventListener('load', load);
const maxSpeed = 3;
const playerCenterX = -62;
const playerCenterY = -46;

window.gameData = {
	
	"player" : {"x":150,"y": 150,"mx": 0, "my" :0, },
	"enemies":[{ "x": 500, "y": 500}],
	"bullets": [],
}
function load(){
	const canvas = document.getElementById("gameBoard");
	console.log("running loading function");
	setInterval(frameUpdate,1000/30);
	drawUpdate();
	canvas.addEventListener("mousemove",updatePlayer)
	//get all keypresses
	document.addEventListener("keypress", keyBoardUpdate);

}
function frameUpdate(){
	//first handle controls!!
	//updateBullets();
	//updateEnemies();
	//second handle drawing
	drawUpdate();
	
}


function keyBoardUpdate(e){
		console.log("the key being pressed is " + e.key);
		if (e.key == "w") {
			launchBullet({"my" :2, "mx" :0 });
		}
		if (e.key == "s") {
			launchBullet({"my" :-2, "mx" :0 });
		}
		if (e.key == "d") {
			launchBullet({"my" :0, "mx" :2 });
		}
		if (e.key == "a") {
			launchBullet({"my" :0, "mx" :-2 });
		}
	
}


function drawUpdate() {
	
	const canvas = document.getElementById("gameBoard");
	const ctx = canvas.getContext("2d");
	//console.log("drawing screen");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	const playerImg = document.getElementById("player");
	ctx.drawImage(playerImg,gameData.player.x,gameData.player.y);
	//ctx.Rect(0,0,100,100);
		for(var i=0; i < gameData.bullets.length; i++){
			const bullet = gameData.bullets[i];
			ctx.fillRect(bullet.x,bullet.y,25,25)
		}
}


function launchBullet(bullet) {
	bullet.x=gameData.player.x-playerCenterX;
	bullet.y=gameData.player.y-playerCenterY;
	gameData.bullets.push(bullet);
	
	
}




function updatePlayer(e) {
	//this offset numbers are based on the size of the image divided by 2! 
	// so that you are set at the center!
		gameData.player.x = e.offsetX+playerCenterX;
		gameData.player.y = e.offsetY+playerCenterY;

	
}