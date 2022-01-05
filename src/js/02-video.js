const  throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.on('play', function() {
  console.log('played the video!');
  // console.log(`DTA`, data);
});

player.getVideoTitle().then(function (title) {

    console.log('title:', title);
});

const info = JSON.parse(localStorage.getItem("videoplayer-current-time")); 
const res = parseInt(info.seconds);

const onPlay = function(data)  {
  console.log(`ON Play`, parseInt(data.seconds));
  if (data.seconds < 0) {
    return false
  }
  return localStorage.setItem("videoplayer-current-time", JSON.stringify(data))

 }
player.on("timeupdate", throttle(onPlay, 1000));
player.on('play', onPlay);
player.setCurrentTime(res)











