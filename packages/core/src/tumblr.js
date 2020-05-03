import { objectToQueryParams } from './internal/utils/url';
import { createConfig } from './internal/utils/config';
import button from './internal/button';

export function tumblrButton(options = {}) {
  const config = createConfig(
    {
      label: 'Share on Tumblr',
      url: document.location.href,
      title: document.title,
      text: '',
      tags: [],
      postType: 'link',
    },
    options
  );

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tumblr icon</title><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z" fill="currentColor" /></svg>`;

  return button({
    id: 'tumblr',
    icon,
    label: config.label,
    color: {
      hue: 215,
      saturation: 0.27,
      lightness: 0.28,
    },
    popupUrl: `https://www.tumblr.com/widgets/share/tool${objectToQueryParams({
      canonicalUrl: config.url,
      title: config.title,
      caption: config.text,
      tags: config.tags.join(','),
      posttype: config.postType,
    })}`,
  });
}
