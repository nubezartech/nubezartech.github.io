document.querySelector("#darkmode-button").onclick = function (e) {
  darkmode.toggleDarkMode();
};
document.querySelector("#darkmode-off-button").onclick = function (e) {
  darkmode.setDarkMode(false); // save=true is default
};
document.querySelector("#darkmode-on-button").onclick = function (e) {
  darkmode.setDarkMode(true); // save=true is default
};
document.querySelector("#darkmode-off-button-no-save").onclick = function (e) {
  darkmode.setDarkMode(false, false);
};
document.querySelector("#darkmode-on-button-no-save").onclick = function (e) {
  darkmode.setDarkMode(true, false);
};
document.querySelector("#darkmode-forget").onclick = function (e) {
  darkmode.resetDarkMode();
};
