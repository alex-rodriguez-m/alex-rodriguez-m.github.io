(function () {
  var LS_KEY = "ap-theme";
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  // Check if user has saved theme
  var saved = localStorage.getItem(LS_KEY);
  if (!saved) {
    // Default: light theme
    saved = "light";
    localStorage.setItem(LS_KEY, saved);
  }
  apply(saved);

  // Toggle when button clicked
  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = localStorage.getItem(LS_KEY) || "light";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(LS_KEY, next);
      apply(next);
    });
  });
})();
