window.onload = function() {
    const mainSongList = [
        {
            id: 'song-1',
            title: 'Money Trees',
            imageSrc: 'images/money_trees_kendrick.jpg',
            imageAlt: 'Kendrick Lamer',
            audioSrc: 'audio/money-trees.mp3',
            artist: 'Kendrick Lamar & Jay Rock',
        },
        {
            id: 'song-2',
            title: 'Sweater Weather',
            imageSrc: 'images/sweater_weather_the_neighbourhood.jpg',
            imageAlt: 'The Neighbourhood',
            audioSrc: 'audio/sweater-weather.mp3',
            artist: 'The Neighbourhood',
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
   
    const songElements = document.querySelectorAll('li');
    const mainImage = document.getElementById('mainImage');
    const controlsImage = document.getElementById('controlsImage');
    const controlsSong = document.getElementById('controlsSong');
    const controlsArtists = document.getElementById('controlsArtists');
    const mainAudio = document.getElementById('mainAudio');

    const playAudio = () => {
        mainAudio.play().catch((error) => {
            console.log(error);
        });
    };

    const pauseAudio = () => {
        mainAudio.pause();
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

    const onSongClick = ($event) => {
        const path = $event.path;
        let songId;
        let songObject;
        
        for (let i = 0, j = path.length; i < j; i++) {
            if (path[i].tagName == 'LI') {
                songId = path[i].id;
                break;
            }
        }

        if (songId){
            songObject = mainSongList.find((x) => {
                return x.id == songId;
            });
        }

        if (songObject && songObject.id) {
            mainImage.alt = songObject.imageAlt;
            mainImage.src = songObject.imageSrc;
            controlsImage.alt = songObject.imageAlt;
            controlsImage.src = songObject.imageSrc;
            controlsSong.innerHTML = songObject.title;
            controlsArtists.innerHTML = songObject.artist;
            mainAudio.src = songObject.audioSrc;
            playAudio();
        }
    };

   

    for (let i = 0, j = songElements.length; i < j; i++) {
        songElements[i].addEventListener('click', onSongClick, false);
    }

    mainImage.addEventListener('click', onMainSongClick, false);

};
