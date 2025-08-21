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
  var saved = localStorage.getItem(LS_KEY);
  if (!saved) {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    saved = prefersDark ? "dark" : "light";
    localStorage.setItem(LS_KEY, saved);
  }
  apply(saved);
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
