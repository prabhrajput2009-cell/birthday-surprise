const music = document.getElementById("bg-music");
const btn = document.getElementById("startBtn");

if (music) {
  music.currentTime = 55;
  music.play();
}

  if (savedTime) {
    // agar pehle se time saved hai, wahi se chalao
    music.currentTime = savedTime;
  } else {
    // first time load ho raha hai to 55 sec se start
    music.currentTime = 55;
  }

  music.volume = 0.7;

  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 500);
}

if (btn) {
  btn.addEventListener("click", () => {
    music.play();
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 800);
  });
}
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
