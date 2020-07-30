document.addEventListener("DOMContentLoaded", () => {
  const btnWorks = document.querySelectorAll(".button[data-filter]"),
    imgWorks = document.querySelectorAll("div[data-filter]");

  function filterImg(data) {
    imgWorks.forEach((img) => {
      if (img.dataset.filter == data || data == "all") {
        img.classList.add("works_active");
        img.classList.remove("works_hidden");
      } else {
        img.classList.add("works_hidden");
        img.classList.remove("works_active");
      }
    });
  }

  function addFocused(i) {
    btnWorks.forEach((btn) => {
      btn.classList.remove("focused");
      btnWorks[i].classList.add("focused");
    });
  }

  btnWorks.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      let target = e.target.dataset.filter;

      addFocused(i);

      switch (target) {
        case "ui":
          filterImg(target);
          break;
        case "web":
          filterImg(target);
          break;
        case "mackups":
          filterImg(target);
          break;
        case "all":
          filterImg(target);
          break;
      }
    });
  });
});
