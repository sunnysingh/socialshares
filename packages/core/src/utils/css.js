const CSS_CLASS_PREFIX = '__socialshare';

export function createStyle(name, baseCss, ...otherCss) {
  const classname = `${CSS_CLASS_PREFIX}_${name}`;
  const selector = `.${classname}`;
  return {
    css: `
      ${selector}{${baseCss.trim()}}
      ${otherCss.map((css) => `${css.trim().replace(/&/g, selector)}`).join('')}
    `,
    toString: () => classname,
  };
}

export function renderStylesToString(styles) {
  return Object.entries(styles)
    .map(([, { css }]) => css)
    .join('');
}

export function injectStyles(stylesString) {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(stylesString));
  document.head.appendChild(styleElement);
}

export function hsl({ hue, saturation, lightness }) {
  return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%);`;
}
