const btn = document.getElementById("startBtn");
const music = document.getElementById("bg-music");

btn.addEventListener("click", () => {
  music.play();
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
