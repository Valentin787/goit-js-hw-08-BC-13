const  throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
});
player.getVideoTitle().then(function (title) {
});

const info = JSON.parse(localStorage.getItem("videoplayer-current-time")); 
console.log(info);
const res = info ? parseInt(info.seconds) : 0;

const onPlay = data => localStorage.setItem("videoplayer-current-time", JSON.stringify(data))

player.on("timeupdate", throttle(onPlay, 1000));
player.on('play', onPlay);
player.setCurrentTime(res )











