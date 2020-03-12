+++
title = "Ultimate Tic Tac Toe"
date = "2019-11-22T11:12:51-08:00"
draft = false
tags = ["application","programming"]
topics = []
description = ""
+++
here is a recreation of ultimate tic-tac-toe for you to enjoy. 

### Instructions: ###
1. decide who x and o are.
2. x pick a spot on the board. The first move doesn't matter much.
3. Where x picks in a big square decides where o can go in the game board.
4. for example, if x picks the top right square in a small board. O can only go in the small board that resides in the top right.</li>
5. win three small boards that line up in a row, either horizontal, vertical, or diagonal to win the game.
6. if you can place in any big square says (-1,-1),  there are no restrictions on where you can place a marker.  

if my instructions make no sense, the program should guide you to what you can't and can do. 

<!--more--> 

<div id="application">
    <p>current players turn: <span id="player"></span></p>
    <p>you can place in big square: <span id="place"></span></p>
    <canvas id="gameBoard" width="500" height="500"></canvas>
    <button id="updateGameData">refresh the game</button>
    <script src="/js/ultimate-tic-tac-toe.js"></script>
</div>
