import { modalJs } from './show-modal.js';
import { faceColorRender } from './face.js';

let rangeSlider = document.querySelector('#range-slider');
let minInput = rangeSlider.querySelector('#range-input-min');
let maxInput = rangeSlider.querySelector('#range-input-max');

if ( rangeSlider ) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });

  rangeSlider.noUiSlider.on('update', function () {})
}

modalJs();
faceColorRender();


