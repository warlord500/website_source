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
$uniqueIdentifierStr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


header("Content-Type: text/json");
	//$output  = {}
if (isset($_GET["UserName"])){
	$username = preg_replace("/[^a-z0-9_\-]/i", "", $_GET["UserName"]);
	$userID = substr(str_shuffle($uniqueIdentifierStr), 0, 10);
	// Lookup greatest discrim for username
	// generate userId and discrim
	// add username, discrim, and userId to database


	if (!file_exists("users.json")) file_put_contents("users.json", "{}");
	$users = json_decode(file_get_contents("users.json"));
	$users[$userID] = $username;
	file_put_contents(json_encode($users));
	//echo "writing user to table" . $_GET["UserName"];
	//data that persists between requests!
	setcookie("userID", $userID);
	setcookie("username",$username)
} else if(isset($_GET["listUsers"])){
	echo file_get_contents("users.json");
} else if(isset($_GET["invitedID"]){
	$filename = "updates/userID_" . $_COOKIE["invitedID"] . ".json";

	//create file for update if doesnt exist! //not necassarily put something in.
	// since inviting a person apppend to  the invitors part of the updates object!
	// if (!file_exists($filename)) file_put_contents($filename, "[]");
	$updates = json_decode(file_get_contents($filename) || "[]");
	array_push($updates, '{"type":"invite", "invitorName":"' . $_COOKIE["username"] . '","invitorID":"' . $_COOKIE["userID"] . '"}');
	file_put_contents($filename, json_encode($updates));

} else if(isset($_GET["inviteResponse"])){ //inivtee responds!!!
	if($_GET["inviteResponse"] == "accepted"){
		// create a game
		$gameID = substr(str_shuffle($uniqueIdentifierStr), 0, 10);
		$gameFile = fopen("games/gameID_" . $gameID . ".txt","c+");
		if($_COOKIE["gameType"]== "utt"){
			//utt default setup()
			// write players - whose x or o;
			// write whose turn
			// write turn count!
			// write board state
		}

	} else {
		$filename = "updates/userID_" . $_GET["opponentID"] . ".json";
		$updates = json_decode(file_get_contents($filename) || "[]");
		array_push($updates, '{"type":"inviteResponse", "status":"declined"}');
	}
} else if(isset($_GET["pollUpdates"])){
	$filename = "updates/userId_" . $_COOKIE["userID"] . ".json";
	if (file_exists($filename)){
		$contents = file_get_contents($filename);
		unlink($filename); // delete file
		echo $contents;
	} else {
		echo "[]";
	}
}
?>
