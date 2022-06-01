console.log("game loading up");
window.addEventListener('load', load);
gameData = {
	
	"player" : {"x":150,"y": 150},
"enemies":[{ "x": 500, "y": 500}]
}
function load(){
	console.log("running loading function");
	setInterval(1000/30,frameUpdate);
}

function frameUpdate (){
	gameData.player.x += 1
	if gameData.player.x == 200 {
		gameData.player.x = 0;
	}
	const canvas = document.getElementById("gameBoard");
	const ctx = canvas.getContext("2d");
	ctx.moveTo(0+gameData.player.x, 0);
	ctx.lineTo(200+gameData.player.x, 100);
	ctx.stroke();
	ctx.clearRect(0,0,canvas.height,canvas.width);
	
	
}

function keyboardUpdate(){
	
	
}