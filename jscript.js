window.onload = function() {
    const mainSongList = [
        {
            id: 'song-1',
            title: 'Money Trees',
            imageSrc: 'images/money_trees_kendrick.jpg',
            imageAlt: 'Kendrick Lamer',
            audioSrc: '',
            artist: 'Kendrick Lamar & Jay Rock',
        },
        {
            id: 'song-1',
            title: 'Money Trees',
            imageSrc: 'images/money_trees_kendrick.jpg',
            imageAlt: 'Kendrick Lamer',
            audioSrc: '',
            artist: 'Kendrick Lamar & Jay Rock',
        },
        {
            id: 'song-1',
            title: 'Money Trees',
            imageSrc: 'images/money_trees_kendrick.jpg',
            imageAlt: 'Kendrick Lamer',
            audioSrc: '',
            artist: 'Kendrick Lamar & Jay Rock',
        },
    ];
   
    const songElements = document.querySelectorAll('li');
    
    const onSongClick = ($event) => {
        const path = $event.path;
        let songId;
        
        for (let i = 0, j = path.length; i < j; i++) {
            if (path[i].tagName == 'LI') {
                songId = path[i].id;
            }
        }
    };

    for (let i = 0, j = songElements.length; i < j; i++) {
        songElements[i].addEventListener('click', onSongClick, false);
    }


};
