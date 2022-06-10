document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
  else logo.style.opacity = 1;

  window.addEventListener("scroll", () => {
    if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
    else logo.style.opacity = 1;
  });

  /***************************
   * Scroll Magic Stuff
   ***************************/

  if (window.innerWidth > 993) {
    var controller = new ScrollMagic.Controller();

    /**
     * About Section
     */
    new ScrollMagic.Scene({
      triggerElement: window.innerWidth > 993 ? "#section-about" : "#divisor",
      duration: 400,
    })
      .setTween(
        gsap.to("#divisor", {
          css: { width: "100%" },
          ease: "none",
        })
      )
      .addTo(controller);

    /**
     * Awards Section
     */

    // Opacity

    [1, 2, 3].forEach((i) => {
      const awardId = `#award-${i}-place`;
      var tween = gsap.to(awardId, {
        css: { opacity: "1" },
        ease: "none",
      });

      new ScrollMagic.Scene({
        triggerElement: awardId,
        duration: 200,
        offset: -200,
      })
        .setTween(tween)
        .addTo(controller);
    });

    // Pin
    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 1200,
    })
      .setPin("#awards-title", { pushFollowers: false })
      .setClassToggle("#awards-title", "green")
      .addTo(controller);

    const award1 = "#award-1-place";
    const award2 = "#award-2-place";
    const award3 = "#award-3-place";
    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 1200,
    })
      .setPin(award1, { pushFollowers: false })
      .setClassToggle(award1, "green")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 800,
      offset: 400,
    })
      .setPin(award2, { pushFollowers: false })
      .setClassToggle(award2, "green")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 400,
      offset: 800,
    })
      .setPin(award3)
      .setClassToggle(award3, "green")
      .addTo(controller);
  }
});
