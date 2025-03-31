gsap.registerPlugin(ScrollTrigger);

let svg = document.querySelector("svg");
let svgPath = document.querySelector("path");

const pathLength = svgPath.getTotalLength();
gsap.set(svgPath, {
  strokeDasharray: pathLength,
});

gsap.fromTo(
  svgPath,
  {
    strokeDashoffset: pathLength,
  },
  {
    strokeDashoffset: 0,
    duration: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".svg-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: true,
      //   toggleActions: "play pause reverse pause",
    },
  }
);
