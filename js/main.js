const instance = new vidbg(".video", {
  mp4: "http://andrewverem.github.io/SpaceX/video/world.mp4",
  webm: "http://andrewverem.github.io/SpaceX/video/world.webm",
  poster: "http://andrewverem.github.io/SpaceX/video/poster.jpg",
  overlay: false,
});

const rellax = new Rellax(".rocket");
window.addEventListener("resize", () => {
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
});

AOS.init();
