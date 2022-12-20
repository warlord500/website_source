const mapping = {
    "one" : "1",
    "two" : "2",
    "three" : "3",
    "four" : "4",
    "five" : "5",
    "six" : "6",
    "seven" : "7",
    "eight" : "8",
    "nine" : "9",
    "zero" : "0",
    "add" : "+",
    "subtract" : "-",
    "multiply" : "*",
    "divide" : "/",
	"decimal" : ".",
}

$(document).ready(function(){
  $("#clear").click(function(){
    $("#display").text("0");
	$("#results").text("");
  });
  $("#backspace").click(backspace);
  $("#equals").click(checkExpression);
  for (const elem in mapping){
    $("#" + elem).click(e => appToDisplay(mapping[elem]));
  }
  
});
//append To Display
function appToDisplay(opOrNumber){
	let exp = $("#display");
	let op = isOP(opOrNumber);
	const len =exp.text().length; 		
	const lastChar =  exp.text().substring(len-1,len);
	if(len == 1 && op==false && lastChar=="0"){
		exp.text(opOrNumber);
		
	} else  if(op== true){
		//handle multiple operators here somehow?
		//start by figuring out if their are multiple operators?
		//extract the to check if their is an operator?
		if(isOP(lastChar)){
			//get rid of the last operator? i think this will work?
			exp.text(exp.text().substring(0,len-1)); 
		}
		exp.text(exp.text() +  opOrNumber);
	} else {
	
		exp.text(exp.text() +  opOrNumber);
	}
 
}



function checkExpression(){
	let result = $("#result");
	let display = $("#display");
	let exp = display.text();
	display.text(eval(display.text()));
/*	if(result.text() == ""){
		//compute expression using eval. 
		// honestly i feel like this is cheating however free code camp used it 
		// so i dont feel so bad for using it. 
		let exp = display.text();
		display.text(eval(display.text()));
			
	} else {
		$("#display").text(result.text());
		result.text("");
	} */
 
}


function getNumber(exp){
  let currChar = exp.indexOf(0);
  let endIndex = 0;
  while (endIndex < exp.length && isDigitCode(currChar)){
         endIndex += 1;
         currChar = exp.IndexOf(endIndex);      
   }
   return {
     "num" : parseInt(exp.substr(endIndex)),
      endIndex,
   }
  
}


const charCodeZero = "0".charCodeAt(0);
const charCodeNine = "9".charCodeAt(0);

function isDigitCode(n) {
   return (n >= charCodeZero && n <= charCodeNine);
}

function isOP(expChar){
	//taking advantage of case fall through
	switch(expChar){
		case '+':
		case '*':
		case '/':
		case '-':
			return true;
		default: 
			return false;
	}
	
}

function backspace(){
	$("#display").text($("#display").text().substring(0,$("#display").text().length-1));
}
