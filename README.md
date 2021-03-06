<p align="center">
  <a href="https://socialshar.es/">
    <img src="./assets/readme-logo.png" alt="Socialshares" />
  </a>
</p>

<p align="center">
  <strong>Socialshares v3. Work in progress.</strong>
</p>

<p align="center">
  <a href="https://npm.im/@socialshares/core">
    <img src="https://img.shields.io/npm/v/@socialshares/core?style=for-the-badge&color=%236862BA" alt="View npm package" />
  </a>
  <a href="https://github.com/sunnysingh/socialshares/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/@socialshares/core?color=6862BA&style=for-the-badge" alt="MIT License" />
  </a>
  <a href="https://twitter.com/sunnysinghio">
    <img src="https://img.shields.io/twitter/follow/sunnysinghio?style=for-the-badge&color=%236862BA" alt="Follow on Twitter" />
  </a>
</p>

## ⚡️ Quick start

```html
<div id="shareButtons"></div>

<script type="module">
  import {
    renderShareButtons,
    twitterButton,
    facebookButton,
  } from '//unpkg.com/@socialshares/core?module';

  const mountElement = document.getElementById('shareButtons');

  renderShareButtons(mountElement, [twitterButton(), facebookButton()]);
</script>
```

## 📦 Install

You can install via [npm](https://www.npmjs.com/):

```sh
npm install @socialshares/core
```

Then import with a bundler like [Parcel](https://parceljs.org/) or [Webpack](https://webpack.js.org/):

```js
import {
  renderShareButtons,
  twitterButton,
  facebookButton,
} from '@socialshares/core';

const mountElement = document.getElementById('shareButtons');

renderShareButtons(mountElement, [twitterButton(), facebookButton()]);
```

Make sure to add an empty element to your HTML:

```html
<div id="shareButtons"></div>
```

Done! You should see a Tweet button and Facebook button rendered.

Check out the [socialshares docs](https://socialshar.es/) for more.

## 🔌 Integrations

Socialshares works well with React and provides the [@socialshares/react](https://npm.im/@socialshares/react) package for a seamless integration.

---

## 💻 Development

1. Install dependencies: `npm install`
1. Bootstrap packages: `npm run bootstrap`
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
- Demos styled with [MVP.css](https://andybrewer.github.io/mvp/) and [Prism](https://prismjs.com/)
