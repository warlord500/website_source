const upper_a = 65;
const WidthBlocks = 4;
const HeightBlocks = 4;
function setup(){
	window.gameData = {};
	
	//hmm havent decided how this is gonna work yet!! 
	window.gameData.PlayerTurn = true;
	window.gameData.selection =  [];
	
	window.gameData.gameBoard = [];
	for(let x = 0; x < 4; x++){
		window.gameData.gameBoard[x] = [];
		for(let y = 0; y < 4; y++){
			window.gameData.gameBoard[x][y] = {
					letter: String.fromCharCode(Math.floor(upper_a + (Math.random()* 26))),
					selected: false,
				}
			
		}
		
	}
	document.getElementById("number_of_words").innerHTML = "???";
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		window.gameData.words = this.responseText.split("\n");
	}
  };
  xhttp.open("GET", "js/words.txt", true);
  xhttp.send(); 
  drawBoard();
} 

function drawBoard(){
	var canvas = document.getElementById("gameBoard");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	let blockWidth = canvas.width / 4;
	let blockHeight = canvas.height / 4;


	  function line(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.closePath();
		ctx.stroke();
	  }
	  for(let i = 1; i < 4; i++){

		line(0, blockHeight*i, canvas.width, blockHeight*i);
	  } 
	  for(let i = 1; i < 4; i++){
		line(blockWidth*i,0, blockWidth*i,canvas.height);
	  } 
	
	ctx.font="120px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	for(let x = 0; x < 4; x++){
		for(let y = 0; y < 4; y++){
			if (window.gameData.gameBoard[x][y].selected) {
				ctx.fillStyle = "yellow";
				//the pixel adjustments are for not drawing over the grid
				ctx.fillRect(blockWidth*(x)+2,blockHeight*(y)+2,blockWidth-4,blockHeight-4); 
				ctx.fillStyle = "red";
			}
			ctx.fillText(window.gameData.gameBoard[x][y].letter, blockWidth*(x+1) - 75, blockHeight*(y+1)- 45);
		
				
		}
	}
		
} 

function selectALetter(MouseEvent){
	let canvas = window.document.getElementById("gameBoard");
	let blockWidth = canvas.width / (WidthBlocks);
	let blockHeight = canvas.height / (HeightBlocks);
	let placeX = Math.floor(MouseEvent.offsetX / (blockWidth));
	let placeY = Math.floor(MouseEvent.offsetY / blockHeight);
	if(window.gameData.selection.length == 0){
		window.gameData.gameBoard[placeX][placeY].selected = true;
		window.gameData.selection.push( { x: placeX, y: placeY });
		
	} else {
		let cords = window.gameData.selection[window.gameData.selection.length-1];
		if(Math.abs(cords.x - placeX) <= 1 && Math.abs(cords.y - placeY) <= 1){
			window.gameData.gameBoard[placeX][placeY].selected = true;
			window.gameData.selection.push( { x: placeX, y: placeY });
		} else {
			
			alert("must select adjacent nodes");
		}
	}
	//deal with invalid selection
	//have an empty selection loop somewhere here.
	drawBoard();
	
}
//returns true if string is in the dictionary.
function checkWord(){
	var word = "";
	for(let i = 0; i < window.gameData.selection.length; i++){
		let cords = window.gameData.selection[i];
		word = word.concat(window.gameData.gameBoard[cords.x][cords.y].letter);
	}
	console.log(word);
	
	window.gameData.selection = [];
	for(let x = 0; x < 4; x++){
		for(let y = 0; y < 4; y++){
			window.gameData.gameBoard[x][y].selected = false; 
		}
	}
	
	const foundIndex = binarySearch(window.gameData.words,word.toLowerCase(),strcmp);
	if(foundIndex > 0){
		alert("found valid Word");
	} else 
	{
		alert(word + "is not a word");
	}
	
	drawBoard();
	
}

//returns number of valid words. 
function countNumberOfValidWords(){
	
	// we are gonna worry about optimization later.
	// its probably gonna need it but whatever. 
	let count = 0;

	let currentWord = window.gameData.words[0];
	for(let i = 51; i < 60; i++){
		currentWord = window.gameData.words[i];
		if (canCompleteWord(currentWord)){
			count += 1;
		}
	}
	document.getElementById("number_of_words").innerHTML = count;
}

function findLetter(Letter){
		for(x = 0; x < WidthBlocks; x++){
			for(y = 0; y < HeightBlocks; y++){
				if(window.gameData.gameBoard[x][y].letter.toLowerCase() == Letter){
					return { x, y }
				} 
			}
		}
		return { x: -1, y: -1};
	} 
	

//ok this doesnt deal with duplicate letters well yet.
// this require backtracking when a path doesn't work  and checking for 
//duplicate letters.  
//your best bet would be to make this recursive. 
function canCompleteWord(currentWord){
	let cords = findLetter(currentWord.charAt(0));
	if(cords.x == -1) {
		return false;
	}
	let currentLetter = "";
	for(let x = 1; x < currentWord.length; x++){ // for letter in word:
			currentLetter = currentWord.charAt(x);
			adjacency: {
				for(let xAdj = -1; xAdj < 2; x++){
					for(let yAdj = -1; yAdj < 2; yAdj++){
						if(xAdj == 0 && yAdj == 0){
							continue;
						}
						
						if( cords.x + xAdj > 0 && cords.x + xAdj < WidthBlocks &&
							cords.y + yAdj > 0 && cords.y + yAdj < WidthBlocks &&
							window.gameData.gameBoard[cords.x + xAdj][cords.y + yAdj] == currentLetter){
								
								cords.x += xAdj;
								cords.y += yAdj;
								break adjacency; // we found an adjacent letter. 
						}
					}
				}
				return false;
			} 
		}
	return true;
}

window.addEventListener("load", function(){
	setup();
	window.document.getElementById("checkWord").addEventListener("click",checkWord);
	//window.document.getElementById("countWords").addEventListener("click",countNumberOfValidWords);
	window.document.getElementById("gameBoard").addEventListener("click",selectALetter);
	window.document.getElementById("updateGameData").addEventListener("click",setup);
});

// ok this part of the code isnt entirely mine 
// part of it comes from  https://stackoverflow.com/questions/22697936/binary-search-in-javascript
function binarySearch(ar, el, compare_fn) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
		
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

// this part also comes from a stackoverflow arrangement 
function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}