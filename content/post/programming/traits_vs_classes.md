+++
title = " rust Traits vs  c)+ Classes"
description = ""
date = "2020-06-27T14:52:20-07:00"
draft = true
notoc = true  
tags = ["programming"]
topics = []

custom_js = []
custom_css = []
+++
In this article I gonna talk about the three different forms of OOP( object oriented programming).
The three different forms are based on rust,  JavaScript and c++. 

<!--more-->

In rust oop is a combination of two distinct concepts.  Traits  and structs.
structures by themselves a combination of other data types. they dont contain functions. 
and mostly dont worry about behavior. structs don't support inheritance. they are pure composition idea. 
i mean if you need to inherit attributes of another struct than maybe just include it in the your newly written structure. 

 while traits are similar to interfaces in java or pure virtual classes in 
c++.  they however do support inheritance. which is important because if your sub trait needs to call the parent's traits functions to work.
allowing for inheritance would make that easier. actually i tend to think of less as inheritance but more of requirements to implement a trait. 



 
this is distinctly different from c++ in that classes are a true combination of data and function. 
classe
