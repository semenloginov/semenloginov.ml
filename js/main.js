const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const body = document.querySelector(".body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
});

menu.addEventListener("click", () => {
  burger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("active");
});
// accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion__item");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordion__btn");
      const content = self.querySelector(".accordion__content");

      self.classList.toggle("active");

      // если открыт аккордеон
      if (self.classList.contains("active")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
});
