(function () {
  var site = window.SITE || {};

  if (site.name) {
    document.querySelectorAll("[data-name]").forEach(function (el) {
      el.textContent = site.name;
    });
    document.title = site.name + " — AI Engineer";
  }

  var emailLink = document.querySelector("[data-email]");
  if (emailLink && site.email) {
    emailLink.href = "mailto:" + site.email;
    emailLink.textContent = site.email;
  }

  function bindLink(attr, url, fallbackText) {
    var el = document.querySelector(attr);
    if (!el || !url) return;
    el.href = url;
    el.hidden = false;
    if (fallbackText) el.textContent = fallbackText;
  }

  bindLink("[data-telegram]", site.telegram, "Telegram");
  bindLink("[data-github]", site.github, "GitHub");
  bindLink("[data-leetcode]", site.leetcode, "LeetCode");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
})();
