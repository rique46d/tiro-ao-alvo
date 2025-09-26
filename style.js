const gameArea = document.getElementById("game-area");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 30;
let gameInterval;
let countdown;

function createTarget() {
  const target = document.createElement("div");
  target.classList.add("target");

  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    target.remove();
    createTarget();
  });

  gameArea.appendChild(target);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  gameArea.innerHTML = "";
  startBtn.disabled = true;

  createTarget();

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(countdown);
  gameArea.innerHTML = "";
  alert(`⏰ Tempo esgotado! Você fez ${score} ponto(s).`);
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startGame);
