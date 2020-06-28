+++
title = "Boggle"
date = "2020-02-18T14:01:42-08:00"
draft = false
tags = ["application","programming"]
topics = []
description = ""
+++
Creation of another game because of a daily coding problem.
This web page is mostly complete the only part that currently doesn't work is the count words due to 
a combination of performance and not quite perfect logic will update later and remove this warning.

<!--more--> 

<div id="application">
	<p>current players turn: <span id="player"></span></p>
	<p>number of words to be found: <span id="number_of_words"></span></p>
	<canvas id="gameBoard" width="700px" height="600px"></canvas>
	<button id="countWords">count number of words</button>
	<button id="updateGameData">refresh the game</button>
	<button id="showDictionary">show dictionary</button>
	<button id="checkWord">check word</button>
	<script src="js/boggle.js"></script>
</div>