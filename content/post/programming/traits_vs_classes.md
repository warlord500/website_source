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
In this article, I gonna talk about the three different forms of OOP( object-oriented programming).
The three different forms are based on rust,  JavaScript, and c++. 

<!--more-->

In rust oop is a combination of two distinct concepts.  Traits and structs.
Structures are a combination of other data types. They don't contain functions. 
Structs don't support inheritance. They are pure composition system. 
i mean, if you need to inherit attributes of another struct, then maybe just include it in your newly written structure. 

 While traits are similar to interfaces in Java or pure virtual classes in 
c++. They, however, do support inheritance. This is important because if your sub trait needs to call, the parent's traits function to work.
Allowing for inheritance would make that easier. I tend to think of less as an inheritance but more of the requirements to implement a trait. 
Traits themselves are simply a collection of function prototypes. Traits can include/inherit other characteristics. 
Due to them only being function prototypes, they don't have [the diamond problem] in c++.
Because in general, you don't overwrite other functions for a single struct.
Traits do also support adding more methods to existing classes. Making it easier to extend than c++ OOP but harder than javascript OOP. 

One of the fundamental disadvantages of this is that it requires a huge mindset shift in thinking from an inheritance-based mindset to a more interface mindset.
You design things to match an interface rather than inheriting attributes from an already existing class. 

This is distinctly different from c++ in that classes are a true combination of data and function. 
Classes. The advantages can come from slightly fewer classes or traits when dealing with increasing more complex structures. 
Overloading can be advantageous or disadvantageous depending on how look at it. 
Advantages in that you can swap different classes really quickly sometimes but more confusing following the path of function calls on longer code.
Classes in c++ can both perform the function of a general "class" or, more specifically, an interface.

Javascript is way wilder than the other two when it comes to OOP.
Javascript being a dynamically typed language, means that types are mostly determined at runtime. 
The dynamic type system leads to a third crazy idea in which you can have objects that extend other objects types without a static type system forcing you into one pattern.

from this 



[the diamond problem]: https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem
