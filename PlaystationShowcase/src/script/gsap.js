import { gsap } from "gsap";

export default function animationGSAP() {
  gsap.defaults({
    repeat: false,
  });

  gsap.from(".name-game", {
    duration: 0.4,
    delay: 2,
    x: 100,
    opacity: 0,
  })
}
