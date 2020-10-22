const multiplayerURL = '/post/application/ultimate-tic-tac-toe/multiplayer.php';
//ok I know this is a rewBSite but to be honest, 
// I only partially know what is going on in the other code.
function setup(){
	// true = x, false = O
	window.gameData.playerTurn = true;
	//(-1,-1) represent allowed any place.
	window.gameData.wherePlaceSquare = { x: -1, y: -1 }
	window.gameData.drawBoardTimes = 1;
	
	// i wish java script support enums!!
	// for squares the logic is 
	// 0 = no one claimed yet.
	// 1 = X claimed it 
	// 2 = O claimed it
	
	//this is so that I can pass it to checkIfWin;
	window.gameData.overAllWins = [];
	for(let x=0; x < 3; x++) {
		window.gameData.overAllWins[x] = [0,0,0];
	}
	
	
	window.gameData.overAllSquares = [];
	for(let x=0; x < 3; x++) {
		window.gameData.overAllSquares[x] = [];
	}
	for(let x = 0; x < 3; x++){
		for(let y = 0; y < 3; y++){
			squareObj = [];
			for(let x=0; x < 3; x++) {
				squareObj[x] = [0, 0, 0];
			}	
			window.gameData.overAllSquares[x][y] = squareObj;
		}
	}
	
	//finally reset the drawing board. 
	drawBoard();
}

function drawBoard(){
	document.getElementById("player").innerHTML = window.gameData.playerTurn ? "x" : "O";
	document.getElementById("place").innerHTML = "(" + window.gameData.wherePlaceSquare.x + "," + window.gameData.wherePlaceSquare.y + ")";
	
	let canvas = document.getElementById("gameBoard");
	let context = canvas.getContext("2d");
	const wLS = (canvas.width / 9);
	const hLS = (canvas.height / 9);
	const wL = canvas.width;
	const hL = canvas.height;
	context.fillStyle = "white";
	context.fillRect(0, 0, wL, hL);
	context.fillStyle = "black";

	function line(x1, y1, x2, y2) {
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.closePath();
            context.stroke();
        }
	
	
	for(let i = 1; i < 9; i++){
		if (i % 3 == 0) {
			
			context.lineWidth += 3
			line(0, hLS*i, wL, hLS*i);
			context.lineWidth -= 3;
		} else {
			line(0, hLS*i, wL, hLS*i);
		}
		
	} 
	for(let i = 1; i < 9; i++){
		if (i % 3 == 0) {
			
			context.lineWidth += 3
			line(wLS*i, 0, wLS*i, hL);
			context.lineWidth -= 3;
		} else {
			line(wLS*i, 0, wLS*i, hL);
		}
	} 
	for(var bx = 0; bx < 3; bx++) {
		for(var by = 0; by < 3; by++) {
			for(var lx = 0; lx < 3; lx++) {
				for(var ly = 0; ly < 3; ly++) {
					 let value = window.gameData.overAllSquares[bx][by][lx][ly];
					 if(value === 1) {
						rightX = 3*wLS*bx + wLS*lx;
						leftX = 3*wLS*bx + wLS*(lx+1);
						topY = 3*hLS*by + hLS*ly;
						bottomY = 3*hLS*by + hLS*(ly+1);
						
						line(rightX,topY, leftX,bottomY);
						line(rightX,bottomY,leftX,topY);
					} else if(value === 2) {
					 	context.beginPath();
						const centerX = ((lx+bx*3)+0.5)*wLS;
						const centerY = ((ly+by*3)+0.5)*hLS;
						const diameter = Math.min(wLS,hLS)/2.3;
						context.arc(centerX, centerY,diameter, 0, Math.PI * 2);
						context.stroke();
						context.closePath();
					} 
				}
			}
		} 
	}
}

 function checkIfWin(playerTurn,square) {
	const p  = playerTurn;
	var win = false;
	
	//horizontal
	for(var i = 0; i < 3; i++) {
		win = win || (square[i][0] === p) && (square[i][1] === p) && (square[i][2] === p);
		if(win) return win;
	}
	
	//vertical
	for(var i = 0; i < 3; i++) {
		win = win || ((square[0][i] === p) && (square[1][i] === p) && (square[2][i] === p));
		if(win) return win;
	}
	
	//diagonal
	win = (square[0][0] === p) && (square[1][1] === p) && (square[2][2] === p);
	if(win) return win;
	win = (square[0][2] === p) && (square[1][1] === p) && (square[2][0] === p);
	return win;
}

 function place(MouseEvent) {
	let canvas = document.getElementById("gameBoard");
	// BS big square, LS littleSquare.
	const wBS = (canvas.width  / 3);
    const hBS = (canvas.height / 3);
	const wLS = (canvas.width  / 9);
    const hLS = (canvas.height / 9);
	
	const squareX = Math.floor(MouseEvent.offsetX / wBS);
	const squareY = Math.floor(MouseEvent.offsetY / hBS);
	
	const lsqX = Math.floor((MouseEvent.offsetX - squareX * wBS) / wLS);
	const lsqY = Math.floor((MouseEvent.offsetY - squareY * hBS) / hLS);
	console.log("attempt to place at sqx:" + squareX + " sqY" + squareY + " lsqX:" + lsqX + " lsqY:" + lsqY);
    const placeAny =  (window.gameData.wherePlaceSquare.x == -1) &&  (window.gameData.wherePlaceSquare.y == -1);
	console.log(window.gameData.wherePlaceSquare.x == -1);
	console.log(window.gameData.wherePlaceSquare.y == -1);
	
	const currentPlayer =  window.gameData.playerTurn ? 1 : 2;	
	if (placeAny || window.gameData.wherePlaceSquare.x == squareX && window.gameData.wherePlaceSquare.y == squareY) {
		// we are good to place it down big square wise.
		// check if that spot hasn
		if (window.gameData.overAllSquares[squareX][squareY][lsqX][lsqY] == 0){ // spot empty 
			
			 window.gameData.overAllSquares[squareX][squareY][lsqX][lsqY] = currentPlayer;
			 window.gameData.playerTurn = !window.gameData.playerTurn; //swap turns
			 
			if (window.gameData.overAllWins[lsqX][lsqY] == 0) {
					window.gameData.wherePlaceSquare.x = lsqX;
					window.gameData.wherePlaceSquare.y = lsqY;
			}	else {
					window.gameData.wherePlaceSquare.x = -1;
					window.gameData.wherePlaceSquare.y = -1;
			}
				
				if (checkIfWin(currentPlayer,window.gameData.overAllSquares[squareX][squareY])){
						const currentPlayerChar = currentPlayer == 1 ? "x" : "o";
						alert( currentPlayerChar + " won a gameBoard");
						//won a major board!! 
						window.gameData.overAllWins[squareX][squareY] = currentPlayer;
						//now checking for overall win
						if (checkIfWin(currentPlayer,window.gameData.overAllWins)){
							alert("someone Won!!");
						}
				}
			} else {
				alert("can not place on already claimed spot");
			}
			
	} else {
		alert("you can not place there");
		
	}
    
	
	drawBoard();
} 

function mulitplayerSwitch(e){
	
	const userName = window.prompt("enter a username to start:","user" +  Math.round(Math.random()*1000));
	window.alert("your userName is " + userName);
	fetch(multiplayerURL + "?UserName=" + encodeURIComponent(userName) + "&listUsers=True").then(res => res.text()).then(displayUserNames);
	
}
function displayUserNames(data){
	console.log(data);
	// for debugging purposes we convert the text here to json.
	let UserData =  JSON.parse(data);
	console.log(UserData);
	const listUsers = document.getElementById("listUsers");
	listUsers.innerHTML = "";
	for(let index = 0; index < UserData.length; index++){
		listUsers.innerHTML += "<li>" + UserData[index].user + "</li>";
	}
}

window.addEventListener("load",function(){
	window.gameData = {};
	document.getElementById("updateGameData").addEventListener("click",function(){
		console.log("refresh has been called" + window.gameData.playerTurn);
		setup();
	});
	document.getElementById("gameBoard").addEventListener("click",place);
	setup();
	//attempting to load user data.
	fetch(multiplayerURL + '?listUsers=True').
	then(res => res.text())
	.then(displayUserNames);
	document.getElementById("switchMulti").addEventListener("click",mulitplayerSwitch);
});