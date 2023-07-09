import Player from '@vimeo/player';
import throttle
 from 'lodash.throttle';

const player = new Player(document.querySelector("iframe"));
if(!isNaN(localStorage.getItem("videoplayer-current-time")))
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

const throt = throttle(async function() {
    localStorage.setItem("videoplayer-current-time", Math.floor(await player.getCurrentTime()))

}, 1000);
player.on('timeupdate', throt);