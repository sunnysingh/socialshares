import React from 'react';
import { pinterestButton } from '@socialshares/core';
import Button from './internal/Button';

export function PinterestButton(props) {
  return <Button button={pinterestButton} {...props} />;
}
