+++
title = "Calculator"
description = ""
date = "2020-11-05T21:06:39-08:00"
draft = true
notoc = true  
tags = ["calculator"]
image = ""
custom_js = []
custom_css = []
+++
below is my calculator app for [freecodecamp];

<!--more-->


<!-- remind myself to move this or change it somehow later on -->
<style>
	#calcButtons {
		width: 50em;
	}
	#calcButtons .btn{
		width: 10%;
		padding: 1%;
		margin: 1%;
	}
	#zero {
		width: 48% !important;
	}
	
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="js/calc.js"></script>
<div id="calc">
<div id="display">
  <span id="mainDisplay"></span> = <span id="result"></span>
  </div>
  <div id="calcButtons">
	  <div class="row">
			<button class="btn btn-default cold-md-1" id="add">+</button>
			<button class="btn btn-default cold-md-1" id="subtract">-</button>
			<button class="btn btn-default cold-md-1" id="multiply">*</button>
			<button class="btn btn-default cold-md-1" id="divide">/</button>
		</div>
		<div class="row">
			<button class="btn btn-default cold-md-1" id="one">1</button>
			<button class="btn btn-default cold-md-1" id="two">2</button>
			<button class="btn btn-default cold-md-1" id="three">3</button>
			<button  class="btn btn-default cold-md-1" id="decimal">.</button>
		</div>
		<div class="row">
			<button  class="btn btn-default cold-md-1" id="four">4</button>
			<button class="btn btn-default cold-md-1" id="five">5</button>
			<button class="btn btn-default cold-md-1" id="six">6</button>
			<button  class="btn btn-default cold-md-1" id="clear">AC</button>
		</div>
		<div class="row">
			<button class="btn btn-default cold-md-1" id="seven">7</button>
			<button class="btn btn-default cold-md-1" id="eight">8</button>
			<button class="btn btn-default cold-md-1" id="nine">9</button>
			<button  class="btn btn-default cold-md-1" id="backspace">&lt;-</button>
		</div>
		<div class="row">
			<button class="btn btn-default col-md-3" id="zero">0</button>
		</div>
    <button  class="btn btn-default cold-md-1" id="equals">=</button>
	
  </div>
  
  
  
</div>

[freecodecamp]: https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator