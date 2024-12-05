// Theme Switcher
let darkMode = localStorage.getItem("darkMode");
const darkModeSwitcher = document.getElementById("dark-mode-switch");

const enabledarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
};

const disabledarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enabledarkMode();
  darkModeSwitcher.checked = true;
}

darkModeSwitcher.addEventListener("change", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enabledarkMode();
  } else {
    disabledarkMode();
  }
});
