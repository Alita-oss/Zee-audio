window.onload = function() {
    const songElements = document.querySelectorAll('li');
    
    const onSongClick = ($event) => {
        console.log($event);
    };

    for (let i = 0, j = songElements.length; i < j; i++) {
        songElements[i].addEventListener('click', onSongClick, false);
    }
};
