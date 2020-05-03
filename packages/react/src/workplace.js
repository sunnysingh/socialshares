import React from 'react';
import { workplaceButton } from '@socialshares/core';
import Button from './internal/Button';

export function WorkplaceButton(props) {
  return <Button button={workplaceButton} {...props} />;
}
