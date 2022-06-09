document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
  else logo.style.opacity = 1;

  window.addEventListener("scroll", () => {
    if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
    else logo.style.opacity = 1;
  });

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = gsap.to("#divisor", {
    css: { width: "100%" },
    ease: "none",
  });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: window.innerWidth > 993 ? "#section-about" : "#divisor",
    duration: 400,
  })
    .setTween(tween)
    .addTo(controller);
});
