import React from 'react';
import { whatsappButton } from '@socialshares/core';
import Button from './internal/Button';

export function WhatsappButton(props) {
  return <Button button={whatsappButton} {...props} />;
}
