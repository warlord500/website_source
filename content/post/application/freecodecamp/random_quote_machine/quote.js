$(document).ready(function(){
	$("#new-quote").click(generateQuote);
	generateQuote();
});
//template quote object
// {
// 	quote: "temp quote",
// 	author: "no author"
// 	date: "UNKNOWN"
// }
const QUOTESARRAY = [ 
	{ 
		quote: "no more quotes for now",
		author: "jadon belezos",
	},
		
	{
 		quote: "temp quote",
 		author: "no author",
 		date: "UNKNOWN",
	 }

]
function generateQuote(){

		selectedQuote= Math.floor(Math.random()*QUOTESARRAY.length);
	$("#quote").text(QUOTESARRAY[selectedQuote].quote)
	$("#author").text(QUOTESARRAY[selectedQuote].author)


}
