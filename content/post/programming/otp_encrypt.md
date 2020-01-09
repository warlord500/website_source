+++
date = "2016-02-26T19:33:01-08:00"
title = "otp encrypt"
tags = ["programming"]
+++
I have been thourghly intrested in cryptography lately so I decide to make a program that would 
encrypt my messages using the most powerful encryption system known to man, the one time pad
which you can test out if you keep reading on

<!--more--> 

the progam I built so far is a very simple console program. It is pretty simple to use
the first part is generate a key using a command called keygen
then when you want to encrypt a message you would run the crypt command which would 
encrypt/decrypt the message depending on the order of arguments

the current system can handle anytype of data it only helps with the encrypt and decrypt but not the management of 
keys in anyway other than maybe generation of the data

I have a project website here at
<a href="/cgi-bin/fossil.cgi/otp_crypt/">otp.fossil</a>

soon I will have packages for the arch and debian distros
<br />as well as a mini gui for the project
