const cloakText = document.getElementById("cloakText");
const favicon = cloak.getFavicon();

function updateText() {
  const title = cloak.getTitle();
  cloakText.textContent += title;
  console.log(title);
}
updateText();
window.onload = function () {};
