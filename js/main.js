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

  function normalizeUrl(url) {
    if (!url) return "";
    if (url.charAt(0) === "@") return "https://t.me/" + url.slice(1);
    if (/^https?:\/\//i.test(url)) return url;
    if (/^t\.me\//i.test(url)) return "https://" + url;
    return url;
  }

  function bindLink(attr, url, fallbackText, external) {
    var el = document.querySelector(attr);
    if (!el || !url) return;
    el.href = normalizeUrl(url);
    el.hidden = false;
    if (fallbackText) el.textContent = fallbackText;
    if (external) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  }

  bindLink("[data-telegram]", site.telegram, "Telegram", true);
  bindLink("[data-github]", site.github, "GitHub", true);
  bindLink("[data-leetcode]", site.leetcode, "LeetCode", true);

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
