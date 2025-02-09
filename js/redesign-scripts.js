"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;

  root.style.setProperty("--main-color", mainColor);
  root.style.setProperty("--accent-color", accentColor);
  root.style.setProperty("--secondary-color", secondaryColor);
  root.style.setProperty("--page-bg-color", pageBgColor);
  root.style.setProperty("--icon-text-color", iconTextColor);

  const swiper = new Swiper(".swiper", {
    spaceBetween: 8,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1440.98: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
  });
});
