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
  document.getElementById(sectionId).style.display = "block";
}

function _closeSection(sectionId) {
  document.getElementById(sectionId).style.display = "none";
}
