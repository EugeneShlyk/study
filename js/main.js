import { modalJs } from './show-modal.js';

modalJs();

let head = document.querySelector('.template');
let eyes = head.querySelectorAll('.template__eye');

eyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    eye.style.backgroundColor = 'red';
  })
})
