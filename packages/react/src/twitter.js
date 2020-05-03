import React from 'react';
import { twitterButton } from '@socialshares/core';
import Button from './internal/Button';

export function TwitterButton(props) {
  return <Button button={twitterButton} {...props} />;
}
