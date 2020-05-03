import { objectToQueryParams } from './internal/utils/url';
import button from './internal/button';

export function instapaperButton(options = {}) {
  const defaultConfig = {
    label: 'Add to Instapaper',
    url: document.location.href,
    title: document.title,
    text: '',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instapaper icon</title><path d="M14.766 20.259c0 1.819.271 2.089 2.934 2.292V24H6.301v-1.449c2.666-.203 2.934-.473 2.934-2.292V3.708c0-1.784-.27-2.089-2.934-2.292V0h11.398v1.416c-2.662.203-2.934.506-2.934 2.292v16.551z" fill="currentColor" /></svg>`;

  return button({
    id: 'instapaper',
    icon,
    label: config.label,
    color: {
      hue: 0,
      saturation: 0,
      lightness: 0.12,
    },
    popupUrl: `http://www.instapaper.com/hello2${objectToQueryParams({
      url: config.url,
      title: config.title,
      description: config.text,
    })}`,
  });
}
