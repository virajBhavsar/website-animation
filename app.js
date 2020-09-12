stableStars = document.querySelectorAll(".shining div");
const min = 0;
const max = 100;
let x;
let y;

stableStars.forEach((star) => {
  x = Math.floor(Math.random() * (max - min + 1));
  y = Math.floor(Math.random() * (max - min + 1));

  star.style.top = `${x}%`;
  star.style.left = `${y}%`;

  star.style.animation = `blow 0.5s linear alternate infinite ${Math.floor(
    Math.random() * (1 - 0.1 + 1)
  )}s`;
});
