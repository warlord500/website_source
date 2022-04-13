console.log("game loading up");
window.addEventListener('load', load);
function load(){
	console.log("running loading function");
	frameUpdate();
}

function frameUpdate (){
	const canvas = document.getElementById("gameBoard");
	const ctx = canvas.getContext("2d");
	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();
}