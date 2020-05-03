import React from 'react';
import ReactDOM from 'react-dom';
import {
  ShareButtons,
  TwitterButton,
  FacebookButton,
  LinkedinButton,
} from '../../socialshares';

const mountElement = document.getElementById('shareButtons');

ReactDOM.render(
  <ShareButtons>
    <TwitterButton />
    <FacebookButton />
    <LinkedinButton />
  </ShareButtons>,
  mountElement
);
