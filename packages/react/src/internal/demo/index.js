import React from 'react';
import ReactDOM from 'react-dom';
import {
  ShareButtons,
  TwitterButton,
  FacebookButton,
} from '../../socialshares';

const mountElement = document.getElementById('shareButtons');

ReactDOM.render(
  <ShareButtons>
    <TwitterButton>Share on Twitter</TwitterButton>
    <FacebookButton>Share on Facebook</FacebookButton>
  </ShareButtons>,
  mountElement
);
