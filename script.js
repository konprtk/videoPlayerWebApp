document
  .getElementById("videoFile")
  .addEventListener("change", function (event) {
    const file = this.files[0];
    const video = document.getElementById("videoPlayer");
    const videoSource = URL.createObjectURL(file);

    video.src = videoSource;
  });

const videoPlayer = document.getElementById("videoPlayer");
const playPauseButton = document.getElementById("playPause");
const playPauseIcon = document.getElementById("playPauseIcon");

function skipVideo(seconds) {
  videoPlayer.currentTime += seconds;
}

function togglePlayPause() {
  if (videoPlayer.paused || videoPlayer.ended) {
    playVideo();
  } else {
    pauseVideo();
  }
}

function playVideo() {
  videoPlayer.play();
  playPauseIcon.classList.remove("fa-play");
  playPauseIcon.classList.add("fa-pause");
  playPauseButton.textContent = "Pause";
}

function pauseVideo() {
  videoPlayer.pause();
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-play");
  playPauseButton.textContent = "Play";
}
