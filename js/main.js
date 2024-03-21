import { modalJs } from './show-modal.js';
import { getRandomArrayElement } from './utils.js';

modalJs();

const Color = {
  FIREBALLS: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ],
};

let head = document.querySelector('.template');
let leftEye = head.querySelector('.template__left-eye');
let rightEye = head.querySelector('.template__right-eye');
let leftEyeInput = head.querySelector('[name = "color-left-eye"]');


leftEye.addEventListener('click', (evt) => {
  let randomColor = getRandomArrayElement(Color.FIREBALLS);
  evt.target.style.backgroundColor = randomColor;
  leftEyeInput.value = randomColor;
});

rightEye.addEventListener('click', (evt) => {
  let randomColor = getRandomArrayElement(Color.FIREBALLS);
  evt.target.style.backgroundColor = randomColor;
  leftEyeInput.value = randomColor;
});
