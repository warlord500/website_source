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
    $("#mainDisplay").text("");
	$("#results").text("");
  });
  $("#equals").click(checkExpression);
  for (const elem in mapping){
    $("#" + elem).click(e => appToDisplay(mapping[elem]));
  }
  
});
//append To Display
function appToDisplay(opOrNumber){
  let exp = $("#mainDisplay");
  let space = (isOP(opOrNumber) ? " " : "");
  exp.text(exp.text() + space +  opOrNumber + space);
 
}



function checkExpression(){
	let result = $("#result");
	if(result.text() == ""){
		//compute expression using eval. 
		// honestly i feel like this is cheating however free code camp used it 
		// so i dont feel so bad for using it. 
		let exp = $("#mainDisplay").text();
		if(validExpression(exp)){
				$("#result").text(eval($("#mainDisplay").text())); 
		} else {
			
		}
	} else {
		$("#mainDisplay").text(result.text());
		result.text("");
	}
 
}
function validExpression(exp){
	return true;
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
		case '\\':
		case '-':
			return true;
		default: 
			return false;
	}
	
}