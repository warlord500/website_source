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
		$UserFile = fopen("userNames.txt", "a+");
		fwrite($UserFile, $_GET["UserName"] .  "\n", 20); // make sure they dont try to write huge userNames
		//fwrite($UserFile, "testUser:");		
		fclose($UserFile);
	}
	
	if(isset($_GET["listUsers"])){
		echo "[";	
		$UserFile = fopen("userNames.txt", "rw");
		 while (($currentUser = fgets($UserFile, 4096)) !== false) {
			 echo  "{ \"user\":\"" . $currentUser . "\"},";
		 }
		if(!feof($UserFile))  {
			echo "something broke while trying to read the users file";
		}	
		echo "]";
	} 
	
	
?>