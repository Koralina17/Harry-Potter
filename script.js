const wolf = document.querySelector(".wolf");
const spell = document.querySelector(".spell");

function animateWolf() {
  wolf.animate([
    { left: "-20%", opacity: 0, transform: "translateY(-50%) scale(0.5)" },
    { opacity: 1, offset: 0.2 },
    { left: "40%", opacity: 1, offset: 0.6 },
    { left: "80%", opacity: 0, transform: "translateY(-50%) scale(0.9)" }
  ], {
    duration: 5000,
    easing: "ease-in-out"
  });

  spell.animate([
    { opacity: 0 },
    { opacity: 1, offset: 0.2 },
    { opacity: 0 }
  ], {
    duration: 5000
  });
}

setInterval(animateWolf, 5200);
animateWolf();
