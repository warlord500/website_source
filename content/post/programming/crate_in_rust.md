+++
title = "minor library in rust"
date = "2019-11-18T21:21:34-08:00"
tags = ["programming"]
topics = []
description = ""
+++

I added a simple crate to [crates.io](https://crates.io) today.  It adds methods from traits that make composing functions
together.  if you want to check it out, it is at [free_function_pipes](https://crates.io/crates/free_function_pipes)

the main code repository can be [found here](https://jadonbelezos.com/cgi-bin/fossil.cgi/pipe_traits_rust/doc/master/README.md)
This tiny trait library can be useful to chain free functions together with ordinary methods by utilizing the method syntax without adding too much noise. 
There are many libraries that are built for the same purpose; however, this doesn't require extra processing for say macro or changes the rust syntax dramatically. 