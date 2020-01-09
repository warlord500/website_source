+++
title = "Incremental_backup_update"
date = "2019-12-05T22:09:39-08:00"
tags = ["programming","project-update"]
topics = []
description = ""
+++

I have been working on a program for backing up my  data.
I need something that works like Rsync. however Instead of only using 
filename and modified date time to determine when to copy something over. 
I wanted to use something that worked based on the content of the files. 
thus, I came up with idea of comparing hashes instead.
I guess a good alternative name is hashSync.  the program hashes every file in source and destination folder. 
compares both and gets all files that aren't the same on both sides.
copies them over just like rsync at that point. 

with that basic description, I have got the application working, The source code can be found at 
[incremental_backup](https://jadonbelezos.com/cgi-bin/fossil.cgi/backup/). 
upon initial testing, it was vastly slower than pure copy solution due to running in debug mode. 
the next phase of programming on this is to improve speed so that it maybe competitive with rsync using 
a bunch of techniques. 

improve technical control of what can be copied or deleted. I might eventual add network support to improve my
backup system.

