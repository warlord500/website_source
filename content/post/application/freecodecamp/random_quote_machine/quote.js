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
 		date: "UNKNOWN",
	},
		
	{
 		quote: "temp quote",
 		author: "no author",
 		date: "UNKNOWN",
	 }

]
function generateQuote(){

	selectedQuote= Math.floor(Math.random()*QUOTESARRAY.length);
	$("#text").text(QUOTESARRAY[selectedQuote].quote)
	$("#author").text(QUOTESARRAY[selectedQuote].author)
	$("#quotedate").text(QUOTESARRAY[selectedQuote].date)
	$("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI(QUOTESARRAY[selectedQuote].quote));


}
