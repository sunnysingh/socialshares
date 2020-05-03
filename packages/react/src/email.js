import React from 'react';
import { emailButton } from '@socialshares/core';
import Button from './internal/Button';

export function EmailButton(props) {
  return <Button button={emailButton} {...props} />;
}
