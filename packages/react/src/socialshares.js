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

export { TwitterButton } from './twitter';
export { FacebookButton } from './facebook';
export { LinkedinButton } from './linkedin';
