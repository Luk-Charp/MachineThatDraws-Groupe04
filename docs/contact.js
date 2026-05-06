window.addEventListener("scroll", function () {
  const menu = document.querySelector(".menu");




  if (window.scrollY > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});


let lastScrollY = window.scrollY;
let scrollingDown = true;


window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  scrollingDown = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;
});


const sections = document.querySelectorAll("section:not(.home)");


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting && scrollingDown) {
      entry.target.classList.add("visible");
    }

    if (!entry.isIntersecting && !scrollingDown) {
      entry.target.classList.remove("visible");
    }


  });
}, { threshold: 0.2 });


if (window.innerWidth > 1024) {
    sections.forEach(section => {
        observer.observe(section);
    });
} else {
    sections.forEach(section => {
        section.classList.add("visible");
    });
}




