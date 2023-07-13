import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector("iframe"));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

const throt = throttle(async function() {
    localStorage.setItem("videoplayer-current-time", Math.floor(await player.getCurrentTime()))

}, 1000);
player.on('timeupdate', throt);