import React from 'react';
import { instapaperButton } from '@socialshares/core';
import Button from './internal/Button';

export function InstapaperButton(props) {
  return <Button button={instapaperButton} {...props} />;
}
