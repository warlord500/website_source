+++
title = "Ipfs"
description = ""
date = "2021-04-05T12:11:13-07:00"
draft = false
notoc = true  
tags = ["programming"]
image = ""
custom_js = []
custom_css = []
+++
the modern web uses a client-server archetecture  for  most web browsing. this  archetecture can make it easy for ddos,censor,accidently delete web sites.
however, the design of [ipfs] helps  to remove many of those issues with most websites by  using a more decentralized and distrubuted archetecture.

<!--more -->

this archetecture makes everyone both a client and server of the web.
the basic idea is to grab info based on content ids rather than location ids. you want the content not the location!
which then you look up peers that have that info using that content id. 
anyone carrying that data will send it to you reducing bandwith and resource demand on massive datacenters.\
you get the data faster because more than one computer can send the data to you.




I have decided to include the ablitiy to use ipfs for this website.
to use ipfs, download [ipfs companion extension] and [ipfs desktop].

the companion app converts ipfs links to run through a local node. 
this node  help converts ipfs  links to http the  now standard web protocol until full browser support is implemented.

ipfs desktop creates and runs the node giving accessing to settings over ipfs. 

to see my website click this link which will take you to the active version
<<<<<<< HEAD
[ipfs.jadonbelezos.com] 
=======
[ipfs.jadonbelezos.com](ipns://ipfs.jadonbelezos.com)

this will likelly send to another url similar to this <http://ipfs.jadonbelezos.com.ipns.localhost:8080>.
if it does you know its working yeah!!

[ipfs companion extension]:https://github.com/ipfs/ipfs-companion 
[ipfs desktop]: https://github.com/ipfs/ipfs-desktop/releases
>>>>>>> 5485d0285ae09bff3b65d3846a566d7731bf152a
