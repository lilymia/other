var urls = [
  'https://www.dropbox.com/s/e4p8r8u2cucf2rb/720P_1500K_120159301.mp4?dl=1',
  'https://www.dropbox.com/s/uxkowisd6ozqvma/Sissy%20Brainwashing%20%28POPPER%20HYPNO%29.mp4?dl=1',
  'https://www.dropbox.com/s/mxasmicn60lu7rx/Ultimate%20Sissy%20Slut%20Hypno.mp4?dl=1',
  'https://www.dropbox.com/s/bdvruefj338a2k3/Sissy%20Training%20-%20Suck%20that%20Cock%20and%20Swallow%20the%20Cum.mp4?dl=1',
  'https://www.dropbox.com/s/t6kclmz8mkcojm4/SISSY%20HYPNO%20TRAINING%20-%20Sasha%20De%20Sade%20%26%20Mistress%20Murmur%20-%20Por.mp4?dl=1',
  'https://www.dropbox.com/s/6bn7kho1xpkwnt1/Sasha%20de%20sade%20%26%20natalie%20mars%20-%20sissy%20to-do%20list%20-%20perfect%20po.mp4?dl=1'
]



function main() {
  var svi = 0;
  
  var old = document.getElementById("sissybg");
  if(old) document.body.removeChild(old);
  
  var div = document.createElement("div");
  div.id = "sissybg";

  var video = document.createElement("video");
  video.id = "sissyvideo";
  video.preload = 'metadata';
  video.poster = 'https://www.dropbox.com/s/uxrub8yyotggu18/CSavVszWUAAxQW-.jpg?dl=1'
  video.autoplay = true;
  video.loop = false;
  video.muted = true;
  video.volume = 0;

  div.appendChild(video);
  document.body.appendChild(div);
  
  svi = Math.round(Math.random() * (urls.length-1));
  video.src = urls[svi];

  
  video.addEventListener('loadedmetadata', function () {
    var start = video.duration * (Math.random() * 0.75);
    video.currentTime = start;
    video.play();
  });
  
  video.addEventListener('ended', function () {
    
    svi = (svi + 1) % (urls.length -1);
    video.src = urls[svi];
    
  });

}


window.addEventListener('load', function(event) {
  main();
});
