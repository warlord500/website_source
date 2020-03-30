+++
title = "Connect four"
date = "2020-02-04T15:56:44-08:00"
draft = false
tags = ["application","programming"]
topics = []
description = ""
+++
as a [daily coding problem](https://www.dailycodingproblem.com/) is to design connect four. 
this page is the result of that endeavour. 

I may or may not write instructions to play connect four later but I am sure if you have played the board game 
you can figure this one out without too much help.

<!--more-->
 
<div id="application">
	<p>current players turn: <span id="player"></span></p>
	<canvas id="gameBoard" width="700px" height="600px" style="border: 4px black solid"></canvas>
	<button id="updateGameData">refresh the game</button>
	<script src="js/connect_four.js"></script>
</div>