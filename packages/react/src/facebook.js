import React from 'react';
import { facebookButton } from '@socialshares/core';
import Button from './internal/Button';

export function FacebookButton(props) {
  return <Button button={facebookButton} {...props} />;
}
