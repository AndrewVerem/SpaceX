const instance = new vidbg(".video", {
  mp4: "/SpaceX/video/world.mp4",
  webm: "/SpaceX/video/world.webm",
  poster: "/SpaceX/video/poster.jpg",
  overlay: false,
});

const rellax = new Rellax(".rocket");
window.addEventListener("resize", () => {
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
});

AOS.init();
