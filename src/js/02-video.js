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
  try {
    const getStorage = localStorage.getItem(STORAGE_KEY);
    return getStorage;
  } catch ({ message, name }) {
    console.log(name);
    console.log(message);
  }
}
player.setCurrentTime(getCurrentPlayTime());
// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
