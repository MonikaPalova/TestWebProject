const REGISTER_SECTION_ID = "register-section";
const LOGIN_SECTION_ID = "login-section";
const INDEX_SECTION_ID = "index-section";

function welcomePress() {
  _openSection(INDEX_SECTION_ID);
  _closeSection(LOGIN_SECTION_ID);
  _closeSection(REGISTER_SECTION_ID);
}

function registerPress() {
  _openSection(REGISTER_SECTION_ID);
  _closeSection(LOGIN_SECTION_ID);
  _closeSection(INDEX_SECTION_ID);
}

function loginPress() {
  _openSection(LOGIN_SECTION_ID);
  _closeSection(REGISTER_SECTION_ID);
  _closeSection(INDEX_SECTION_ID);
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
