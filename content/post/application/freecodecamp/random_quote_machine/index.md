+++
title = "Random Quote Machine"
description = ""
date = "2022-12-13T11:14:56-08:00"
draft = true
notoc = true  
tags = ["random_quote_machine"]
image = ""
custom_js = ["quote.js","https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"]
custom_css = ["style.css"]
+++

this is a project that i am working on for free code camp front end library certification

<!--more-->
<div id="quote-box" class="niceCenter"> 
	<div id="doubleCenter">
		<p>
			quote:	<span id="text"></span><br />
			author: <span id="author"></span><br />
			date: <span id="quotedate"></span><br />
		</p>
		<a  id="tweet-quote" href="https://twitter.com/intent/tweet">tweet the quote</a><br />
		<button id="new-quote">generate a new quote</button><br/>
		<button id="swapAbsRes">swap between absolute & relative</button> <br/>
	</div>
</div>

<!--get me some jquery-->
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

