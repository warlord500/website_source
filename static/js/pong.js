"use strict";
const paddleSize = 250;
const paddleWidth = 20; 
const ballSize = 15;
window.gameBoard.ball = {
		x: 500,
		y: 200,
		dx: -4,
		dy: -4,
		update: function() {
		let canvas = document.getElementById("gameBoard");
			this.x += this.dx;
			this.y += this.dy;

			//decided to make it a little more intresting!
			const unPredictableBounce = 0 // Math.floor(Math.random()*4) + -2
			//bounce off the walls
			if(this.y  > canvas.height){
				this.y = canvas.height -1 ; 
				this.dy = -this.dy + unPredictableBounce;
				
			} 
			if(this.y < 0){
				this.y = 1; 
				this.dy = -this.dy + unPredictableBounce;
				
			} 		
			
			if(this.x - ballSize > canvas.width){
				this.x = canvas.width - 1; 
				this.dx = -this.dx + unPredictableBounce;
				
			} 
			if(this.x < 0){
				this.x =  1; 
				this.dx = -this.dx+ unPredictableBounce;
				
			} 
			// cap dx and dy
			if (Math.abs(this.dx) >= 7){ 
				this.dx = (this.dx > 0) ? 7 : -7;
 			}
			if (Math.abs(this.dy) >= 7){ 
				this.dy = (this.dy > 0) ? 7 : -7;
 			}

		}
		
		
	} 


function setup(){
	let canvas = document.getElementById("gameBoard");
	window.gameBoard = {};
 	window.gameBoard.P1X = 20;
	window.gameBoard.P2X = 20;
	
	
	drawBoard();
}

function drawBoard(){
	let canvas = document.getElementById("gameBoard");
	let ctx  = canvas.getContext("2d"); 
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//first part draw the boards 
	ctx.fillRect(window.gameBoard.P1X,20,paddleSize,paddleWidth);
	ctx.fillRect(window.gameBoard.P2X,canvas.height-40,paddleSize,paddleWidth);

	// draw the ball!
	ctx.beginPath();
	ctx.arc(window.gameBoard.ball.x,window.gameBoard.ball.y,ballSize,0,2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	
	//the line in the middle!
	ctx.fillRect(0,(canvas.height/2),canvas.width,2);
}

function processKeys(e){
	const speedRate = 10;
	if (e.key == "a"){
		window.gameBoard.P1X -= speedRate;
	}
	if (e.key == "d"){
		window.gameBoard.P1X += speedRate;
	}
	if (e.keyCode == '37'){
		window.gameBoard.P2X -= speedRate;
	}
	if (e.keyCode == '39'){
		window.gameBoard.P2X += speedRate;
		
	}
	
	
	// lock the bars from reaching out of the canvas!
	let canvas = document.getElementById("gameBoard");
	if (window.gameBoard.P1X + paddleSize > canvas.width){
		window.gameBoard.P1X = canvas.width - paddleSize;
	}
	if (window.gameBoard.P1X < 0){
		window.gameBoard.P1X = 0;
	}
	if (window.gameBoard.P2X  + paddleSize > canvas.width){
		window.gameBoard.P2X = canvas.width - paddleSize;
	}
	if (window.gameBoard.P2X < 0){
		window.gameBoard.P2X = 0;
	}
}

 function updateFrame(){
	 
	window.gameBoard.ball.update();
	if() 
	drawBoard();
	 
 }
window.addEventListener("load", function(){
	setup();
    setInterval(updateFrame,33); // once every 30 seconds 30 fps!!
	window.addEventListener("keydown",processKeys);
}); 