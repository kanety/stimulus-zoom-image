# stimulus-zoom-image

A stimulus controller for zooming an image.

## Dependencies

* @hotwired/stimulus 3.0+

## Installation

Install from npm:

    $ npm install @kanety/stimulus-zoom-image --save

## Usage

Register controller:

```javascript
import { Application } from '@hotwired/stimulus';
import ZoomImageController from '@kanety/stimulus-zoom-image';

const application = Application.start();
application.register('zoom-image', ZoomImageController);
```

Build html as follows:

```html
<div data-controller="zoom-image">
  <img src="large_image.png" style="width: 100%;">
</div>
```

When your mouse is over the container, the image is zoomed in its original size.
If the original size of the image is smaller than the container, the image is not zoomed.

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
