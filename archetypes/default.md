+++
title = "{{  replace .Name "_" " " | title }}"
description = ""
date = "{{ .Date }}"
draft = true
notoc = true  {{/*  no table of contents */}}
tags = ["{{ path.Base |  Path.Split .Dir}}"]
topics = []

custom_js = []
custom_css = []
+++


<!--more-->