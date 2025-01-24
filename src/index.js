const logo = "\x1b[91m[Parcoil Cloak]\x1b[0m";

const cloak = {
  getFavicon() {
    const icons = document.querySelectorAll('link[rel="icon"]');
    return icons.length > 0 ? icons[0].href : null;
  },
  setFavicon(url) {
    const icons = document.querySelectorAll('link[rel="icon"]');
    icons.forEach((icon) => (icon.href = url));
    localStorage.setItem("cloakFavicon", url);
  },
  getTitle() {
    return document.title;
  },
  setTitle(newTitle) {
    document.title = newTitle;
    localStorage.setItem("cloakTitle", newTitle);
  },
  setCloak(newTitle, url) {
    this.setTitle(newTitle);
    this.setFavicon(url);
  },
  init() {
    console.warn(
      logo,
      "cloak.init() has been deprecated. theres no need to call it anymore."
    );
  },
  reset(reload = true) {
    localStorage.removeItem("cloakTitle");
    localStorage.removeItem("cloakFavicon");
    console.log(
      logo,
      "Cloak reset. Title and favicon will remain unset until needed."
    );
    if (reload === true) {
      window.location.reload();
    }
  },
};

window.cloak = cloak;

document.addEventListener("DOMContentLoaded", () => {
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

  const savedTitle = localStorage.getItem("cloakTitle");
  const savedFavicon = localStorage.getItem("cloakFavicon");
  if (savedTitle && savedFavicon) {
    cloak.setTitle(savedTitle);
    cloak.setFavicon(savedFavicon);
  }
});
