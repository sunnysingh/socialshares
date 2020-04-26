<p align="center">

  <img src="./assets/readme-logo.svg" alt="Socialshares" width="320" />

</p>

<p align="center"><i>Socialshares v3. Work in progress.</i></p>

---

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
