> [!IMPORTANT]
> npm is not working at the moment
>
> >

# CloakJS: Simplifying Tab Cloaking with JavaScript

CloakJS is a lightweight JavaScript library designed for easy tab cloaking.

## Demo

![Demo](https://github.com/Parcoil/cloak/blob/main/assets/demo.gif)

## Get Started

To start using CloakJS quickly, install it via npm:

```bash
npm install @parcoil/cloak
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/@parcoil/cloak/cloak.js"></script>
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

1. Create a `<select>` element with the id `cloakSelect`:

```html
<select name="cloak" id="cloakSelect">
  <option value="default">Default Cloak</option>
  <option value="poop">Poop Cloak</option>
  <option value="purple">Purple Cloak</option>
  <option value="sparkles">Sparkle Cloak</option>
</select>
```

2. Define your cloaks in a `<script>` tag:

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

If you encounter any issues, feel free to create an issue on GitHub.
