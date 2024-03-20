import { modalJs } from './show-modal.js';

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
let eyes = head.querySelectorAll('.template__eye');

eyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    eye.style.backgroundColor = 'red';
  })
})
