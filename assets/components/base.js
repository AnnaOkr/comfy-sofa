/* globals jQuery, document */

// You will use that file to import all your scripts
// Ex: import gallery from './gallery'
import svgIcons from '../icons/svg-icons';

svgIcons(); // Must run as soon as possible

const init = () => {
  // Run your imported scripts
  // Ex: gallery();
};

(function ($) {
  $(document).ready(() => init());
})(jQuery);
document.addEventListener('ToolboxReady', () => init());

// const rangeSlider = document.querySelector('.range-slider');
// const rangeValueBar = document.querySelector('#range-value-bar');
// const rangeValue = document.querySelector('#range-value');

// let isDown = false;

// function dragHandler() {
//   isDown = !isDown;
//   if (!isDown) {
//     rangeValue.style.setProperty('opacity', '0');
//   } else {
//     rangeValue.style.setProperty('opacity', '1');
//   }
// }

// function dragOn(e) {
//   if (!isDown) return;
//   rangeValueHandler();
// }

// function rangeValueHandler() {
//   rangeValueBar.style.setProperty('width', `${rangeSlider.value}%`);
//   rangeValue.style.setProperty('transform', `translateX(-${this.value}%)`);
//   rangeValue.innerHTML = `${rangeSlider.value}%`;
//   rangeValue.style.setProperty('left', `${rangeSlider.value}%`);
// }

// rangeValueHandler();
// rangeSlider.addEventListener('mousedown', dragHandler);
// rangeSlider.addEventListener('mousemove', dragOn);
// rangeSlider.addEventListener('mouseup', dragHandler);
// rangeSlider.addEventListener('click', rangeValueHandler);
