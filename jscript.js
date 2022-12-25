window.onload = function() {
    const mainSongList = [
        {
            id: 'song-2',
            title: 'Sweater Weather',
            imageSrc: 'images/sweater_weather_the_neighbourhood.jpg',
            imageAlt: 'The Neighbourhood',
            audioSrc: 'audio/sweater-weather.mp3',
            artist: 'The Neighbourhood',
        },
        {
            id: 'song-1',
            title: 'Money Trees',
            imageSrc: 'images/money_trees_kendrick.jpg',
            imageAlt: 'Kendrick Lamer',
            audioSrc: 'audio/money-trees.mp3',
            artist: 'Kendrick Lamar & Jay Rock',
        },
        {
            id: 'song-3',
            title: 'Cooler Than Me',
            imageSrc: 'images/cooler_than_me_mike_posner.jpg',
            imageAlt: 'Mike Posner',
            audioSrc: 'audio/cooler-them-me.mp3',
            artist: 'Mike Posner',
        },
        {
            id: 'song-4',
            title: 'Snow On The Beach',
            imageSrc: 'images/snow_on_the_beach_taylor.jpg',
            imageAlt: 'Taylor Swift',
            audioSrc: 'audio/snow-on-the-beach.mp3',
            artist: 'Taylor Swift & Lana Del Rey',
        },
        {
            id: 'song-5',
            title: 'Electric Feel',
            imageSrc: 'images/electric_feel_mgmt.jpg',
            imageAlt: 'MGMT picture',
            audioSrc: 'audio/electric-feel.mp3',
            artist: 'MGMT',
        },
        {
            id: 'song-6',
            title: 'Sex, Drugs, Etc.',
            imageSrc: 'images/sex-drugs-etc-beachweather.jpg',
            imageAlt: 'Beach Weather',
            audioSrc: 'audio/sex-drugs-etc.mp3',
            artist: 'Beach Weather',
        },
        {
            id: 'song-7',
            title: '505',
            imageSrc: 'images/arctic_monkeys_505.jpg',
            imageAlt: 'Arctic Monkeys',
            audioSrc: 'audio/arctic-monkeys-505.mp3',
            artist: 'Arctic Monkeys',
        },
        {
            id: 'song-8',
            title: 'Summertime Sadness',
            imageSrc: 'images/summertime_sadness_lana_del_rey.jpg',
            imageAlt: 'Lana Del Rey',
            audioSrc: 'audio/summertime-sadness.mp3',
            artist: 'Lana Del Rey',
        },
        {
            id: 'song-9',
            title: 'National Athem',
            imageSrc: 'images/national_athem_lana_del_rey.jpg',
            imageAlt: 'Lana Del Rey',
            audioSrc: 'audio/lana-del-rey-national-anthem.mp3',
            artist: 'Lana Del Rey',
        },
        {
            id: 'song-10',
            title: 'Romantic Homicide',
            imageSrc: 'images/romantic_homicide_d4vd.jpg',
            imageAlt: 'd4vd',
            audioSrc: 'audio/romantic-homicide.mp3',
            artist: 'd4vd',
        },
        {
            id: 'song-11',
            title: 'Hope',
            imageSrc: 'images/hope_xxxtentacion.jpg',
            imageAlt: 'XXXTENTACION',
            audioSrc: 'audio/xxxtentacion-hope.mp3',
            artist: 'XXXTENTACION',
        },
        {
            id: 'song-12',
            title: 'Smells Like Teen Spirit',
            imageSrc: 'images/smells_like_teen_spirit_nirvana.jpg',
            imageAlt: 'Nirvana',
            audioSrc: 'audio/smells-like-teen-spirit.mp3',
            artist: 'Nirvana',
        },
        {
            id: 'song-13',
            title: 'White Walls',
            imageSrc: 'images/white_walls_macklemore.jpg',
            imageAlt: 'Macklemore & Ryan Lewis',
            audioSrc: 'audio/white-walls.mp3',
            artist: 'Macklemore & Ryan Lewis',
        },
        {
            id: 'song-14',
            title: 'Blue (Da Ba Dee)',
            imageSrc: 'images/blue_da_ba_dee.jpg',
            imageAlt: 'Eiffel 65 & Gabry Ponte',
            audioSrc: 'audio/blue-da-ba-dee.mp3',
            artist: 'Eiffel 65 & Gabry Ponte',
        },
        {
            id: 'song-15',
            title: 'Stressed Out',
            imageSrc: 'images/stressed_out_twenty_one_pilots.jpg',
            imageAlt: 'Twenty One Pilots',
            audioSrc: 'audio/stressed-out.mp3',
            artist: 'Twenty One Pilots',
        },
    ];

    let currentSongIndex = -1;
    let loopSong = false;
    let shuffleSongs = false;
    let repeatPlaylist = false;
    const mainImage = document.getElementById('mainImage');
    const controlsImage = document.getElementById('controlsImage');
    const controlsSong = document.getElementById('controlsSong');
    const controlsArtists = document.getElementById('controlsArtists');
    const mainAudio = document.getElementById('mainAudio');
    const skipStart = document.getElementById('skipStart');
    const playCircle = document.getElementById('playCircle');
    const skipEnd = document.getElementById('skipEnd');
    const currentPlayTime = document.getElementById('currentPlayTime');
    const currentEnd = document.getElementById('currentEnd');
    const listElement = document.getElementById('listElement');
    const shuffle = document.getElementById('shuffle');
    const loop = document.getElementById('loop');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const repeat = document.getElementById('repeat');

    const liFactory = () => {
        for (let i = 0, j = mainSongList.length; i < j; i++) {
            const songObject = mainSongList[i];

            const li = document.createElement('li');
            li.classList.add('songItem');
            li.setAttribute('id', songObject.id);
            li.addEventListener('click', onSongClick, false);

            const span = document.createElement('span');
            span.append(i + 1);

            const img = document.createElement('img');
            img.src = songObject.imageSrc;
            img.alt = songObject.imageAlt;

            const h5 = document.createElement('h5');
            const song = document.createElement('div');
            song.append(songObject.title);
            const artist = document.createElement('div');
            artist.append(songObject.artist);
            artist.classList.add('subtitle');
            h5.append(song, artist);

            const icon = document.createElement('img');
            icon.classList.add('bi', 'playListPlay', 'bi-play-circle-fill');
            icon.setAttribute('id', i + 1);
            icon.src = 'icons/play.svg';
            icon.alt = 'play';

            li.append(span, img, h5, icon);

            listElement.append(li);
        }    
    };

    const prettyTime = (sec) => {
        if (sec < 10) {
            return '0:0' + sec;
        } else if (sec < 59) {
            return '0:' + sec;
        } else {
            const minutes = Math.floor(sec / 60);
            const seconds = sec - (minutes * 60);
            return minutes.toString() + ':' + (seconds < 10 ? '0' + seconds : seconds);
        }
    };

    const onTimeUpdate = () => {
        if (mainAudio && currentPlayTime) {
            const time = Math.round(mainAudio.currentTime);
            currentPlayTime.innerHTML = prettyTime(time);
        } 
    };

    const getDuration = () => {
        if (currentEnd) {
            currentEnd.innerHTML = prettyTime(Math.round(mainAudio.duration));
        }
    };

    const playAudio = () => {
        mainAudio.play().then(() => {
           if (playPauseIcon) {
                playPauseIcon.src = 'icons/pause.svg';
                playPauseIcon.alt = 'pause';
           }
        }).catch((error) => {
            console.log(error);
        });
    };

    const pauseAudio = () => {
        mainAudio.pause();
        playPauseIcon.src = 'icons/play.svg';
        playPauseIcon.alt = 'play'; 
    };

    const addNewAudioSrc = (src) => {
        if (mainAudio) {
            mainAudio.removeEventListener('loadedmetadata', getDuration);
            mainAudio.addEventListener('loadedmetadata', getDuration, false);
            mainAudio.src = src;
            playAudio();
        }
    };

    const onMainSongClick = () => {
        if (mainAudio.src) {
            if (mainAudio.paused) {
                playAudio();
            } else {
                pauseAudio();
            }
        }
    };

    const addNewSong = (songObject) => {
        if (songObject && songObject.id) {
            mainImage.alt = songObject.imageAlt;
            mainImage.src = songObject.imageSrc;
            controlsImage.alt = songObject.imageAlt;
            controlsImage.src = songObject.imageSrc;
            controlsSong.innerHTML = songObject.title;
            controlsArtists.innerHTML = songObject.artist;
            mainAudio.currentTime = 0;
            addNewAudioSrc(songObject.audioSrc);
        }
    };

    const findNewSong = (bob) => {
        if (bob == 'prev') {
            currentSongIndex = currentSongIndex - 1;
        } else {
            if (loopSong) {
                //Go to start of the current song
            } else if (shuffleSongs) {
                // Go to random song
                currentSongIndex = Math.floor(Math.random() * mainSongList.length);
            } else if (repeatPlaylist && currentSongIndex == mainSongList.length - 1) {
                // Go to the first song
                currentSongIndex = 0;
            } else {
                //Go to the next song
                currentSongIndex = currentSongIndex + 1;
            }
        }

        addNewSong(mainSongList[currentSongIndex]);
    };

    const onSongClick = ($event) => {
        const path = $event.path;
        let songId;
        let songObjectIndex;
        
        for (let i = 0, j = path.length; i < j; i++) {
            if (path[i].tagName == 'LI') {
                songId = path[i].id;
                break;
            }
        }

        if (songId){
            songObjectIndex = mainSongList.findIndex((x) => {
                return x.id == songId;
            });
        }

        if (songObjectIndex >= 0) {
            currentSongIndex = songObjectIndex;
            addNewSong(mainSongList[songObjectIndex]);
        }
    };

    const onPlayClick = () => {
        if (mainAudio.src) {
            if (mainAudio.paused) {
                playAudio();
            } else {
                pauseAudio();
            }
        }
    };

    const onClickSkipStart = () => {
        if (mainAudio) {
            if (mainAudio.currentTime < 2) {
                findNewSong('prev');
            } else {
                mainAudio.currentTime = 0;
            }
        }
    };

    const onClickSkipEnd = () => {
        if (mainAudio) {
            mainAudio.currentTime = mainAudio.duration;
        }
    };

    const onRepeatClick = () => {
        repeatPlaylist = !repeatPlaylist;
    };

    const onShuffleClick = () => {
        shuffleSongs = !shuffleSongs;
        if (shuffleSongs) {
            // Add active class
            shuffle.classList.add('active');
        } else {
            // Remove active class
            shuffle.classList.remove('active');
        }
    };

    const onLoopClick = () => {
        loopSong = !loopSong;
    };

    liFactory();

    mainImage.addEventListener('click', onMainSongClick, false);
    playCircle.addEventListener('click', onPlayClick, false);
    skipStart.addEventListener('click', onClickSkipStart, false);
    skipEnd.addEventListener('click', onClickSkipEnd, false);
    mainAudio.addEventListener('timeupdate', onTimeUpdate, false);
    mainAudio.addEventListener('ended', findNewSong, false);
    repeat.addEventListener('click', onRepeatClick, false);
    shuffle.addEventListener('click', onShuffleClick, false);
    loop.addEventListener('click', onLoopClick, false);
};
