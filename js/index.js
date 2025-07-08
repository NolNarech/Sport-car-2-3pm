window.onload = function () {
  const videoSources = [
    '/video_2025-06-29_20-02-03.mp4',
    '/video_2025-06-29_20-02-23.mp4',
    '/video_2025-06-29_20-02-28.mp4',
    '/video_2025-06-29_20-02-32.mp4'
  ];

  let currentIndex = 0;
  const mainVideo = document.getElementById('mainVideo');

  // Prevent right-click on video
  mainVideo.addEventListener('contextmenu', (e) => e.preventDefault());

  function playNextVideo() {
    mainVideo.src = videoSources[currentIndex];
    mainVideo.load();
    mainVideo.play().catch((err) => {
      console.error("Playback error:", err);
    });
  }

  mainVideo.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % videoSources.length;
    playNextVideo();
  });

  playNextVideo();
};
AOS.init();