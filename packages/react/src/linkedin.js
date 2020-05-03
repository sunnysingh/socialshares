import React from 'react';
import { linkedinButton } from '@socialshares/core';
import Button from './internal/Button';

export function LinkedinButton(props) {
  return <Button button={linkedinButton} {...props} />;
}
