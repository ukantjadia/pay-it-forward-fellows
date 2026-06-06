// Mobile menu toggle + footer year
(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });

    // Close menu when a link is tapped
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Countdown to the June 30, 2026 first tuition installment
  var countdownEls = document.querySelectorAll("[data-countdown]");
  if (countdownEls.length) {
    var days = Math.ceil((new Date("2026-06-30T23:59:59") - new Date()) / 86400000);
    var label = days > 0 ? days + (days === 1 ? " day" : " days") : "0 days";
    countdownEls.forEach(function (el) { el.textContent = label; });
  }
})();
