const logo = "\x1b[91m[Parcoil Cloak]\x1b[0m";

const cloak = {
  getFavicon() {
    const icons = document.querySelectorAll('link[rel="icon"]');
    return icons.length > 0 ? icons[0].href : null;
  },
  setFavicon(url) {
    const icons = document.querySelectorAll('link[rel="icon"]');
    icons.forEach((icon) => (icon.href = url));
  },
  getTitle() {
    return document.title;
  },
  setTitle(newTitle) {
    document.title = newTitle;
  },
  setCloak(newTitle, url) {
    this.setTitle(newTitle);
    this.setFavicon(url);
    localStorage.setItem("cloakTitle", newTitle);
    localStorage.setItem("cloakFavicon", url);
  },
  init() {
    let cloakTitle = localStorage.getItem("cloakTitle");
    let cloakFavicon = localStorage.getItem("cloakFavicon");

    if (!cloakTitle || !cloakFavicon) {
      console.log(logo, "Initializing cloak settings...");
      const newTitle = this.getTitle();
      const newFavicon = this.getFavicon();
      if (!cloakTitle) {
        localStorage.setItem("cloakTitle", newTitle);
      }
      if (!cloakFavicon && newFavicon) {
        localStorage.setItem("cloakFavicon", newFavicon);
      }
      cloakTitle = localStorage.getItem("cloakTitle");
      cloakFavicon = localStorage.getItem("cloakFavicon");
    }

    this.setCloak(cloakTitle, cloakFavicon);
  },
};

window.cloak = cloak;

document.addEventListener("DOMContentLoaded", () => {
  let savedTitle = localStorage.getItem("cloakTitle");
  let savedFavicon = localStorage.getItem("cloakFavicon");

  cloak.setFavicon(savedFavicon);
  cloak.setTitle(savedTitle);

  const cloakSelect = document.querySelector("[data-cloak-select]");

  if (cloakSelect) {
    cloakSelect.addEventListener("change", () => {
      const selectedCloakName = cloakSelect.value;
      const selectedCloak = cloaks.find(
        (cloak) => cloak.name === selectedCloakName
      );

      if (selectedCloak) {
        cloak.setCloak(selectedCloak.title, selectedCloak.icon);
        console.log(logo, `Set cloak to: ${selectedCloak.title}`);
      } else {
        console.error(
          `Cloak '${selectedCloakName}' not found in cloaks array.`
        );
      }
    });
  }
});

cloak.init();
