import '@testing-library/jest-dom';

window.matchMedia = require('match-media-mock').create();
window.matchMedia.setConfig({ type: 'screen', width: 1024 });
