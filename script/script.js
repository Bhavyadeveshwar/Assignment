const video = document.getElementById("promoVideo");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    video.parentElement.classList.add("playing");
  } else {
    video.pause();
    video.parentElement.classList.remove("playing");
  }
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    video.parentElement.classList.add("playing");
  } else {
    video.pause();
    video.parentElement.classList.remove("playing");
  }
});
