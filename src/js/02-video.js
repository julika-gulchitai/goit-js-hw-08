/* 
Зберігай час відтворення у локальне сховище. 
Нехай ключем для сховища буде рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() 
з метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.*/

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const stopTime = 'videoplayer-current-time' = 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p'
});
// console.dir( player);

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(stopTime, JSON.stringify(seconds));
    // console.log(localStorage);
};
// timeupdate - оновлення часу відтворення.
player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(stopTime))).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            //  time < 0 or time > video.length
            break;

        default:
            // some other error occurred
            break;
    }
});


