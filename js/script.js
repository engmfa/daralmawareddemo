const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
