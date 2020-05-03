import React from 'react';
import { redditButton } from '@socialshares/core';
import Button from './internal/Button';

export function RedditButton(props) {
  return <Button button={redditButton} {...props} />;
}
