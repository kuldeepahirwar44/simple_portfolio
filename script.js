const toggleThemeBtn = document.querySelector("#toggleTheme i");
const bodyEl = document.querySelector("body");


let isDarkThemeEnabled = false;

toggleThemeBtn.addEventListener("click", function(el) {
  if (isDarkThemeEnabled) {
    bodyEl.classList.remove("themeDefault-dark");
    bodyEl.classList.add("themeDefault-light");
    el.target.classList.add("bx-moon");
    el.target.classList.remove("bx-sun");
  } else {
    bodyEl.classList.add("themeDefault-dark");
    bodyEl.classList.remove("themeDefault-light");
    el.target.classList.remove("bx-moon");
    el.target.classList.add("bx-sun");
  }
  isDarkThemeEnabled = !isDarkThemeEnabled;
});

