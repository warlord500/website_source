+++
date = "2016-03-25T23:25:39-07:00"
description = ""
tags = []
title = "kaploosion"
topics = []

+++
if you are bored please come to this web page
<!--more-->
oh by the way since this page maybe a work in progress for about a month
only expect the first the button to work reliably in all modern browsers</br>

<img href="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjkj76i293LAhUT8mMKHZVPBBsQjRwIBw&url=http%3A%2F%2Fphotobucket.com%2Fimages%2Fexplosion%2520gif&bvm=bv.117868183,d.cGc&psig=AFQjCNHj8VLoS5Y_lLk_wQd6baqdPD6Bbg&ust=1459059726273388"></img>


<audio src="audio/explosion.wav" id="a-explode"></audio>

<button onclick="alert('ka boom')">this will cause an explosion</button>
<button onclick="alert('ka boom')">this will cause an image to explode</button>
<button onclick="audioExplosion()">this will cause you to hear an explosion</button></br>
<button onclick="alert('ka boom')">all of the above </button>
<script src="/include/myLib.js"></script>
<script type="text/javascript">
function audioExplosion(){
  var audio = document.getElementById("a-explode");
  audio.play();
}
</script>
