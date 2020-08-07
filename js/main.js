const instance = new vidbg(".video", {
  mp4: "https://andrewverem.github.io/SpaceX/video/world.mp4",
  webm: "https://andrewverem.github.io/SpaceX/video/world.webm",
  poster: "https://andrewverem.github.io/SpaceX/video/poster.jpg",
  overlay: false,
});

const rellax = new Rellax(".rocket");
window.addEventListener("resize", () => {
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
});

AOS.init();
