let currentlyPlayingVideo = null;

const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  video.addEventListener('click', () => {
    if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
      currentlyPlayingVideo.pause();
    }
    if (video.paused) {
      video.play();
      currentlyPlayingVideo = video;
    } else {
      video.pause();
      currentlyPlayingVideo = null;
    }
  });
});

const moreButton = document.querySelector('.more');
const lessButton = document.querySelector('.less');
const video = document.querySelectorAll('.rv');

let visibleVideos = 4;
let hiddenVideo = Array.prototype.slice.call(video).slice(visibleVideos);
hiddenVideo.forEach(video => video.style.display = 'none');

let showAll = false;

moreButton.addEventListener('click', () => {
  if (!showAll) {
    let nextVideos = hiddenVideo.slice(0, visibleVideos);
    nextVideos.forEach(video => video.style.display = 'block');
    hiddenVideo = hiddenVideo.slice(visibleVideos);
    if (hiddenVideo.length === 0) {
      moreButton.style.display = 'none';
      lessButton.style.display = 'block';
      showAll = true;
    }
  }
});

lessButton.addEventListener('click', () => {
  for (let i = video.length - 1; i >= visibleVideos; i--) {
    video[i].style.display = 'none';
  }
  moreButton.style.display = 'block';
  lessButton.style.display = 'none';
  showAll = false;
});