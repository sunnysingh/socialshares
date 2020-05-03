import {
  createStyle,
  renderStylesToString,
  injectStyles,
} from './internal/utils/css';
import { openPopup } from './internal/utils/popup';
import { isDomNode } from './internal/utils/dom';
import { invariant } from './internal/utils/error';
import {
  POPUP_URL_ATTRIBUTE,
  styles as baseButtonStyles,
} from './internal/button';

const VALID_DOM_ELEMENT_ERROR = 'element must be a valid DOM node';

const CONTAINER_ELEMENT_ATTRIBUTE = 'data-socialshares-element="container"';

const findContainer = (element) =>
  element.querySelector(`[${CONTAINER_ELEMENT_ATTRIBUTE}]`);

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

function createButtonHtml(html) {
  return `<div class="${styles.item}">${html}</div>`;
}

/**
 * Mount container to a DOM node
 *
 * @param {object} element DOM node
 *
 * @returns {function} Unmount container from DOM  node
 */
export function renderShareContainer(element) {
  invariant(isDomNode(element), VALID_DOM_ELEMENT_ERROR);

  const children = element.innerHTML;

  element.innerHTML = `
    <div
      class="${styles.container}"
      ${CONTAINER_ELEMENT_ATTRIBUTE}
    >${children}</div>
  `;

  const handleClick = (event) => {
    const url =
      event.target.getAttribute(POPUP_URL_ATTRIBUTE) ||
      event.target
        .closest(`[${POPUP_URL_ATTRIBUTE}]`)
        .getAttribute(POPUP_URL_ATTRIBUTE);

    if (!url) return;

    openPopup(url);
  };

  element.addEventListener('click', handleClick);

  const styleElement = injectStyles(renderStylesToString(styles));

  const unmount = () => {
    element.removeEventListener('click', handleClick);
    element.innerHTML = '';
    styleElement.parentElement.removeChild(styleElement);
  };

  return unmount;
}

/**
 * Mount multiple share buttons to a DOM node
 *
 * @param {object} element DOM node
 * @param {array} buttons Buttons
 *
 * @returns {function} Unmount buttons from DOM element
 */
export function renderShareButtons(element, buttons = []) {
  invariant(isDomNode(element), VALID_DOM_ELEMENT_ERROR);
  invariant(
    Array.isArray(buttons) && buttons.length !== 0,
    'buttons must be a non-zero length array'
  );

  let stylesString = '';
  let buttonsHtml = '';

  buttons.forEach(({ styles: buttonStyles, html }) => {
    stylesString += renderStylesToString(buttonStyles);
    buttonsHtml += createButtonHtml(html);
  });

  const unmountContainer = renderShareContainer(element);

  const styleElement = injectStyles(stylesString);

  findContainer(element).insertAdjacentHTML('beforeend', buttonsHtml);

  const unmount = () => {
    unmountContainer();
    styleElement.parentNode.removeChild(styleElement);
  };

  return unmount;
}

export { emailButton } from './email';
export { facebookButton } from './facebook';
export { instapaperButton } from './instapaper';
export { linkedinButton } from './linkedin';
export { pinterestButton } from './pinterest';
export { pocketButton } from './pocket';
export { redditButton } from './reddit';
export { telegramButton } from './telegram';
export { tumblrButton } from './tumblr';
export { twitterButton } from './twitter';
export { vkButton } from './vk';
export { whatsappButton } from './whatsapp';
export { workplaceButton } from './workplace';
