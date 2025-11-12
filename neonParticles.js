// neonParticles.js — افکت ذرات نئونی پس‌زمینه
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("neon-particles");
  if (!container) return;

  for (let i = 0; i < 45; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "%";
    p.style.bottom = Math.random() * -100 + "px";
    p.style.animationDelay = Math.random() * 20 + "s";
    p.style.animationDuration = 12 + Math.random() * 10 + "s";
    p.style.opacity = 0.4 + Math.random() * 0.6;
    container.appendChild(p);
  }
});
