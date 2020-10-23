<?php 
/*multiplayer
create username 
list active users when create game

keep pool of people 
then matchmake if more than 2 people in pool
which means you create a game file. 

soft lock the game board on opponents side.

one person goes. 
then change board specifical

at end of game reset. */

	header("Content-Type: application/json");
	if (isset($_GET["UserName"])){
		$UserFile = fopen("userNames.txt", "a");
		fwrite($UserFile, $_GET["UserName"] .  "\n", 20); // make sure they dont try to write huge userNames
		//echo "writing user to table" . $_GET["UserName"];
		fclose($UserFile);
	}
	
	if(isset($_GET["listUsers"])){
		echo "[";	
		$UserFile = fopen("userNames.txt", "c+");  // refer to https://www.w3schools.com/php/func_filesystem_fopen.asp
		$previous = false;
		 while (($currentUser = fgets($UserFile, 4096)) !== false) {
			if ($previous == true){ echo ","; }
			 echo  "{ \"user\":\"" . rTrim($currentUser) . "\"}";
			 $previous = true;
		 }
		if(!feof($UserFile))  {
			echo "something broke while trying to read the users file";
		}	
		echo "]";
		fclose($UserFile);
	}
	if (isset($_GET("SessionId"]){
		$SessionFile = fopen("sessionId","c+");
		fclose($SessionFile);
		
	}
	
?>