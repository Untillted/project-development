document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider"),
    slideElem = document.querySelectorAll(".slider-items"),
    dots = document.querySelectorAll(".dots__item");

  dots.forEach((dot, i) => {
    let size = slideElem[0].clientWidth * 3;
    dot.addEventListener("click", () => {
      slider.style.transform = `translateX(${-size * i}px)`;
    });
  });
});
