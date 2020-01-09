+++
date = "2016-03-11T09:17:36-08:00"
description = ""
tags = []
title = "sfml_and_SpaceT"
topics = []
+++
lately I have been having problems building the  sfml library so that I can continue 
the development of the SpaceT program on my linux laptop.
for some reason the prebuilt sfml version doesnt work on my linux mint and arch systems so I 
decided to build the library myself.  
didnt seem so hard just download tarball extract and execute
<pre>
<code>
cmake &lt;extract_dir&gt; 
make 
make install
</code>
</pre>

turns out It wasnt that easy I had to find the
libraries on my linux mint system.   Anyone trying to compile sfml on debian systems
here is a small list of the library packages that i had a hard time finding. this is NOT a COMPLETE list. 
libx11 libudev libxcb-image0-render libjepg-dev libopenal-dev libflac++-dev libvorbis-dev libfreetype6-dev

after building the libraries, I found I could not execute my SpaceT program from the command line. 
the error I got was &quote;could not file the libraries: libsfml-graphics2.3&quote;
I tried plenty of solutions to get it to work turns out the easyiest one was call 
sudo ldconfig &lt;lib_dir&gt;

