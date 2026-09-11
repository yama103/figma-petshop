const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

  hamburger.setAttribute("aria-expanded", !isExpanded);
});
