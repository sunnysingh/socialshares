import React from 'react';
import { vkButton } from '@socialshares/core';
import Button from './internal/Button';

export function VkButton(props) {
  return <Button button={vkButton} {...props} />;
}
