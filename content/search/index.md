+++
title = "Search"
description = ""
date = "2020-06-19T11:34:30-07:00"
notoc = true  
tags = ["search"]
topics = []

custom_js = []
custom_css = []
+++

{{< time.inline >}}

<p id="loading">Loading search data...</p>
<label for="searchBox">Enter your search below to find content on this blog:</label>
<input disabled placeholder="Enter search text" type="text" name="searchBox" id="searchBox" class="w-100"/>
<div id="results"></div>
<script src="{{"/search/js/search.js" | urlize | relURL }}"></script>

{{</ time.inline >}}