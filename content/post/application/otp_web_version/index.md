+++
title = "otp_web_version"
date = "2019-11-20T12:13:52-08:00"
tags = ["application","programming"]
topics = []
description = ""
+++

I have decided to keep working on one of my old projects the [one time pad encryption 
system](/cgi-bin/fossil.cgi/otp_crypt/).   however due to currently being unable to install 
pygtk to fix gui code for the project, I decided to transfer it over to this very web-page.

<!-- more --> 

below the application can generate random "keys" for encrypting and decrypting data. 
keys are represented in hexadecimal.
 
<script defer src="js/otp_crypt_web.js"></script>
<div id="application">
	<label>text source</label><br />
	<textarea id="msg" class="appInput"	cols="150" rows="15"></textarea>
	<br />
	<br />
	<label>key source</label><br />
	<textarea id="key" class="appInput" cols="150" rows="15"></textarea>
	<br />
	<br />
	<label>result</label><br>
	<textarea id="results" class="appInput" cols="150" rows="15" readonly></textarea><br>
	<br />
	<br />
	<button id="gen">generate key</button>
	<button id="encrypt">encrypt msg</button>
	<button id="decrypt">decrypt msg</button>
	<button id="clear">clear</button>
</div>