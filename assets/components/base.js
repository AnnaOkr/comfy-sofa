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


var slider = document.getElementById('slider')
var element = document-getElementById('result')
element.HTML = slider.value

slider.oninput = function() {
  element.HTML = this.value;
}
