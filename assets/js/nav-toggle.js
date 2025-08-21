document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("site-nav");
  var btn = document.getElementById("nav-toggle");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});
