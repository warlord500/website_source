"use strict";
console.log("game loading up");
window.addEventListener('load', load);
const maxSpeed = 3;
const playerCenterX = 62;
const playerCenterY = 46;
const bulletWidth = 25;
const bulletHeight = 25;
const enemyWidth  =   53; 
const enemyHeight =   46;


window.gameData = {
	
	"player" : {"x":150,"y": 150,"mx": 0, "my" :0, },
	"enemies":[],
	"enemy_bullets" : [],
	"bullets": [],
	"enemyCounter" : 0,
}
function load(){
	const canvas = document.getElementById("gameBoard");
	console.log("running loading function");
	setInterval(frameUpdate,1000/30);
	drawUpdate(canvas);
	canvas.addEventListener("mousemove",updatePlayer)
	//get all keypresses
	document.addEventListener("keypress", keyBoardUpdate);

}
function frameUpdate(){
	const canvas = document.getElementById("gameBoard");
	//first handle controls!!
	updateBullets(canvas);
	updateEnemies(canvas);
	//second handle drawing
	drawUpdate(canvas);
	collisions();
	
}


function keyBoardUpdate(e){
	const bulletSpeed = 15
		//console.log("the key being pressed is " + e.key);
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


function drawUpdate(canvas) {
	
	
	const ctx = canvas.getContext("2d");
	//console.log("drawing screen");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	const playerImg = document.getElementById("player");
	ctx.drawImage(playerImg,gameData.player.x,gameData.player.y);
	//ctx.Rect(0,0,100,100);
		ctx.fillStyle="#000000"
		for(let i=0; i < gameData.bullets.length; i++){
			const bullet = gameData.bullets[i];
			ctx.fillRect(bullet.x,bullet.y,bulletWidth,bulletHeight);
		}
		ctx.fillStyle="#ff0000"
		const enemyImg = document.getElementById("enemy");
		for(let i=0; i < gameData.enemies.length; i++){
			const enemy = gameData.enemies[i];
			
			ctx.drawImage(enemyImg,enemy.x,enemy.y);
			ctx.fillRect(enemy.x,enemy.y-10,enemy.health*15,10);
		}
		ctx.fillStyle="#00cc00";
		for(let i=0; i < gameData.enemy_bullets.length; i++){
			const bullet = gameData.enemy_bullets[i];
			ctx.fillRect(bullet.x,bullet.y,25,25)
		}
		
		
}


function launchBullet(bullet) {
	bullet.x=gameData.player.x+playerCenterX;
	bullet.y=gameData.player.y+playerCenterY;
	gameData.bullets.push(bullet);
	
	
}
function updateBullets(canvas){
	for(let i=0; i < gameData.bullets.length; i++){
			const bullet = gameData.bullets[i];
			bullet.x += bullet.mx;
			bullet.y += bullet.my;
		}
	//collision with walls
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
	for(let i = 0; i < gameData.enemy_bullets.length; i++){
			const bullet = gameData.enemy_bullets[i];
			bullet.x += bullet.mx;
			bullet.y += bullet.my;
	
		}
		
	let j = 0;
	while(j < gameData.enemy_bullets.length ) {
		const bullet = gameData.enemy_bullets[j];
		if(bullet.x < 0 || 
		   bullet.y < 0 || 
		   bullet.x > canvas.width || 
		   bullet.y > canvas.height) {
				gameData.enemy_bullets.splice(j,1);
		   } else {
			   j+=1;
		   }
	}
}

function updateEnemies(canvas){
	//spawn a enemy every so often up to certain amount
	gameData.enemyCounter += 1;
	if (gameData.enemyCounter > 30 && gameData.enemies.length < 5) {
		var obj = {
			x: Math.random() *canvas.width,
			y: Math.random()* canvas.height,
			mx: 14*(Math.random()-0.5),
			my: 14*(Math.random()-0.5),
			bulletCount: 0,
			health: 10,
		};
		gameData.enemies.push(obj);
		gameData.enemyCounter = 0;
	}
	
	//update based on momuntem!
	for(let i=0; i < gameData.enemies.length; i++){
			const enemy = gameData.enemies[i];
			enemy.x += enemy.mx;
			enemy.y += enemy.my;
			enemy.bulletCount += 1;
			
				   
		   if(enemy.x < 0){  
					enemy.x = 1;
					enemy.mx = bounce(enemy.mx);
		   }
		   if(enemy.y < 0){  
					enemy.y = 1; 
					enemy.my = bounce(enemy.my);
					}
					
		   if(enemy.x > canvas.width) { 
						enemy.x = canvas.width -1; 
						enemy.mx = bounce(enemy.mx);
						}
		   if(enemy.y > canvas.height){ 
						enemy.y = canvas.height-1; 
						enemy.my = bounce(enemy.my);
						}		   
		//distance from enemy and player. 
		//sin and cosin for angle? 
		// angle multiplied by speed. 
		
		if (enemy.bulletCount > 45 ) {
			const opposite = (enemy.y-(gameData.player.y+playerCenterY));
			const adjacent = (enemy.x-(gameData.player.x+playerCenterX));
			
			// atan only accounts for two of the quadrants. 
			//thus we must compensate for that with code below
			let deltaAngle = 0;
			if(Math.sign(opposite) == -1){
				if(Math.sign(adjacent) == -1){
					deltaAngle = -Math.PI;
				} else {
					deltaAngle = Math.PI;
				}
			}  
			
			//cant divide by zero thus adjaceny if.
			let mx = 0;
			let my = 0;
			
			if(adjacent == 0){
				//is bullet going straight up or down?
				my = Math.sign(opposite)*10;
			} else {
			
				const angle = Math.atan(opposite/adjacent) + deltaAngle;
				mx = Math.cos(angle)*10; 
				my = Math.sin(angle)*10;
			}
			 
			 enemy.bulletCount = 0;
			gameData.enemy_bullets.push({ 
				x: enemy.x, 
				y: enemy.y,
				mx: mx,
				my: my,
			});
			
		}
	}
		
}
// enemies should bounce against a wall. 
// 
function bounce(momuntem){
	const delta = 7*(Math.random() - 0.5);
	return Math.min(10*-Math.sign(momuntem) ,-1.05*momuntem ) + delta; 
}


function collisions(){
	
	//enemy bullets collide with player!!
	const bulletHeightObj = {width: bulletWidth, height: bulletHeight};
	const playerHeightObj = {width: playerCenterX*2, height: playerCenterY*2};
	let j = 0;
	 while(j < gameData.enemy_bullets.length ) {
		const bullet = gameData.enemy_bullets[j];
		if(doOverlap(bullet,gameData.player,bulletHeightObj,playerHeightObj)) {
				gameData.enemy_bullets.splice(j,1);
				//remove player health!
				//update dispaly for that!
		   } else {
			   j+=1;
		   }
	}
	
	const enemyHeightObj = {width: enemyWidth, height: enemyHeight};
	//player bullets collide with enemies?
	  
	let x = 0;
	let i = 0;
	 while(x < gameData.bullets.length ) {
		 const bullet = gameData.enemy_bullets[x];
		 i = 0;
		 while (i < gameData.enemies.length){
			 const enemy = gameData.enemies[i];
			 if(doOverlap(bullet,enemy,bulletHeightObj,enemyHeightObj)) {
			   
		
				gameData.bullets.splice(j,1);
				enemy.health -= 1;
				//remove player health!
				//update dispaly for that!
		   } else {
			   i+=1;
		   }
		 }
		x += 1;
	}
	function doOverlap(rect1,rect2,hw1,hw2){
        // If one rectangle is on left side of other
        if ((rect1.x > (rect2.x + hw2.width)) || 
			(rect2.x > (rect1.x + hw1.width  ))) {
            return false;
        }
		// i am not sure why this needs to be not true for it to work! 
		const oAt = !((rect1.y + hw1.height) > rect2.y);
		const tAo = !((rect2.y + hw2.height) > rect1.y);
        // If one rectangle is above other
        if ( oAt|| tAo ) {
            return false;
        }
 
        return true;
	}
	
}

function updatePlayer(e) {
	//this offset numbers are based on the size of the image divided by 2! 
	// so that you are set at the center!
		gameData.player.x = e.offsetX-playerCenterX;
		gameData.player.y = e.offsetY-playerCenterY;

	
}