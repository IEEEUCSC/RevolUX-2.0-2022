/*===========================
 * Navbar Logo
 *===========================*/
const logo = document.getElementById("logo");

if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
else logo.style.opacity = 1;

window.addEventListener("scroll", () => {
  if (window.scrollY < 10 && window.innerWidth > 993) logo.style.opacity = 0;
  else logo.style.opacity = 1;
});

// Checking which transitionEnd event to use depending on the browser
whichTransitionEvent = () => {
  let t,
    el = document.createElement("fakeelement");

  let transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
};

const transitionEvent = whichTransitionEvent();
const logoNavbar1 = document.getElementById("logo-navbar-1");
const logoNavbar2 = document.getElementById("logo-navbar-2");
const logoList = [logoNavbar1, logoNavbar2];
var index = 1;
const changeLogo = () => {
  index = 1 - index;
  console.log(`Revealing ${index} logo`);
  logoList[index].classList.remove("animate");
  logoList[index].addEventListener(transitionEvent, () => {
    logoList[1 - index].classList.add("animate");
    logoList[index].removeEventListener(transitionEvent, this);
  });
};
setInterval(changeLogo, 3000);

/*==========================
 * Schedule
 *==========================*/

const currentDate = new Date();

const timelineItems = document.getElementsByClassName("timeline-event");
// Stores index of last past event
var pastIndex = 0;
[...timelineItems].forEach((item, index) => {
  const date = new Date(
    item.getElementsByClassName("timeline-date")[0].innerHTML
  );

  // Checks if past event
  if (date < currentDate) {
    item.classList.add("timeline-past");
    pastIndex = index;
  }
});
const upcomingEvent = timelineItems[pastIndex + 1] || null;
// Upcoming event
if (upcomingEvent) {
  upcomingEvent.classList.add("timeline-upcoming");
}

/*===========================
 * Hero Button
 *===========================*/
const heroButton = document.getElementById("hero-button");
if (currentDate >= closingDate || registrationClosed) {
  heroButton.innerHTML = "Registrations Closed";
  heroButton.disabled = true;
}

/*==========================
 * Register
 *==========================*/

if (currentDate >= closingDate || registrationClosed) {
  const registerTitle = document.getElementById("register-title");
  const registration = document.getElementById("registration");

  registerTitle.innerHTML = "Registrations Closed";
  registration.remove();
}

/*==========================
 * Scroll Magic
 *==========================*/
var controller = new ScrollMagic.Controller();

/**
 * About Section
 */
new ScrollMagic.Scene({
  triggerElement: window.innerWidth > 993 ? "#section-about" : "#divisor",
  duration: 300,
  offset: -150,
})
  .setTween(
    gsap.to("#divisor-2", {
      css: { width: "100%" },
      ease: "none",
    })
  )
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: window.innerWidth > 993 ? "#section-about" : "#divisor",
  duration: 300,
  offset: 150,
})
  .setTween(
    gsap.to("#divisor", {
      css: { width: "100%" },
      ease: "none",
    })
  )
  .addTo(controller);

// Big screens
if (window.innerWidth > 993) {
  /**
   * Awards Section
   */

  // Opacity
  const offset = Math.floor(window.innerHeight / 2);

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
    duration: 1200 + offset + 50,
    offset: -50,
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
    offset: 0 + offset,
  })
    .setPin(award1, { pushFollowers: false })
    .setClassToggle(award1, "green")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 800,
    offset: 400 + offset,
  })
    .setPin(award2, { pushFollowers: false })
    .setClassToggle(award2, "green")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 400,
    offset: 800 + offset,
  })
    .setPin(award3)
    .setClassToggle(award3, "green")
    .addTo(controller);
}
