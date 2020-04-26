import { createStyle, hsl } from './utils/css';

const DEFAULT_COLOR = {
  hue: 0,
  saturation: 0,
  lightness: 0.38,
};

export const styles = {
  button: createStyle(
    'button',
    `
      display: flex;
      margin: 0;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      transition: background-color 200ms ease-in-out;
    `
  ),
  icon: createStyle(
    'icon',
    `
      display: inline-block;
      margin: 0;
      margin-right: 8px;
      padding: 0;
      width: 1em;
      height: 1em;
    `
  ),
  label: createStyle(
    'label',
    `
      display: inline-block;
      margin: 0;
      padding: 0;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-weight: normal;
      white-space: nowrap;
    `
  ),
};

const createCustomizedStyles = (id, { color }) => ({
  button: createStyle(
    `${id}_button`,
    `
      color: hsl(0, 0%, calc(${color.lightness * 100 - 60} * -100%));
      background-color: ${hsl(color)};
      border: 1px solid ${hsl({ ...color, lightness: color.lightness + 0.15 })};
    `,
    `
      &:hover,
      &:focus {
        background-color: ${hsl({
          ...color,
          lightness: color.lightness - 0.15,
        })};
        border: 1px solid ${hsl({
          ...color,
          lightness: color.lightness + 0.3,
        })};
        filter: none;
      }
    `
  ),
});

export default function button({ id, icon, label, color, popupUrl }) {
  const customizedStyles = createCustomizedStyles(id, {
    color: color || DEFAULT_COLOR,
  });

  return {
    styles: customizedStyles,
    html: `
      <button
        class="${styles.button} ${customizedStyles.button}"
        data-socialshares-popup-url="${popupUrl}"
      >
        <span class="${styles.icon}">${icon}</span>
        <span class="${styles.label}">${label}</span>
      </button>
    `,
  };
}
