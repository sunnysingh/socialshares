<p align="center">
  <a href="https://socialshar.es/">
    <img src="./assets/readme-logo.svg" alt="Socialshares" width="400" />
  </a>
</p>

<p align="center">
  <strong>Socialshares v3. Work in progress.</strong>
</p>

<p align="center">
  <a href="https://npm.im/socialshares"><img src="https://img.shields.io/npm/v/socialshares?style=for-the-badge" alt="npm" /></a>
  <img src="https://img.shields.io/bundlephobia/minzip/socialshares?style=for-the-badge" alt="npm bundle size" />
  <a href="https://twitter.com/sunnysinghio"><img src="https://img.shields.io/twitter/follow/sunnysinghio?color=blue&style=for-the-badge" alt="twitter follow" /></a>
</p>

## Usage

```html
<div id="socialshares"></div>

<script type="module">
  import socialshares, { twitterButton } from '//unpkg.com/socialshares';

  socialshares(document.getElementById('socialshares'), {
    buttons: [twitterButton()],
  });
</script>
```

## Development

1. `npm install`
1. `npm run dev`
1. `npm run demo`

## Distributing

1. `npm run build`
1. TODO...

## Credits

- Package bundled with [Microbundle](https://github.com/developit/microbundle)
- Icons from [Simple Icons](https://simpleicons.org/)
