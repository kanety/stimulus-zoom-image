global.$ = document.querySelector.bind(document);
global.$$ = document.querySelectorAll.bind(document);

import { Application } from '@hotwired/stimulus';
import ZoomImageController from 'index';

const application = Application.start();
application.register('zoom-image', ZoomImageController);

global.mockMouseEvent = (type, options = {}) => {
  let event = new MouseEvent(type, { bubbles: options.bubbles });
  Object.defineProperty(event, 'clientX', {
    get: () => options.clientX
  });
  Object.defineProperty(event, 'clientY', {
    get: () => options.clientY
  });
  return event;
}

global.mockImageNaturalSize = (element, width, height) => {
  Object.defineProperty(element, 'naturalWidth', {
    get: () => width
  });
  Object.defineProperty(element, 'naturalHeight', {
    get: () => height
  });
}

global.mockBoundingClientRect = (element, x, y, width, height) => {
  element.getBoundingClientRect = () => {
    return { left: x, top: y, width: width, height: height }
  };
}
