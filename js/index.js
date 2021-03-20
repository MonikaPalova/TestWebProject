const REGISTER_PATH = "register.html";
const LOGIN_PATH = "login.html";
const INDEX_PATH = "index.html";

function welcomePress() {
  window.location = INDEX_PATH;
}

function registerPress() {
  window.location = REGISTER_PATH;
}

function loginPress() {
  window.location = LOGIN_PATH;
}

function _openSection(sectionId) {
  var display = document.getElementById(sectionId).style.display;
  if (display === "block") {
    _reloadSection(sectionId);
  } else {
    document.getElementById(sectionId).style.display = "block";
  }
}

function _reloadSection(sectionId) {
  var section = document.getElementById(sectionId);
  var content = section.innerHTML;
  section.innerHTML = content;
}

function _closeSection(sectionId) {
  document.getElementById(sectionId).style.display = "none";
}

function passwordToggle() {
  document.getElementById("toggle-password").onclick = function() {
    if (this.checked) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  };
}
