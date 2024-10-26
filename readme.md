# CloakJS: Simplifying Tab Cloaking with JavaScript

CloakJS is a lightweight JavaScript library designed for easy tab cloaking.

## Demo

![Demo](https://github.com/Parcoil/cloak/blob/main/assets/demo.gif)

View a live demo at [](DEMO)

## Get Started

To start using CloakJS quickly use Jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/Parcoil/cloak@main/index.min.js"></script>
```

### Preparing Your Webpage

Before using CloakJS, ensure your webpage is properly configured:

Ensure you have a favicon set:

```html
<link rel="icon" type="image/x-icon" href="your-icon-here" />
```

Make sure your webpage has a title:

```html
<title>My cool games site</title>
```

### Configuring Cloaks

To configure cloaks on your page:

1. Create a `<select>` element with the data tag `data-cloak-select`:

```html
<select name="cloak" data-cloak-select>
  <option value="default">Default Cloak</option>
  <option value="poop">Poop Cloak</option>
  <option value="purple">Purple Cloak</option>
  <option value="sparkles">Sparkle Cloak</option>
</select>
```

2. Define your cloaks in a `<script>` tag on your settings page:

```html
<script>
  const cloaks = [
    { name: "default", icon: "./cloaks/default.ico", title: "Default Cloak" },
    { name: "poop", icon: "./cloaks/poop.ico", title: "Poop Cloak" },
    { name: "purple", icon: "./cloaks/purple.ico", title: "Purple Cloak" },
    { name: "sparkles", icon: "./cloaks/sparkles.ico", title: "Sparkle Cloak" },
  ];
</script>
```

## Using CloakJS APIs

You can use the following APIs with CloakJS:

- **getTitle()**: Get the current document title.

  Example:

  ```javascript
  const title = cloak.getTitle();
  console.log(title); // Outputs the current title of the document
  ```

- **setTitle(newTitle)**: Set a new document title.

  Example:

  ```javascript
  cloak.setTitle("New Title");
  ```

- **getFavicon()**: Get the current favicon URL.

  Example:

  ```javascript
  const favicon = cloak.getFavicon();
  console.log(favicon); // Outputs the current favicon URL
  ```

- **setFavicon(url)**: Set a new favicon URL.

  Example:

  ```javascript
  cloak.setFavicon("new-icon-url.ico");
  ```

- **setCloak(newTitle, url)**: Set both the document title and favicon, and store them in localStorage.

  Example:

  ```javascript
  cloak.setCloak("New Cloak Title", "new-cloak-icon-url.ico");
  ```

If you encounter any issues, feel free to create an issue on GitHub.
