import React from 'react';
import { pocketButton } from '@socialshares/core';
import Button from './internal/Button';

export function PocketButton(props) {
  return <Button button={pocketButton} {...props} />;
}
