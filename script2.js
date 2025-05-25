
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const gameCheckboxes = document.querySelectorAll("#gameList input");

const popup = document.getElementById("popup-modal");
const popupText = document.getElementById("game-name");
const rejectButton = document.getElementById("reject-button");
const rerollButton = document.getElementById("reroll-button");

let angle = 0;
let isSpinning = false;

function drawWheel(options) {
  const num = options.length;
  if (num === 0) return;

  const arc = (2 * Math.PI) / num;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  options.forEach((option, i) => {
    const startAngle = i * arc + angle;
    const endAngle = startAngle + arc;

    ctx.beginPath();

    const gradient = ctx.createLinearGradient(
      200 + Math.cos(startAngle) * 150,
      200 + Math.sin(startAngle) * 150,
      200 + Math.cos(endAngle) * 150,
      200 + Math.sin(endAngle) * 150
    );

    if (i % 2 === 0) {
      gradient.addColorStop(0, "#0A0614");
      gradient.addColorStop(1, "#36113C");
    } else {
      gradient.addColorStop(0, "#36113C");
      gradient.addColorStop(1, "#0A0614");
    }

    ctx.fillStyle = gradient;
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, startAngle, endAngle);
    ctx.fill();
    ctx.save();

    ctx.translate(200, 200);
    ctx.rotate(startAngle + arc / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(option, 180, 5);
    ctx.restore();
  });
}

function spinWheel() {
  if (isSpinning) return;

  const selectedGames = Array.from(gameCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

const replayButton = document.getElementById('reroll-button');

if (selectedGames.length === 0) {
  showPopup("Válassz legalább egy játékot!");
  if (replayButton) replayButton.style.display = 'none';
  return;
} else if (selectedGames.length < 2) {
  showPopup('Legalább 2 játékot ki kell választani a pörgetéshez!');
  if (replayButton) replayButton.style.display = 'none';
  return;
}


  isSpinning = true;
  let spinAngle = Math.random() * 360 + 720;
  let targetAngle = angle + (spinAngle * Math.PI) / 180;

  let frames = 120;
  let currentFrame = 0;
  const startAngle = angle;

  function animate() {
    currentFrame++;
    angle = startAngle + easeOut(currentFrame, 0, targetAngle - startAngle, frames);
    drawWheel(selectedGames);

    if (currentFrame < frames) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      const winnerIndex = Math.floor(((2 * Math.PI - (angle % (2 * Math.PI))) / (2 * Math.PI)) * selectedGames.length) % selectedGames.length;
      showPopup(selectedGames[winnerIndex]);
    }
  }

  animate();
}

function easeOut(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

function showPopup(gameName) {
  popupText.textContent = gameName;
  popup.classList.remove("hidden");
}

rejectButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

rerollButton.addEventListener("click", () => {
  popup.classList.add("hidden");
  spinWheel();
});

spinBtn.addEventListener("click", spinWheel);

gameCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const selectedGames = Array.from(gameCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    drawWheel(selectedGames);
  });
});


function showPopup(gameName) {
  popupText.textContent = gameName;
  document.getElementById("overlay").classList.remove("hidden");
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("overlay").classList.add("hidden");
  popup.classList.add("hidden");
}

function reroll() {
  closePopup();
  spinWheel(); // újraindítja a pörgetést
}

rejectButton.addEventListener("click", closePopup);
rerollButton.addEventListener("click", reroll);

// első rajz
drawWheel(Array.from(gameCheckboxes).filter(cb => cb.checked).map(cb => cb.value));
