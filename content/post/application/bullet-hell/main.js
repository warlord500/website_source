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
	"enemyCounter" : 0,
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
	updateBullets();
	updateEnemies();
	//second handle drawing
	drawUpdate();
	
}


function keyBoardUpdate(e){
	const bulletSpeed = 15
		console.log("the key being pressed is " + e.key);
		if (e.key == "w") {
			launchBullet({"my" :-bulletSpeed, "mx" :0 });
		}
		if (e.key == "s") {
			launchBullet({"my" :bulletSpeed, "mx" :0 });
		}
		if (e.key == "d") {
			launchBullet({"my" :0, "mx" :bulletSpeed });
		}
		if (e.key == "a") {
			launchBullet({"my" :0, "mx" :-bulletSpeed });
		}
		if (e.key == "f") {
			launchBullet({"my" :-bulletSpeed, "mx" :0 });
			launchBullet({"my" :bulletSpeed, "mx" :0 });
			launchBullet({"my" :0, "mx" :bulletSpeed });
			launchBullet({"my" :0, "mx" :-bulletSpeed });
			//other directions
			launchBullet({"my" :bulletSpeed, "mx" : bulletSpeed  });
			launchBullet({"my" :bulletSpeed, "mx" : -bulletSpeed  });
			launchBullet({"my" :-bulletSpeed, "mx" : bulletSpeed  });
			launchBullet({"my" :-bulletSpeed, "mx" : -bulletSpeed  });
			
			
			
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
		for(let i=0; i < gameData.bullets.length; i++){
			const bullet = gameData.bullets[i];
			ctx.fillRect(bullet.x,bullet.y,25,25)
		}
		const enemyImg = document.getElementById("enemy");
		for(let i=0; i < gameData.enemies.length; i++){
			const enemy = gameData.enemies[i];
			ctx.drawImage(enemyImg,enemy.x,enemy.y);
		}
		
}


function launchBullet(bullet) {
	bullet.x=gameData.player.x-playerCenterX;
	bullet.y=gameData.player.y-playerCenterY;
	gameData.bullets.push(bullet);
	
	
}
function updateBullets(){
	for(let i=0; i < gameData.bullets.length; i++){
			const bullet = gameData.bullets[i];
			bullet.x += bullet.mx;
			bullet.y += bullet.my;
		}
	//collision with walls
	const canvas = document.getElementById("gameBoard");
	let i = 0;
	while(i < gameData.bullets.length ) {
		const bullet = gameData.bullets[i];
		if(bullet.x < 0 || 
		   bullet.y < 0 || 
		   bullet.x > canvas.width || 
		   bullet.y > canvas.height) {
				gameData.bullets.splice(i,1);
		   } else {
			   i+=1;
		   }
		
	}
	//collision with enemies
	
}

function updateEnemies(){
	//spawn a enemy every so often up to certain amount
	gameData.enemyCounter += 1;
	if (gameData.enemyCounter > 30 && gameData.enemies.length < 5) {
		const pickOneOfFour = Math.floor(Math.random() * 4);
		var obj = {};
		/*if pickOneOfFour = 0 {
			obj.x = 100;
			obj.y = 100;
		
		} else if pickOneOfFour = 1 {
			obj.x =550
			obj.y =600
		
		}*/
		obj.x = 100;
		obj.y = 200; 
		obj.mx = 2;
		obj.my = 3;
		gameData.enemies.push(obj);
		gameData.enemyCounter = 0;
	}
	
	//update based on momuntem!
	for(let i=0; i < gameData.enemies.length; i++){
			const enemy = gameData.enemies[i];
			enemy.x += enemy.mx;
			enemy.y += enemy.my;
		}
}

function updatePlayer(e) {
	//this offset numbers are based on the size of the image divided by 2! 
	// so that you are set at the center!
		gameData.player.x = e.offsetX+playerCenterX;
		gameData.player.y = e.offsetY+playerCenterY;

	
}