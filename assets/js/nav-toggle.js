document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".site-nav");
  var btn = document.getElementById("nav-toggle");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});
