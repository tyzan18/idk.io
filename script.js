// Botones (manteniendo funcionalidad que ya tenías)
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  alert("Me alegra saber que todo está bien 💖");
});

noBtn.addEventListener("click", () => {
  alert("No te preocupes, siempre estaré para escucharte 🌸");
});

const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
const petalCount = 40; // cantidad de pétalos

// Clase pétalo
class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;  // posición inicial random en X
    this.y = Math.random() * -canvas.height; // empiezan desde arriba
    this.size = 15 + Math.random() * 20; // tamaño entre 15 y 35px
    this.speed = 1 + Math.random() * 2; // velocidad de caída
    this.swing = Math.random() * 2; // movimiento lateral
    this.angle = Math.random() * Math.PI * 2;
    this.opacity = 0.6 + Math.random() * 0.4; // transparencia
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * this.swing; // movimiento en zig-zag
    this.angle += 0.02; // velocidad del zig-zag

    // si cae más allá del fondo, vuelve arriba
    if (this.y > canvas.height) {
      this.reset();
      this.y = 0;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size * 0.6, this.size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`; // color rosa
    ctx.fill();
  }
}

// Crear los pétalos
for (let i = 0; i < petalCount; i++) {
  petals.push(new Petal());
}

// Animación
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach((petal) => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Ajuste si cambian el tamaño de la ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


