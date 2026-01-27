const btn = document.getElementById("startBtn");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
 music.currentTime = 55; // yahan seconds change kar sakte ho
  music.volume = 0.7;
  music.play();
  music.volume = 0;
music.play();

let vol = 0;
const fade = setInterval(() => {
  if (vol < 0.7) {
    vol += 0.05;
    music.volume = vol;
  } else {
    clearInterval(fade);
  }
}, 200);

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 800);
});
let flippedCount = 0;

function flipCard(card) {
  if (!card.classList.contains("flipped")) {
    card.classList.add("flipped");
    flippedCount++;

    if (flippedCount === 3) {
      document.getElementById("finalBtn").style.display = "inline-block";
    }
  }
}

function goFinal() {
  window.location.href = "page3.html";
}
const balloonContainer = document.querySelector(".balloons");

if (balloonContainer) {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 8 + Math.random() * 5 + "s";
    balloon.style.animationDelay = Math.random() * 5 + "s";
    balloonContainer.appendChild(balloon);
  }
}
