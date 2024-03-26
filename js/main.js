import { modalJs } from './show-modal.js';
import { faceColorRender } from './face.js';

let rangeSlider = document.querySelector('#range-slider');
let minInput = document.querySelector('#range-input-min');
let maxInput = document.querySelector('#range-input-max');
let inputs = [minInput, maxInput];



modalJs();
faceColorRender();

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

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  let setRangeSlider = (index, value) => {
    let array = [null, null];
    array[index] = value;

    console.log(array);
  }

  inputs.forEach((item, index) => {
    item.addEventListener('change', (evt) => {
      console.log(index);
      setRangeSlider(index, evt.currentTarget.value)
    });
  });
}
