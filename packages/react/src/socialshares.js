import React, { useRef, useEffect } from 'react';
import { renderShareButtons, twitterButton } from '@socialshares/core';

export function ShareButtons() {
  const mountElement = useRef(null);

  useEffect(
    () => renderShareButtons(mountElement.current, [twitterButton()]),
    []
  );

  return <div ref={mountElement} />;
}
