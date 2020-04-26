import { createStyle, renderStylesToString, injectStyles } from './utils/css';
import { objectToQueryParams } from './utils/url';
import { openPopup } from './utils/popup';
import button, { styles as baseButtonStyles } from './button';

const styles = {
  ...baseButtonStyles,
  container: createStyle(
    'container',
    `
      display: flex;
      flex-wrap: wrap;
      margin-bottom: -8px;
      margin-right: -8px;
    `
  ),
  item: createStyle(
    'item',
    `
      margin-bottom: 8px;
      margin-right: 8px;
    `
  ),
};

/**
 * Mount share buttons to a DOM element
 *
 * @param {object} element DOM Node
 * @param {array} buttons Buttons
 *
 * @returns {function} Unmount share buttons from DOM element
 */
export function renderShareButtons(element, buttons = []) {
  let stylesString = renderStylesToString(styles);
  let buttonsHtml = '';

  if (buttons.length === 0) {
    console.warn('socialshares: zero buttons configured');
    return () => {};
  }

  buttons.forEach(({ styles: buttonStyles, html }) => {
    stylesString += renderStylesToString(buttonStyles);
    buttonsHtml += `<div class="${styles.item}">${html}</div>`;
  });

  element.innerHTML = `
    <div class="${styles.container}">
      ${buttonsHtml}
    </div>
  `;

  const handleClick = (event) => {
    const url =
      event.target.dataset.socialsharesPopupUrl ||
      event.target.closest('[data-socialshares-popup-url]').dataset
        .socialsharesPopupUrl;

    if (!url) return;

    openPopup(url);
  };

  element.addEventListener('click', handleClick);

  injectStyles(stylesString);

  const unmount = () => {
    element.removeEventListener('click', handleClick);
    element.innerHTML = '';
  };

  return unmount;
}

export function twitterButton(options = {}) {
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
    popupUrl: `https://twitter.com/share${objectToQueryParams({
      url: config.url,
      text: config.text,
      via: config.via,
    })}`,
  });
}

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

export function linkedinButton(options = {}) {
  const defaultConfig = {
    label: 'Share on LinkedIn',
    url: document.location.href,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  return button({
    id: 'linkedin',
    icon,
    label: config.label,
    color: {
      hue: 201,
      saturation: 1,
      lightness: 0.35,
    },
    popupUrl: `https://www.linkedin.com/shareArticle${objectToQueryParams({
      mini: true,
      url: config.url,
    })}`,
  });
}

export function vkButton(options = {}) {
  const defaultConfig = {
    label: 'Share on VK',
    url: document.location.href,
    title: document.title,
    text: '',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>VK icon</title><path fill="currentColor" d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>`;

  return button({
    id: 'vk',
    icon,
    label: config.label,
    color: {
      hue: 212,
      saturation: 0.5,
      lightness: 0.52,
    },
    popupUrl: `http://vk.com/share.php${objectToQueryParams({
      url: config.url,
      title: config.title,
      description: config.text,
    })}`,
  });
}

export function pinterestButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Pinterest',
    url: document.location.href,
    text: document.title,
    media: '',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest icon</title><path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>`;

  return button({
    id: 'pinterest',
    icon,
    label: config.label,
    color: {
      hue: 353,
      saturation: 0.92,
      lightness: 0.39,
    },
    popupUrl: `https://pinterest.com/pin/create/button/${objectToQueryParams({
      url: config.url,
      media: config.media,
      description: config.text,
    })}`,
  });
}

export function redditButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Reddit',
    url: document.location.href,
    title: document.title,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit icon</title><path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`;

  return button({
    id: 'reddit',
    icon,
    label: config.label,
    color: {
      hue: 353,
      saturation: 0.92,
      lightness: 0.39,
    },
    popupUrl: `https://www.reddit.com/submit${objectToQueryParams({
      url: config.url,
      title: config.title,
    })}`,
  });
}

export function tumblrButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Tumblr',
    url: document.location.href,
    title: document.title,
    text: '',
    tags: [],
    postType: 'link',
  };
  const config = { ...defaultConfig, ...options };

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

export function workplaceButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Workplace',
    url: document.location.href,
    text: document.title,
    hashtag: '',
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Workplace icon</title><path d="M12.725 0C11.114 0 9.55.317 8.078.943a11.892 11.892 0 00-3.793 2.573A11.986 11.986 0 00.79 12a11.986 11.986 0 003.496 8.484 11.892 11.892 0 003.793 2.573c1.472.626 3.042.943 4.652.943.867 0 1.718-.094 2.565-.28v-2.534a9.524 9.524 0 01-2.565.353 9.406 9.406 0 01-6.71-2.795A9.502 9.502 0 013.24 12a9.5 9.5 0 012.778-6.744 9.398 9.398 0 016.707-2.795c4.439 0 8.037 3.618 8.037 8.082 0 1.647-.49 3.181-1.332 4.459l-2.09-5.166c-.306-.755-.67-1.895-2.059-1.895-1.387 0-1.75 1.14-2.054 1.895l-1.922 4.771-2.578-6.544h-2.71l3.213 7.95c.326.807.68 1.897 2.077 1.897 1.395 0 1.747-1.09 2.072-1.896l1.904-4.727 1.914 4.727c.387.973.797 1.894 2.07 1.894.903 0 1.475-.583 1.788-.959a10.54 10.54 0 002.156-6.406C23.21 4.72 18.516 0 12.725 0Z" fill="currentColor" /></svg>`;

  return button({
    id: 'workplace',
    icon,
    label: config.label,
    color: {
      hue: 217,
      saturation: 0.17,
      lightness: 0.15,
    },
    popupUrl: `https://work.facebook.com/sharer.php${objectToQueryParams({
      u: config.url,
      quote: config.text,
      hashtag: config.hashtag,
    })}`,
  });
}

export function telegramButton(options = {}) {
  const defaultConfig = {
    label: 'Share on Telegram',
    url: document.location.href,
    text: document.title,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" fill="currentColor" /></svg>`;

  return button({
    id: 'telegram',
    icon,
    label: config.label,
    color: {
      hue: 200,
      saturation: 0.74,
      lightness: 0.53,
    },
    popupUrl: `https://telegram.me/share/${objectToQueryParams({
      url: config.url,
      text: config.text,
    })}`,
  });
}

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

export function whatsappButton(options = {}) {
  const defaultConfig = {
    label: 'Share on WhatsApp',
    url: document.location.href,
    title: document.title,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor" /></svg>`;

  return button({
    id: 'whatsapp',
    icon,
    label: config.label,
    color: {
      hue: 142,
      saturation: 0.7,
      lightness: 0.49,
    },
    popupUrl: `https://api.whatsapp.com/send${objectToQueryParams({
      text: `${config.title}: ${config.url}`,
    })}`,
  });
}

export function pocketButton(options = {}) {
  const defaultConfig = {
    label: 'Add to Pocket',
    url: document.location.href,
    title: document.title,
  };
  const config = { ...defaultConfig, ...options };

  const icon = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pocket icon</title><path d="M18.813 10.259l-5.646 5.419c-.32.305-.73.458-1.141.458-.41 0-.821-.153-1.141-.458l-5.646-5.419c-.657-.628-.677-1.671-.049-2.326.63-.657 1.671-.679 2.325-.05l4.511 4.322 4.517-4.322c.66-.631 1.697-.607 2.326.049.631.645.615 1.695-.045 2.326l-.011.001zm5.083-7.546c-.299-.858-1.125-1.436-2.041-1.436H2.179c-.9 0-1.717.564-2.037 1.405-.094.25-.142.511-.142.774v7.245l.084 1.441c.348 3.277 2.047 6.142 4.682 8.139.045.036.094.07.143.105l.03.023c1.411 1.03 2.989 1.728 4.694 2.072.786.158 1.591.24 2.389.24.739 0 1.481-.067 2.209-.204.088-.029.176-.045.264-.06.023 0 .049-.015.074-.029 1.633-.36 3.148-1.036 4.508-2.025l.029-.031.135-.105c2.627-1.995 4.324-4.862 4.686-8.148L24 10.678V3.445c0-.251-.031-.5-.121-.742l.017.01z" fill="currentColor" /></svg>`;

  return button({
    id: 'pocket',
    icon,
    label: config.label,
    color: {
      hue: 352,
      saturation: 0.85,
      lightness: 0.59,
    },
    popupUrl: `https://getpocket.com/save${objectToQueryParams({
      url: config.url,
      title: config.title,
    })}`,
  });
}

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
