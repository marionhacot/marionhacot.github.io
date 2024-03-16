const hamMenu = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");

/* display mobile menu */
hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("is-active");
  hamMenu.classList.remove("is-active");
});
