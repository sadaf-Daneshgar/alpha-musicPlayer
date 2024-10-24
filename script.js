const preBtn = document.querySelector('.pre');
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.next');
const musicName = document.querySelector('.music-name');
const musicSinger = document.querySelector('.music-singer');
const musicImg = document.querySelector('.music-img');
const audio = document.querySelector('#audio');
const currentTime = document.querySelector('.progress_time');
const progressBar = document.querySelector('.progress');
const durationTime = document.querySelector('.progress_time1');

const musicDetail = [
  {
    id: '1',
    image: 'image/bike.jpg',
    name: 'Shipping Lanes',
    singer: 'Tony Hazzard',
    music: 'image/assets_music_Be a Music.mp3',
  },
  {
    id: '2',
    image: 'image/night.jpg',
    name: 'Night Owl',
    singer: 'Broke For Free',
    music: 'image/friend.mp3',
  },
  {
    id: '3',
    image: 'image/morning.jpg',
    name: 'Morning Coffee',
    singer: 'Jango',
    music: 'image/day.mp3',
  },
  {
    id: '4',
    image: 'image/ghozyLab.jpg',
    name: 'Endless Summer',
    singer: 'Alan Walker',
    music: 'image/endless.mp3',
  },
  // {
  //   id: "5",
  //   image: "image/artymag.jpg",
  //   name: "Endless Summer",
  //   singer: "Alan Walker",
  //   music: "music/Endless Summer.mp3",
  // },
  // {
  //   id: "6",
  //   image: "image/rom1.webp",
  //   name: "Endless Summer",
  //   singer: "Alan Walker",
  //   music: "music/Endless Summer.mp3",
  // },
];

let isPlaying = false;
let musicIndex = 0;

function musics() {
  musicName.textContent = musicDetail[musicIndex].name;
  musicSinger.textContent = musicDetail[musicIndex].singer;
  musicImg.src = musicDetail[musicIndex].image;
  audio.src = musicDetail[musicIndex].music;
}

musics(musicDetail[musicIndex]);

function playMusic() {
  audio.play();
  playBtn.classList.replace('fa-play', 'fa-pause');
  isPlaying = true;
}

function pauseMusic() {
  audio.pause();
  playBtn.classList.replace('fa-pause', 'fa-play');
  isPlaying = false;
}

function playHundler() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function nextMusic() {
  musicIndex += 1;
  if (musicIndex > musicDetail.length - 1) {
    musicIndex = 0;
  }
  musics();
  playMusic();
}

function preMusic() {
  musicIndex -= 1;
  if (musicIndex < 0) {
    musicIndex = musicDetail.length - 1;
  }
  musics();
  playMusic();
}

function FormTime(time) {
  const min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

function progressValue() {
  progressBar.max = audio.duraion;
  progressBar.value = audio.currentTime;

  currentTime.textContent = FormTime(audio.currentTime);
  durationTime.textContent = FormTime(audio.duration);
}

setInterval(progressValue, 500);

function progressChange() {
  audio.currentTime = progressBar.value;
}

progressBar.addEventListener('click', progressChange);
playBtn.addEventListener('click', playHundler);
nextBtn.addEventListener('click', nextMusic);
preBtn.addEventListener('click', preMusic);
