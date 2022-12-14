// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const songs = [
    {

        id: 0,
        name: 'Hạnh phúc mới',
        img: './assets/img/img1.webp',
        file: './assets/media/song1.mp3',
        singer: 'Sơn Tùng MTP',
        duration: '01:11'
    },
    {
        id: 1,
        name: 'Still life',
        img: './assets/img/img2.jpg',
        file: './assets/media/song2.mp3',
        singer: 'BigBang',
        duration: '03:13'
    }, {
        id: 2,
        name: 'Khi em lớn',
        img: './assets/img/img3.jpg',
        file: './assets/media/song3.mp3',
        singer: 'Hoàng Dũng, Orange',
        duration: '03:55'
    }, {
        id: 3,
        name: 'Count on me',
        img: './assets/img/img4.jpg',
        file: './assets/media/song4.mp3',
        singer: 'Bruno Mars',
        duration: '03:13'
    }, {
        id: 4,
        name: 'Tiny love',
        img: './assets/img/img5.jpg',
        file: './assets/media/song5.mp3',
        singer: 'Thịnh Suy',
        duration: '02:38'
    }, {
        id: 5,
        name: 'Đứa nào làm em buồn',
        img: './assets/img/img6.jpg',
        file: './assets/media/song6.mp3',
        singer: 'Phúc Du',
        duration: '04:12'
    }, {
        id: 6,
        name: 'Perfect',
        img: './assets/img/img7.jpg',
        file: './assets/media/song7.mp3',
        singer: 'Ed Sheeran',
        duration: '04:23'
    }, {
        id: 7,
        name: 'Phút ban đầu',
        img: './assets/img/img8.jpg',
        file: './assets/media/song8.mp3',
        singer: 'Vũ',
        duration: '04:00'
    }, {
        id: 8,
        name: 'Bước qua nhau',
        img: './assets/img/img9.jpeg',
        file: './assets/media/song9.mp3',
        singer: 'Vũ',
        duration: '04:17'
    }, {
        id: 9,
        name: 'Tại vì sao',
        img: './assets/img/img10.jpg',
        file: './assets/media/song10.mp3',
        singer: 'MCK',
        duration: '03:34'
    },
    {
        id: 10,
        name: '0 phải hôm nay',
        img: './assets/img/img11.jpg',
        file: './assets/media/song11.mp3',
        singer: 'QNT',
        duration: '02:54'
    },
    {
        id: 11,
        name: 'Just for me',
        img: './assets/img/img12.jpg',
        file: './assets/media/song12.mp3',
        singer: 'Pinkpantheress',
        duration: '01:49'
    },
    {
        id: 12,
        name: 'Replay trên con quây',
        img: './assets/img/img13.jpg',
        file: './assets/media/song13.mp3',
        singer: 'Phúc Du',
        duration: '03:41'
    },
    {
        id: 13,
        name: 'Head in the clounds',
        img: './assets/img/img14.jpg',
        file: './assets/media/song14.mp3',
        singer: 'Hayd',
        duration: '03:04'
    }
]
let songIndex = 0;

const songItem = document.querySelector('.song-item');
const playSong = document.querySelector('.play-song');
const nextSong = document.querySelector('.next-song');
const prevSong = document.querySelector('.prev-song');
const repeatSong = document.querySelector('.repeat-song');
const shuffleSong = document.querySelector('.shuffle-song');
const inputRange = document.querySelector('.range');
const durationTime = document.querySelector('.duration');
const remainingTime = document.querySelector('.remaining');
const inputBefore = document.querySelector('.input-before');
const rangeVolume = document.querySelector('.range-volume');
const inputBeforeVolume = document.querySelector('.input-before-volume');
const volumeIcon = document.querySelector('.volume-icon');
const listSong = document.querySelector('.list-song');
const footerInfo = document.querySelector('.footer-info');




//                     ----Handle Footer Play Music----

let currentSong = songItem.setAttribute('src', `${songs[songIndex].file}`);

// Start app
rangeVolume.value = 50;
renderTimer();


// Play and pause
playSong.addEventListener('click', playPause);
let timer = setInterval(renderTimer, 500);
let inputBar = setInterval(renderInputBar, 10);


let isPlaying = true;
function playPause() {
    if (isPlaying) {
        songItem.play();
        diskAnimate.play();
        playSong.classList.remove('fa-circle-play')
        playSong.classList.add('fa-circle-pause')
        isPlaying = false;
        clearInterval(timer);
        timer = setInterval(renderTimer, 500);
    } else {
        songItem.pause();
        diskAnimate.pause();
        isPlaying = true;
        playSong.classList.remove('fa-circle-pause')
        playSong.classList.add('fa-circle-play')
        clearInterval(timer);
    }
}

function doShuffer() {
    let newSongIndex;
    do {
        newSongIndex = Math.floor(Math.random() * 14);
    } while (newSongIndex === songIndex);
    songIndex = newSongIndex;

    mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`

    footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
    currentSong = songItem.setAttribute('src', `${songs[songIndex].file}`)
    isPlaying = true;
    playPause();
}

// Next and prev music
nextSong.addEventListener('click', handleNext);
function handleNext() {
    if (checkShuffle) {
        doShuffer();
    } else if (songIndex >= songs.length - 1) {
        songIndex = 0;
        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`

        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        playPause();
    } else {
        songIndex++;
        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`
        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        playPause();
    }

}
prevSong.addEventListener('click', handlePrev);
function handlePrev() {
    if (checkShuffle) {
        doShuffer();
    } else if (songIndex <= 0) {
        songIndex = songs.length - 1;
        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`
        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        playPause();
    } else {
        songIndex--;
        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`
        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        playPause();
    }
}

// Repeat song
let isRepeat = false;
let checkRepeat = false;
repeatSong.addEventListener('click', handleRepeat);
function handleRepeat() {

    if (isRepeat) {
        isRepeat = false;
        localStorage.setItem('isRepeat', JSON.stringify(isRepeat));
        checkRepeat = JSON.parse(localStorage.getItem('isRepeat'));
        repeatSong.className = "text-gray-400 text-lg p-3 fa-solid fa-repeat repeat-song";
    } else {
        isRepeat = true;
        localStorage.setItem('isRepeat', JSON.stringify(isRepeat));
        checkRepeat = JSON.parse(localStorage.getItem('isRepeat'));
        repeatSong.className = "repeat-style text-lg p-3 fa-solid fa-repeat repeat-song";
    }

}

// Render checkRepeat
function renderRepeat() {
    checkRepeat = JSON.parse(localStorage.getItem('isRepeat'));
    if (checkRepeat) {
        repeatSong.setAttribute('class', 'repeat-style text-lg p-3 fa-solid fa-repeat repeat-song')
    } else {
        repeatSong.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-repeat repeat-song')
    }
}
renderRepeat();

// Shuffle song
let isShuffle = false;
let checkShuffle = false;

shuffleSong.addEventListener('click', handleShuffle)
function handleShuffle() {
    if (isShuffle) {
        isShuffle = false;
        localStorage.setItem('isShuffle', JSON.stringify(isShuffle));
        checkShuffle = JSON.parse(localStorage.getItem('isShuffle'));
        shuffleSong.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-shuffle shuffle-song')
    } else {
        shuffleSong.setAttribute('class', 'shuffle-style text-lg p-3 fa-solid fa-shuffle shuffle-song')
        isShuffle = true;
        localStorage.setItem('isShuffle', JSON.stringify(isShuffle));
        checkShuffle = JSON.parse(localStorage.getItem('isShuffle'));
    }
}

// Render shuffle
function renderShuffle() {
    checkShuffle = JSON.parse(localStorage.getItem('isShuffle'))
    if (checkShuffle) {
        shuffleSong.setAttribute('class', 'shuffle-style text-lg p-3 fa-solid fa-shuffle shuffle-song')
        console.log(checkShuffle);
    } else {
        console.log(checkShuffle);
        shuffleSong.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-shuffle shuffle-song')
    }
}
renderShuffle();

// Ended handle
songItem.addEventListener('ended', handleEnd);
function handleEnd() {
    if (checkShuffle) {
        doShuffer();
    } else if (checkRepeat) {
        isPlaying = true;
        playPause();
    } else {
        handleNext();
    }

}
function renderInputBar() {
    inputRange.min = 0;
    inputRange.max = songItem.duration;
    inputRange.value = songItem.currentTime;
    inputBefore.style.width = (songItem.currentTime / songItem.duration) * 100 + '%';
}
// Input duration and remaining time
function renderTimer() {
    if (!songItem.duration) {
        durationTime.innerText = '00:00';
        remainingTime.innerText = '00:00';
    } else {
        durationTime.innerText = formatTimer(songItem.duration);
        remainingTime.innerText = formatTimer(songItem.currentTime);
    }
}

// FIX input range
songItem.ontimeupdate = function () {
    inputRange.value = songItem.currentTime;
}
handleInputBar = function () {
    songItem.currentTime = inputRange.value;
}

////////
function formatTimer(number) {
    const minus = Math.floor(number / 60);
    const second = Math.floor(number - minus * 60);
    if (minus < 10) {
        return `${minus < 10 ? '0' + minus : minus}:${second < 10 ? '0' + second : second}`;
    }
}

// Change duration
inputRange.addEventListener("change", handleChangeBtn);
function handleChangeBtn() {
    songItem.currentTime = inputRange.value
}
inputBefore.addEventListener("change", handleChangeBar);
function handleChangeBar() {
    inputBefore.style.width = (songItem.currentTime / songItem.duration) * 100 + '%';
}

// Change volumn
rangeVolume.addEventListener('mousemove', handelChangeVolumn);
function handelChangeVolumn() {
    songItem.volume = rangeVolume.value / 100;
    changeVolumnIcon(songItem.volume);
}

// Chane volumn icon
function changeVolumnIcon(number) {
    if (number == 0) {
        volumeIcon.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-volume-xmark volume-icon')
    } else {
        volumeIcon.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-volume-high volume-icon')
    }
}

// Mute volumn
let isMute = false;
volumeIcon.addEventListener('click', handleMute)
function handleMute() {
    if (isMute) {
        songItem.volume = rangeVolume.value / 100;
        if (songItem.volume != 0) {
            volumeIcon.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-volume-high volume-icon')
        }
        isMute = false;
    } else {
        isMute = true;
        songItem.volume = 0
        volumeIcon.setAttribute('class', 'text-gray-400 text-lg p-3 fa-solid fa-volume-xmark volume-icon')
    }
}


// Stick slider
$(document).ready(function () {
    $('.img-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        infinite: false,
        draggable: false,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024, //<1025
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                    draggable: true,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    draggable: true
                }
            },
        ]
    });
});
//                              ----Handle UI----

// Render UI
const htmls = songs.map(function (value, index) {
    return `
        <div class="px-2 song-package" index="${index}">
        <div class="h-40 song-img">
        <img src="
        ${value.img}
        " alt="" class="w-full h-full object-cover rounded-lg  ">
        </div>
        <h3 class="text-sm font-semibold mt-2">
        ${value.name}
        </h3>
        <span class="text-sm text-gray-400">${value.singer}</span>
        </div>
        `
})
listSong.innerHTML = htmls.join('');


const songPackage = document.querySelectorAll('.song-package');
const mainDisk = document.querySelector('.main-disk');
const listAllSong = document.querySelector('.list-all-song');




//Play song index
songPackage.forEach(function (value, index) {
    value.addEventListener('click', () => {
        songIndex = Number(value.getAttribute('index'));
        console.log(songIndex);

        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`

        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        currentSong = songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        playPause();
    })
})

// Render main disk
mainDisk.innerHTML = `<img src="
        ${songs[0].img}
        " alt="" class="w-full h-full object-cover rounded-full">`

// Render current song info
footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[0].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[0].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[0].singer}</p>
            </div>
        </div>
        </div>
        `
// Rotage and Pause disk
let diskAnimate = mainDisk.animate([{ transform: "rotate(360deg)" }], {
    duration: 15000, // 10 seconds
    iterations: Infinity
});
diskAnimate.pause();

// Render list all song

const listSongs = songs.map(function (value, index) {
    return `
    <div class="playlist-item flex items-center pl-6" index="${index}">
        <p class="text-sm text-[#b29dd7] p-[10px]">${index + 1}</p>
        <i class="text-[#b29dd7] fa-regular fa-heart p-[6px]"></i>
        <div class="p-2 mr-12 flex-1">
            <h3 class="text-sm font-semibold">
                ${value.name}
            </h3>
            <span class="text-gray-400 text-sm">${value.singer}</span>
        </div>
        <i class="text-[#b29dd7] fa-solid fa-ellipsis p-2"></i>
        <div class="duration-item">
        <p class="text-sm text-gray-400 p-2 duration-text">${value.duration}</p>
        </div>
    </div>
    `
})

listAllSong.innerHTML = listSongs.join('');

const playlistItem = document.querySelectorAll('.playlist-item')
playlistItem.forEach(function (value, index) {
    value.addEventListener('click', () => {
        songIndex = Number(value.getAttribute('index'));
        mainDisk.innerHTML = `<img src="
        ${songs[songIndex].img}
        " alt="" class="w-full h-full object-cover rounded-full">`

        footerInfo.innerHTML = `
        <div class="hidden lg:block">
        <div class="flex items-center min-w-[200px]">
            <div class="w-8 h-8 mr-3 ml-5">
                <img src="
                        ${songs[songIndex].img}
                        " alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-xs md:text-sm font-semibold">${songs[songIndex].name}</h3>
                <p class="text-xs md:text-sm text-gray-400">${songs[songIndex].singer}</p>
            </div>
        </div>
        </div>
        `
        currentSong = songItem.setAttribute('src', `${songs[songIndex].file}`);
        isPlaying = true;
        console.log(songIndex);
        playPause();
    })
})







