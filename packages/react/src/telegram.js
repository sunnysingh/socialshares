import React from 'react';
import { telegramButton } from '@socialshares/core';
import Button from './internal/Button';

export function TelegramButton(props) {
  return <Button button={telegramButton} {...props} />;
}
