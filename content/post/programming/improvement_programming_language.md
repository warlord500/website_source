---
title: "Improvement to every programming language"
description: ""
date: 2018-02-21T17:17:06-08:00
tags:  ["programming"]
topics: []
---
Any programmers that know me, knows that i talk a lot about rust. However today I want to talk about a very specific feature of rust.
 a feature i find super important but high overlooked or barely mentioned by every single tutorial about rust out there. 

<!-- summary -->   

immutable variables by default the feature, I think separates an OK programming
 languages  from great programming languages.  huh? whats so great about immutability by default? are 
the questions you might ask. I have to yet to find a programming language that could not benefit from this. 


First the most important part is it helps with correctness. Its harder to get a program wrong because instead of changing something 
that was never supposed to change. you get a runtime/compile time error.  meaning clearly what ever you were doing was wrong or doesnt make any sense.
also the writer of the program doesn't have to take any effort with constant correctness while languages with immutable variables by default means lots of markers 
about constant markings are slapped everywhere.
a example case I will talk about is the number pi. If you were to change PI many of the trigonometric functions will produce different results. many assumptions about 
pi and other fractions will be invalid. producing huge number errors later in the code. it generally leads to domino effects making it hard to track down 
which part of the code is wrong. 

the way rust handles mutability is unique. however, I only carry about immutability by default not all of the borrow check. 
rust uses  the keyword 'mut' to signify this variable will change later in the future.  its add about 4 letters to variable declarations. it also doesnt 
have such the subtle problem of Scala var and val declarations. 
some code examples 
<br/><br/>


<pre><code class="rust"> 
	let test = 0i32;
	let mut test = 0i32; 

	//enough of a  difference that when skimming makes it 
	// easy to tell when something is mutable. 
	let x = &0i32; 
	let mut x  = &0i; 
	let x  = &mut 0i; 
	let mut x  = &mut test; 
</code></pre>

quick comparison to c++ 
<pre><code class="cplusplus"> 
	const int test = 0;
	int test = 0;
	//while these declarations might be hard to read.
	// the thing is rust makes immutable variable declarations short while c++ does the opposite.  
	//leading harder to read and longer declarations for the more common case.


	const int const* x = &0;
	int const* x = &0;
	const int* x = &test;
	int* x = &test; 
</code></pre>
More often than not you want immutable variables. If correctness doesn't convince you, in certain cases having a variable be immutable can make it possible to optimize 
certain algorithms giving you performance boost which is harder to achieve with everything being mutable. immutable structures can do less copying 
if the resulting data structure is the same as one created earlier. while mutable must copy all of the data.

the big take away should be more often than not you want immutable structures over mutable structures because immutable structures help with correctness and in
certain cases can provide better performance than mutable. what programmer doesn't want high performance and correct programs the first time around. instead 
of having to go back and adding lots of annotations to achieve the same thing.    

if you are making a new language consider making immutability first class and by default to achieve these gains.
an already established can gain some of the benefits by making it easy to declare immutable variables instead of mutable variables with annotations. 

<link rel="stylesheet" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"></link>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/rust.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

