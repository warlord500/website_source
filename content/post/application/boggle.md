+++
title = "Boggle"
date = "2020-02-12T14:01:42-08:00"
draft = true
tags = []
topics = []
description = ""
+++
creation of another game, 

<div id="application">
	<p>current players turn: <span id="player"></span></p>
	<p>number of words to be found: <span id="number_of_words"></span></p>
	<canvas id="gameBoard" width="700px" height="600px" style="border: 4px black solid"></canvas>
	<button id="countWords">count number of words</button>
	<button id="updateGameData">refresh the game</button>
	<button id="showDictionary">show dictionary</button>
	<button id="checkWord">check word</button>
	<script src="/js/boggle.js"></script>
</div>