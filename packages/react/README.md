<p align="center">
  <a href="https://socialshar.es/">
    <img src="./assets/readme-react-logo.png" alt="Socialshares" />
  </a>
</p>

<p align="center">
  <strong>Socialshares v3. Work in progress.</strong>
</p>

<p align="center">
  <a href="https://npm.im/@socialshares/react">
    <img src="https://img.shields.io/npm/v/@socialshares/react?style=for-the-badge&color=%236862BA" alt="View npm package" />
  </a>
  <a href="https://github.com/sunnysingh/socialshares/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/@socialshares/core?color=6862BA&style=for-the-badge" alt="MIT License" />
  </a>
  <a href="https://twitter.com/sunnysinghio">
    <img src="https://img.shields.io/twitter/follow/sunnysinghio?style=for-the-badge&color=%236862BA" alt="Follow on Twitter" />
  </a>
</p>

## ⚡️ Quick start

You can install via [npm](https://www.npmjs.com/):

```sh
npm install @socialshares/react
```

Then import into your React project:

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
