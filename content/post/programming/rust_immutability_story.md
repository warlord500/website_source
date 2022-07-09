+++
title = "Rust Immutability Story"
description = ""
date = "2021-07-18T14:37:12-07:00"
draft = false 
tags = ["programming"]
image = ""
custom_js = []
custom_css = []
+++
rust has an intresting and  somewhat unique mutability/immutabitity story.

<!--more-->

most languages that you use have a form of immutabitity i like to call context independent immutabitity.
rust has a form of  context dependent immutabitity. 
basically when you create an object and assign to variable like so
{{< highlight rust >}}
	let x = 0;
{{< / highlight >}}
x cant change	

however rust gives you a bit more flexibility than  that! 
for example  you can pass in a  imut/shared ref to X variable or any Integer or even most objects. 
any they are garunteed to not change!
{{< highlight rust >}}
	let mut x = 0;
	/* do some changes to x */
	fn compute(x : &i32){
	/* the pointee will not change! */
	}
{{< / highlight >}}
 x is effictevily immutable in the context of compute in this example where other languages like java, python, javascript make immutabitity context independent.
 doesnt matter where you are in code an object is either immutable or mutable forever!!

this can give  a suprising amount immutabitity benefits without completely sacrificng mutability when its neccessary or easier to understand code. 



generally this immutabitity is inheireted throught an object making all subfields and thier subfields, etc also immutable which is almost always the right thing to do!
other languages that do this are c++,c,D,perl.

now this comes with a problem, what happens if you want to share something while having it mutable?
how do you garuntee  constiency and data race freedom?!?
in some languages you can  bypass const/immutabitity through words like mutable in c++.
in rust this is internal mutability.
honestly i am not so sure in D or Perl.
however even with that you have to make sure accessings are synchronized in some form!
with things like mutexs, rwlocks and a few other variants!

in immutability is cotext independent you can freely alias and locking is either handled for you or you have to make to sure to lock any object that is potential shared and mutable across threads!
which is basically a trade off in easy flexibility for a more difficult debug time!

so now that i have presented these two ideas why would you care about them.

its basically describing  different ways to go about immutability.

why choose do different languages  choose different methods about enforcing immutability?
simply the choice between complexity and flexibility or simplicity and ease of use and understandability!

personally i enjoy seeing languagues who use context dependent immutability and i beleive i have good grasp on how it works in the most common languages.
this can be great in a big codebase but a lot harder on a little project that you want to get up and running as fast as possible!!
thanks for reading









