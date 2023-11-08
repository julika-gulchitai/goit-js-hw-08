
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    timeupdate
    {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
}

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


// timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. 
//Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() 
//з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

