const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// الكود المضاف (لإغلاق القائمة عند النقر على رابط)
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
