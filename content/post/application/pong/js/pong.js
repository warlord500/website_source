"use strict";
const paddleSize = 250;
const paddleWidth = 20; 
const ballSize = 15;
const distanceFromWall = 30;
const ballCapSpeed = 15;
window.gameBoard.ball = {
		x: 500,
		y: 200,
		dx: -4,
		dy: -4,
		reset: function(){
			let top_or_bottom = (Math.random() > 0.5) ? 1 : -1;
			this.x = 500;
			this.y = 200;
			this.dx = ballCapSpeed*0.5*top_or_bottom;
			this.dy = ballCapSpeed*0.5*top_or_bottom;
		},
		
		update: function() {
		let canvas = document.getElementById("gameBoard");
			this.x += this.dx;
			this.y += this.dy;

			//decided to make it a little more intresting!
			const unPredictableBounce =  Math.floor(Math.random()*4) + -2
			//bounce off the walls
			if(this.y < 0){
				goal("top");
			} 
			
			if(this.y  > canvas.height){
				goal("bottom");
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
			if (Math.abs(this.dx) >= ballCapSpeed){ 
				this.dx = (this.dx > 0) ? ballCapSpeed : -ballCapSpeed;
 			}
			if (Math.abs(this.dy) >= ballCapSpeed){ 
				this.dy = (this.dy > 0) ? ballCapSpeed : -ballCapSpeed;
 			} 
		},
	} 


function setup(){
	let canvas = document.getElementById("gameBoard");
 	window.gameBoard.P1X = 20; //top
	window.gameBoard.P2X = 20; //bottom
	window.gameBoard.g2 = 0;
	window.gameBoard.g1 = 0;
	window.gameBoard.keys = {
		top_left: false,
		top_right: false,
		bottom_left: false, 
		bottom_right: false,
	}
	
	
	drawBoard();
}
function goal(who){
	let goalCount = 0
	if(who == "top"){
		window.gameBoard.g1 += 1;
		goalCount = window.gameBoard.g1;
	} else if(who == "bottom"){
		window.gameBoard.g2 += 1;
		goalCount = window.gameBoard.g2;
	}
	let GoalCounter = document.getElementById(who);
	GoalCounter.innerHTML  = goalCount;
	
	alert( who + " completed a goal!!");
	window.gameBoard.ball.reset();

}


//set is used so I dont have to write 
// the clearkeys which only changes the set!
function processKeys(e,set){
	if (e.key == "a"){
		window.gameBoard.keys.top_left= set;
	}
	if (e.key == "d"){
	
		window.gameBoard.keys.top_right= set;
	}
	if (e.keyCode == '37'){ // left arrow
		window.gameBoard.keys.bottom_left= set;
	}
	if (e.keyCode == '39'){ // right arrow!
		window.gameBoard.keys.bottom_right= set;
		
	}
}

 function updatePaddles(){
	const speedRate = 12;
	if (window.gameBoard.keys.top_left){
		window.gameBoard.P1X -= speedRate;
	}
	if (window.gameBoard.keys.top_right){
		window.gameBoard.P1X += speedRate;
	}
	if (window.gameBoard.keys.bottom_left){
		window.gameBoard.P2X -= speedRate;
	}
	if (window.gameBoard.keys.bottom_right){
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


function drawBoard(){
	let canvas = document.getElementById("gameBoard");
	let ctx  = canvas.getContext("2d"); 
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//first part draw the boards 
	ctx.fillRect(window.gameBoard.P1X,distanceFromWall,paddleSize,paddleWidth);
	ctx.fillRect(window.gameBoard.P2X,canvas.height-distanceFromWall,paddleSize,paddleWidth);

	// draw the ball!
	ctx.beginPath();
	ctx.arc(window.gameBoard.ball.x,window.gameBoard.ball.y,ballSize,0,2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	
	//the line in the middle!
	ctx.fillRect(0,(canvas.height/2),canvas.width,2);
}


 function updateFrame(){
	 
	 
	const ball = window.gameBoard.ball;
	const canvas = document.getElementById("gameBoard");
	
	const unPredictableBounce =  Math.floor(Math.random()*4) + -2;
	window.gameBoard.ball.update();
	updatePaddles();
	
	if(ball.y < distanceFromWall && 
	  (ball.x < paddleSize + window.gameBoard.P1X) &&
	  (ball.x > window.gameBoard.P1X)){
		  // this isnt the best method but until I have decided to write something 
		  // better it will work for now!!
		  // we have intercepted the paddle. 
		  ball.dx = -ball.dx + unPredictableBounce;
		  ball.dy = -ball.dy;
		  // bounce the ball!
	  }
	  
	  if(ball.y > canvas.height-distanceFromWall && 
	  (ball.x < paddleSize + window.gameBoard.P2X) &&
	  (ball.x > window.gameBoard.P2X)){
		  // this isnt the best method but until I have decided to write something 
		  // better it will work for now!!
		  // we have intercepted the paddle. 
		  ball.dx = -ball.dx + unPredictableBounce;
		  ball.dy = -ball.dy;
		  // bounce the ball!
	  }
	  
	//calling it in update frame, 
	// makes movement smoother. 
	// also can proccess two keys!
	
	drawBoard();
	 
 }
 
window.addEventListener("load", function(){
	setup();
    setInterval(updateFrame,33); // once every 30 seconds 30 fps!!
	// this for smoother movement!!
	window.addEventListener("keydown",function(e){processKeys(e,true)});
	window.addEventListener("keyup",function(e){processKeys(e,false)});
}); 