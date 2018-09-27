import { configure, addDecorator } from '@storybook/react';
import '../src/index.css';

import { withKnobs } from '@storybook/addon-knobs/react';
addDecorator( withKnobs );

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
