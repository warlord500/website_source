window.addEventListener("load",function(){
	
	
		document.getElementById("clear").addEventListener("click",function(){
			let elems = document.getElementsByClassName("appInput")
			for(let i =0,j= elems.length; i<j; i++){
				elems[i].value = "";
			}
		});
		///generate the key data.
		document.getElementById("gen").addEventListener("click",function() {
			let data =  new Uint8Array(512);
			window.crypto.getRandomValues(data);
			
			UInt8ArrayToDisplay(data,document.getElementById("key"));
			
		});
		// encryption should include a hash to check for interfernce. 
		
		document.getElementById("encrypt").addEventListener("click", function(){
			const msgString = document.getElementById("msg").value;
			const msgLength = msgString.length;
			
			let msgData = new Uint8Array(msgLength);
			let ResultData = new Uint8Array(msgLength);
			
			const keyString = document.getElementById("key").value;
			if (keyString == "") {
				alert("you have to put in key data to encrypt." + 
				"recommend using generate key to do that!!") 
				return;
			}
			let keyData= hexStringToUInt8(keyString);
			
			for(let i=0; i<msgLength;++i){
			  msgData[i]= msgString.charCodeAt(i);
			}

			for(let i=0; i < msgLength; ++i){
				ResultData[i] = msgData[i] ^ keyData[i];
			}
			
			UInt8ArrayToDisplay(ResultData,document.getElementById("results"));
		});
		
		//decryption last part converts the buffer to a string.
		document.getElementById("decrypt").addEventListener("click", function(){
			let msgData = hexStringToUInt8(document.getElementById("msg").value);
			let keyData = hexStringToUInt8(document.getElementById("key").value);
			let ResultData = new Uint8Array(msgData.length / 3);
			
			for(let i=0,j=msgData.length; i < j; ++i){
				ResultData[i] = msgData[i] ^ keyData[i];
			}
			
			
			document.getElementById("results").value = new TextDecoder("utf-8").decode(ResultData);
		});
});

function UInt8ArrayToDisplay(data,textArea){
	textArea.value = "";
	let formatRun = 0;
	data.forEach(function(value,index,array)
	{
		textArea.value += value.toString(16) + " ";
		formatRun += 1
		if (formatRun == 45){
			results.value += "\n"
			formatRun = 0;
		}
	}); 
}

function hexStringToUInt8(str) {
	uint = new Uint8Array(str.length);
	const splitData = str.split(RegExp("\\s"));
	for(let i=0,j=str.length; i< j; ++i){
	  uint[i]=parseInt(splitData[i],16);
	} 
	return uint;
}
