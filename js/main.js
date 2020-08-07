const instance = new vidbg(".video", {
  mp4: "/video/world.mp4",
  webm: "/video/world.webm",
  poster: "/video/poster.jpg",
  overlay: false,
});

const rellax = new Rellax(".rocket");
window.addEventListener("resize", () => {
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
});

AOS.init();
