const cloakText = document.getElementById("cloakText");

const favicon = cloak.getFavicon();

function updateCloakInfo() {
  const title = cloak.getTitle();
  const icon = cloak.getFavicon();

  const faviconImage = document.getElementById("favicon");
  if (faviconImage) {
    faviconImage.src = icon;
  }

  if (cloakText) {
    cloakText.textContent = `The cloak is set to: ${title}`;
  }

  document.querySelector("h1").textContent = title;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCloakInfo();
});

window.addEventListener("storage", (event) => {
  if (event.key === "cloakTitle" || event.key === "cloakFavicon") {
    updateCloakInfo();
  }
});
