document.addEventListener('DOMContentLoaded', function () {
  console.log("Good job opening the window");
});
  const video = document.getElementById('player1');

  video.autoplay = false;
  video.loop = false;

  const volumeDisplay = document.getElementById('volume');


  document.getElementById('play').addEventListener('click', function () {
      video.play();
      volumeDisplay.textContent = video.volume * 100 + "%";

  });
  document.getElementById('pause').addEventListener('click', function () {
      video.pause();
  });

  document.getElementById('slower').addEventListener('click', function () {
      video.playbackRate *= 0.9;
      console.log('New speed: '+video.playbackRate.toFixed(2));
  });

  document.getElementById('faster').addEventListener('click', function () {
      video.playbackRate /= 0.9;
      console.log('New speed: '+video.playbackRate. toFixed(2));
  });

  document.getElementById('skip').addEventListener('click', function () {
      video.currentTime += 10;
      if (video.currentTime >= video.duration) {
          video.currentTime = 0;
      }
      console.log('New time: ' + video.currentTime);
  });

  document.getElementById('mute').addEventListener('click', function () {
      if (video.muted) {
          video.muted = false;
          this.textContent = 'Mute';
      } else {
          video.muted = true;
          this.textContent = 'Unmute';
      }
  });

  document.getElementById('slider').addEventListener('input', function () {
      video.volume = this.value / 100;
      volumeDisplay.textContent = this.value+"%";
  });

  document.getElementById('vintage').addEventListener('click', function () {
      video.classList.add('oldSchool');
  });

  document.getElementById('orig').addEventListener('click', function () {
      video.classList.remove('oldSchool');
  });
