<p align="center">
  <a href="https://socialshar.es/">
    <img src="./assets/readme-logo.png" alt="Socialshares" />
  </a>
</p>

<p align="center">
  <strong>Socialshares v3. Work in progress.</strong>
</p>

<p align="center">
  <a href="https://npm.im/@socialshares/react">
    <img src="https://img.shields.io/npm/v/@socialshares/react?style=for-the-badge&color=%236862BA" alt="npm" />
  </a>
  <a href="https://bundlephobia.com/result?p=@socialshares/react">
    <img src="https://img.shields.io/bundlephobia/minzip/@socialshares/react?style=for-the-badge&color=%236862BA" alt="npm bundle size" />
  </a>
  <a href="https://twitter.com/sunnysinghio">
    <img src="https://img.shields.io/twitter/follow/sunnysinghio?style=for-the-badge&color=%236862BA" alt="twitter follow" />
  </a>
</p>

## ⚡️ Quick start

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ShareButtons,
  TwitterButton,
  FacebookButton,
} from '../../socialshares';

const mountElement = document.getElementById('shareButtons');

ReactDOM.render(
  <ShareButtons>
    <TwitterButton />
    <FacebookButton />
  </ShareButtons>,
  mountElement
);
```

## 📦 Install

You can install via npm:

```sh
npm install @socialshares/react
```

Then import with a bundler like [Parcel](https://parceljs.org/) or [Webpack](https://webpack.js.org/):

```js
import {
  ShareButton,
  TwitterButton,
  FacebookButton,
} from '@socialshares/react';

export default function App() {
  return (
    <ShareButtons>
      <TwitterButton />
      <FacebookButton />
    </ShareButtons>
  );
}
```

Done! You should see a Tweet button and Facebook button rendered.

Check out the [socialshares docs](https://socialshar.es/) for more.
