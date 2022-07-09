+++
title = "Multithreaded Code"
description = ""
date = "2021-08-24T15:45:00-07:00"
draft = true
notoc = true  
tags = ["post"]
image = ""
custom_js = []
custom_css = []
+++
currently I have been intrested in multithreaded programming and the different ways to do shared mutable state!

<!--more-->
what has fascinated me the most about this is all the diffent locking/sharing mechanisms that exist.
there are extremely simple designs like the simple mutex/spinlock!
or alternatively things like 
the read-write lock which allows mutiple readers and only one writer!
the seq or sequence lock which avoids atomic writes in the read case and zero writer starvation!
the concept of left-right which avoids one of the pitfalls of read-write locks requiring all readers have to write to the  same  atomic variable!

lock free lists and ways to handle the aba problem or really the deletion problem!
or owner-borrowing type analysis which enforces a static read-write lock m!
