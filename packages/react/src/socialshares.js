import React, { useRef, useEffect } from 'react';
import { renderShareButtons } from '@socialshares/core';
import { normalizeProps } from './internal/utils/props';

export function ShareButtons({ children }) {
  const mountElement = useRef(null);

  const buttons = React.Children.map(children, (child) =>
    child.type().props.button(normalizeProps(child.props))
  );

  useEffect(() => renderShareButtons(mountElement.current, buttons));

  return <div ref={mountElement} />;
}

export { EmailButton } from './email';
export { FacebookButton } from './facebook';
export { InstapaperButton } from './instapaper';
export { LinkedinButton } from './linkedin';
export { PinterestButton } from './pinterest';
export { PocketButton } from './pocket';
export { RedditButton } from './reddit';
export { TelegramButton } from './telegram';
export { TumblrButton } from './tumblr';
export { TwitterButton } from './twitter';
export { VkButton } from './vk';
export { WhatsappButton } from './whatsapp';
export { WorkplaceButton } from './workplace';
