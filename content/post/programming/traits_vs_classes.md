+++
title = " rust Traits vs  c)+ Classes"
description = ""
date = "2020-06-27T14:52:20-07:00"
draft = false
notoc = true  
tags = ["programming"]
topics = []

custom_js = []
custom_css = []
+++
In this article, I will talk about the three different forms of OOP( object-oriented programming).
The three different forms of practical styles of oop are based on rust,  JavaScript, and c++. 

<!--more-->

In rust oop is a combination of two distinct concepts.  Traits and structs.
Structures are a combination of other data types. They do not contain functions. 
Structs do not support inheritance. They are a composition only data system. 
In a standard example like an animal and cat struct, the cat struct is composed of an animal structure and additional member parts like cat claw sharpness, tail length, meow loudness. 

 While traits are similar to interfaces in Java or pure virtual classes in 
c++. They, however, do support inheritance. The ability to support inheritance is essential because if the sub trait needs to call, the parent's traits function to work.
Allowing for inheritance would make that easier. I tend to think of less as an inheritance but more of the requirements to implement a trait. 
Traits themselves are simply a collection of function prototypes. Traits can include/inherit other characteristics. 
Due to them only being function prototypes, they do not have [the diamond problem] in c++.
Because in general,  there is no need to overwrite other functions for a single struct.
Traits support extending existing structs with more methods, making it easier to extend than c++ OOP but harder than javascript OOP. 

One of the fundamental disadvantages of this is that it requires a massive mindset shift in thinking from an inheritance-based mindset to a more interface mindset.
The mindest requires designing structures/classes to match an interface rather than inheriting attributes from an existing class. 

Trait and struct style is distinctly different from c++ in that classes are a complete combination of data and functions. 
Classes. The advantages can come from slightly fewer classes or traits when dealing with increasingly more complex structures. 
Overloading can be advantageous or disadvantageous, depending on one's perspective. 
Advantages in that the developer can swap different classes quickly sometimes, but more confusing following the path of function calls on larger programming projects.
Classes in c++ can perform the function of a general "class" or, more specifically, an interface.

Javascript is way wilder than the other two when it comes to OOP.
Javascript is a dynamically typed language, which means that types are entirely determined at runtime. 
The power of having a prototype system means how objects' functions can change both dynamically and retroactively. 

the cool thing about not treating OOP as just one of these systems is that you can make a system later with many of the same advantages

[the diamond problem]: https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem
