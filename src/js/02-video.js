import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iFrame = document.getElementById('vimeo-player');

const player = new Player(iFrame);

player.on('timeupdate', throttle(onPlayTimeUpdate, 1000));

function onPlayTimeUpdate(data) {
  try {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}

function getCurrentPlayTime() {
  let getStorage = localStorage.getItem(STORAGE_KEY);

  if (!getStorage) {
    return;
  }

  try {
    return JSON.parse(getStorage);
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}

player.setCurrentTime(getCurrentPlayTime()).catch(error => {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
