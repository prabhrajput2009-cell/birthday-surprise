const btn = document.getElementById("startBtn");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  music.play();
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 800);
});
