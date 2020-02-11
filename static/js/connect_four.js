const WidthBlocks = 7
const HeightBlocks = 6;
function setup(){
	window.gameData = {};
	//true = black, false = red;
	window.gameData.PlayerTurn = false;
	document.getElementById("player").innerHTML = window.gameData.PlayerTurn ? "black" : "red";
	
	//enum ahead, 
	// 0 = empty
	// 1 = red
	// 2 = black
	window.gameData.boardPieces = [];
		for(let x=0; x < WidthBlocks; x++) {
			var height = []
			for(let y=0; y < HeightBlocks; y++){
				height[y] = 0;
			}
		window.gameData.boardPieces[x] = height;
	}
	redrawBoard();
} 
function redrawBoard(){
	document.getElementById("player").innerHTML = window.gameData.PlayerTurn ? "black" : "red";
	
	let canvas = window.document.getElementById("gameBoard"); 
	let ctxt = canvas.getContext("2d");
	ctxt.clearRect(0,0,canvas.width,canvas.height);
	let blockWidth = canvas.width / (WidthBlocks);
	let blockHeight = canvas.height / (HeightBlocks)
	function line(x1, y1, x2, y2) {
            ctxt.beginPath();
            ctxt.moveTo(x1, y1);
            ctxt.lineTo(x2, y2);
            ctxt.closePath();
            ctxt.stroke();
        }
	for(let i = 1; i < HeightBlocks; i++){
		
		line(0, blockHeight*i, canvas.width, blockHeight*i);
	} 
	for(let i = 1; i < WidthBlocks; i++){
		line(blockWidth*i,0, blockWidth*i,canvas.height);
	} 
	
	for(let x=0; x < WidthBlocks; x++){
		for(let y=0; y < HeightBlocks; y++){
			
			if(window.gameData.boardPieces[x][y] == 1 || window.gameData.boardPieces[x][y] == 2){
				if(window.gameData.boardPieces[x][y] == 2){
					ctxt.fillStyle = "#FF0000";
				} else {
					ctxt.fillStyle = "#000000";
				}
				ctxt.beginPath();
				let centerX = (x+0.5)*blockHeight;
				let centerY = (y+0.5)*blockWidth;
				let diameter = Math.min(blockHeight,blockWidth)/2.3;
				ctxt.arc(centerX, centerY,diameter, 0, Math.PI * 2);
				ctxt.fill();
				ctxt.closePath();
				
			}
		}
	}
} 
//it is theoretically possible to merge these loops into one big loop.
// however I thought, the different counts being ran simultaneously would be really confusing 
//the disadvantage is similarility between loops. 
function checkIfWin(x,y,currentPlayer){
	//vertical check first
	// this one is simpler than the other sections
	//only need to count in one direction due to placement restrictions.
	let currentCount = 1;
	while(currentCount < 5){
		if( y+currentCount < HeightBlocks && window.gameData.boardPieces[x][y+currentCount] == currentPlayer){
				currentCount += 1;
		} else {
			// we hit not the currentPlayer or blank piece. 
			break;
		}
	} 
	if(currentCount == 4){
		return true;
	} 
	
	//horizontal checking
	//ok this should be easier than diagonal. 
	currentCount = 0;
	let modifier = -3
	while(currentCount != 4 && modifier < 4){
		if( x+modifier < WidthBlocks && x+modifier > -1){ 
			if (window.gameData.boardPieces[x+modifier][y] == currentPlayer ){
					currentCount += 1;
			} else {
				// we hit not the currentPlayer or blank piece. 
				// ok now determine if we have gone too far to reset count. 
				if(modifier > 0){
					break;
				} else {
					currentCount = 0;
				}
			}
		}
		modifier += 1
	} 
	if(currentCount == 4){
		return true;
	} 
	currentCount = 0;
	modifier = -3
	while(currentCount != 4 && modifier < 4){
		if( x+modifier < WidthBlocks && x+modifier > -1 && y-modifier < HeightBlocks && y-modifier > -1){ 
			if (window.gameData.boardPieces[x+modifier][y-modifier] == currentPlayer ){
					currentCount += 1;
			} else {
				// we hit not the currentPlayer or blank piece. 
				// ok now determine if we have gone too far to reset count. 
				if(modifier > 0){
					break;
				} else {
					currentCount = 0;
				}
			}
		}
		modifier += 1
	} 
	if(currentCount == 4){
		return true;
	} 
	currentCount = 0;
	modifier = -3
	while(currentCount != 4 && modifier < 4){
		if( x+modifier < WidthBlocks && x+modifier > -1 && y+modifier < HeightBlocks && y+modifier > -1){ 
			if (window.gameData.boardPieces[x+modifier][y+modifier] == currentPlayer ){
					currentCount += 1;
			} else {
				// we hit not the currentPlayer or blank piece. 
				// ok now determine if we have gone too far to reset count. 
				if(modifier > 0){
					break;
				} else {
					currentCount = 0;
				}
			}
		}
		modifier += 1
	} 
	if(currentCount == 4){
		return true;
	}
	//diagonal
	return false;
}

function placeAPiece(MouseEvent){
	console.log(window.gameData.PlayerTurn ? "black" : "red");
	let canvas = window.document.getElementById("gameBoard");	
	let blockWidth = canvas.width / (WidthBlocks);
	let blockHeight = canvas.height / (HeightBlocks);
	let placeX = Math.floor(MouseEvent.offsetX / (blockWidth));
	let placeY = Math.floor(MouseEvent.offsetY / blockHeight);
	/* if (placeY > 0) {
		alert("can only place on Top Row");
		
	} */
	//utilize y rather than placeY because you cant place any where just drop pieces down.
	for(let y = HeightBlocks-1; y >= 0; y--){
		if(window.gameData.boardPieces[placeX][y] == 0){
			window.gameData.boardPieces[placeX][y] = window.gameData.PlayerTurn ? 1 : 2; 
			if(checkIfWin(placeX,y,window.gameData.PlayerTurn ? 1 : 2)){
				alert("the player who is " +  (window.gameData.PlayerTurn ? "black" : "red") + " won!!!");
			}
			window.gameData.PlayerTurn  = !window.gameData.PlayerTurn;
			break;
		} 
		if (y == 0){//should exit the function
			//alert("this column is filled, try another column!!");
		}
	}
	
	redrawBoard();
	
}

window.addEventListener("load", function(){
	setup();
	window.document.getElementById("gameBoard").addEventListener("click",placeAPiece);
	window.document.getElementById("updateGameData").addEventListener("click",setup);
}); 