import { createStyle, renderStylesToString, injectStyles } from './utils/css';
import button, { styles as baseButtonStyles } from './button';
import { openPopup } from './utils/popup';

const styles = {
  ...baseButtonStyles,
  container: createStyle(
    'container',
    `
      display: flex;
      margin-right: -8px;
    `
  ),
  item: createStyle(
    'item',
    `
      margin-right: 8px;
    `
  ),
};

export default function socialshares(element, options = {}) {
  const defaultConfig = {
    buttons: [],
  };
  const config = {
    ...defaultConfig,
    ...options,
  };

  let stylesString = renderStylesToString(styles);
  let buttonsHtml = '';

  config.buttons.forEach(({ styles: buttonStyles, html }) => {
    stylesString += renderStylesToString(buttonStyles);
    buttonsHtml += `<div class="${styles.item}">${html}</div>`;
  });

  element.innerHTML = `
    <div class="${styles.container}">
      ${buttonsHtml}
    </div>
  `;

  element.addEventListener('click', (event) => {
    const url =
      event.target.dataset.socialsharesPopupUrl ||
      event.target.closest('[data-socialshares-popup-url]').dataset
        .socialsharesPopupUrl;

    if (!url) return;

    openPopup(url);
  });

  injectStyles(stylesString);
}

export function twitter(options = {}) {
  const defaultConfig = {
    label: 'Tweet',
    url: document.location.href,
    text: document.title,
    via: '',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path fill="currentColor" d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>`;

  return button({
    id: 'twitter',
    icon,
    label: config.label,
    color: {
      hue: 203,
      saturation: 0.89,
      lightness: 0.53,
    },
    popupUrl: `https://twitter.com/share?url=${config.url}&text=${config.text}${
      config.via ? `&via=${config.via}` : ''
    }`,
  });
}

export function facebook(options = {}) {
  const defaultConfig = {
    label: 'Share',
    url: document.location.href,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path fill="currentColor" d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>`;

  return button({
    id: 'facebook',
    icon,
    label: config.label,
    color: {
      hue: 221,
      saturation: 0.44,
      lightness: 0.41,
    },
    popupUrl: `https://www.facebook.com/sharer/sharer.php?u=${config.url}`,
  });
}
