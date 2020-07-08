+++
title = "{{   replace (replace .Name "_" " ") "-" " " | title }}"
description = ""
date = "{{ .Date }}"
draft = true
notoc = true  {{/*  no table of contents */}}
tags = ["{{ path.Base .Dir }}"]


# edit this!!!!
image = ""
custom_js = []
custom_css = []
+++


<!--more-->

<div id="application">
	<canvas id="gameBoard" width="700px" height="600px"></canvas>
	<script src="js/main.js"></script>
</div>