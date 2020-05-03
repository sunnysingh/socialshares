import { objectToQueryParams } from './internal/utils/url';
import button from './internal/button';

export function facebookButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Facebook',
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
    popupUrl: `https://www.facebook.com/sharer/sharer.php${objectToQueryParams({
      u: config.url,
    })}`,
  });
}
