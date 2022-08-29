import { Controller } from '@hotwired/stimulus';
import '@kanety/stimulus-static-actions';

export default class extends Controller {
  static actions = [
    ['element', 'mouseenter->on'],
    ['element', 'mouseleave->off'],
    ['element', 'mousemove->move']
  ];

  get image() {
    return this.scope.findElement('img');
  }

  on(e) {
    if (!this.canZoom()) return;
    this.element.style.backgroundImage = `url("${this.image.src}")`;
    this.element.style.backgroundPosition = '0 0';
    this.element.style.backgroundRepeat = 'no-repeat';
    this.image.style.visibility = 'hidden';
  }

  off(e) {
    if (!this.canZoom()) return;
    this.element.style.backgroundImage = '';
    this.element.style.backgroundPosition = '';
    this.element.style.backgroundRepeat = '';
    this.image.style.visibility = '';
  }

  move(e) {
    if (!this.canZoom()) return;
    let rect = this.element.getBoundingClientRect();
    let x = (e.clientX - rect.left) / rect.width;
    let y = (e.clientY - rect.top) / rect.height;
    this.element.style.backgroundPosition = `${x*100}% ${y*100}%`;
  }

  canZoom() {
    let rect = this.element.getBoundingClientRect();
    return rect.width < this.image.naturalWidth || rect.height < this.image.naturalHeight;
  }
}
