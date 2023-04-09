import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

if (currentTime) {
    player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(evt) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(evt.seconds));
}