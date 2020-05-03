import { objectToQueryParams } from './internal/utils/url';
import button from './internal/button';

export function emailButton(options = {}) {
  const defaultConfig = {
    label: 'Share via Email',
    url: document.location.href,
    title: document.title,
    text: 'Check this out',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;

  return button({
    id: 'email',
    icon,
    label: config.label,
    color: {
      hue: 7,
      saturation: 0.63,
      lightness: 0.52,
    },
    popupUrl: `mailto:${objectToQueryParams({
      subject: config.title,
      body: `${config.text}\n\n${config.url}`,
    })}`,
  });
}
