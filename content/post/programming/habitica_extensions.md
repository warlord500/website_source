+++
title = "Habitica Extensions"
description = ""
date = "2023-01-01T14:27:21-07:00"
draft = false
notoc = true  
tags = ["programming"]
image = ""
custom_js = []
custom_css = []
+++

i am excited to show off habitica custom attributes. habitica is simple game system for managing 
things you have to do and habits you have to track that also comes in a game form. 

<!--more-->

habitica currently only supports single leveling system. i added a script that allows you track xp you gain for completing certain types of tasks. 

this script builds a set of habits that remain perpetually.
this runs a little weird setup wise. 

there are multiple parts to setup. 
step one is to fill out the habitica user id, and habitica api tokens. 
the next is to fill out the tags to check. 

this custom attribute scripts connects items with the apporiate tag with the approiate attribute. 
once this is done, you run a function that builds the habits for you in your habitica account. 
if the script ever, messes up, simply write down the level xp values, to attribute. 
    delete the habits. 
and rerun the setup function. 



you can find more info at the [readme.md](https://github.com/warlord500/habitica_custom_attributes).
