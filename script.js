// Botones (manteniendo funcionalidad que ya tenías)
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  alert("Me alegra saber que todo está bien 💖");
});

noBtn.addEventListener("click", () => {
  alert("No te preocupes, siempre estaré para escucharte 🌸");
});

// --- Animación de pétalos de flores cayendo ---
const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
const petalCount = 30;

// Crear pétalos
for (let i = 0; i < petalCount; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 5 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    drift: Math.random() * 2 - 1
  });
}

// Dibujar y animar pétalos
function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,182,193,0.8)"; // color rosado

  petals.forEach(p => {
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.radius, p.radius * 0.6, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();

    p.y += p.speed;
    p.x += p.drift;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawPetals);
}

drawPetals();
