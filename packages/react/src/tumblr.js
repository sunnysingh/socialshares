import React from 'react';
import { tumblrButton } from '@socialshares/core';
import Button from './internal/Button';

export function TumblrButton(props) {
  return <Button button={tumblrButton} {...props} />;
}
