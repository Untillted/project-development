document.addEventListener("DOMContentLoaded", () => {
  const teams = document.querySelectorAll(".team__member"),
    dots = document.querySelectorAll(".dots__item");

  let index = 0;
  console.log();

  function activeTeam(i) {
    teams.forEach((team) => {
      team.classList.remove("active");
      teams[i].classList.add("active");
      teams[i + 1].classList.add("active");
      teams[i + 2].classList.add("active");
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      activeTeam(i);
    });
  });
});
