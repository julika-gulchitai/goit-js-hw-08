const e=document.querySelector("iframe"),n=new Vimeo.Player(e);n.on("play",(function(){console.log("played the video!")})),n.getVideoTitle().then((function(e){console.log("title:",e)})),timeupdate;n.on("play",(function(e){})),n.setCurrentTime(30.456).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.36bbdb83.js.map
