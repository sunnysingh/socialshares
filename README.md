<p align="center">
  <a href="https://socialshar.es/">
    <img src="./assets/readme-logo.png" alt="Socialshares" />
  </a>
</p>

<p align="center">
  <strong>Socialshares v3. Work in progress.</strong>
</p>

<p align="center">
  <a href="https://npm.im/socialshares">
    <img src="https://img.shields.io/npm/v/socialshares?style=for-the-badge&color=%236862BA" alt="npm" />
  </a>
  <a href="https://bundlephobia.com/result?p=socialshares">
    <img src="https://img.shields.io/bundlephobia/minzip/socialshares?style=for-the-badge&color=%236862BA" alt="npm bundle size" />
  </a>
  <a href="https://twitter.com/sunnysinghio">
    <img src="https://img.shields.io/twitter/follow/sunnysinghio?style=for-the-badge&color=%236862BA" alt="twitter follow" />
  </a>
</p>

## ⚡️ Quick start

```html
<div id="shareButtons"></div>

<script type="module">
  import {
    renderShareButtons,
    twitterButton,
  } from '//unpkg.com/@socialshares/core?module';

  const mountElement = document.getElementById('shareButtons');

  renderShareButtons(mountElement, [twitterButton()]);
</script>
```

## 📦 Install

You can install via npm:

```sh
npm install @socialshares/core
```

Then import with a bundler like [Parcel](https://parceljs.org/) or [Webpack](https://webpack.js.org/):

```js
import { renderShareButtons, twitterButton } from '@socialshares/core';

const mountElement = document.getElementById('shareButtons');

renderShareButtons(mountElement, [twitterButton()]);
```

Make sure to add an empty element to your HTML:

```html
<div id="shareButtons"></div>
```

Done! You should see a Tweet button rendered.

Check out the [socialshares docs](https://socialshar.es/) for more.

## 💻 Development

1. Install dependencies: `npm run bootstrap`
1. Open core package: `cd packages/core`
1. Launch watcher and demo: `npm run dev`

## 🚀 Distributing

1. Log in to npm: `npm login`
1. Install dependencies: `npm run bootstrap`
1. Publish packages: `npm run publish`

If a package was unchanged but you need to force publish a version anyway, try:

```sh
npm run publish -- --force-publish
```

## 👥 Credits

- Monorepo managed with [Lerna](https://lerna.js.org/)
- Package bundled with [Microbundle](https://github.com/developit/microbundle)
- Icons from [Simple Icons](https://simpleicons.org/)
