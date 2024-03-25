import { getRandomArrayElement } from './utils.js';

const Color = {
  FIREBALLS: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ],
};

let faceColorRender = () => {
  let head = document.querySelector('.template');
  let leftEye = head.querySelector('.template__left-eye');
  let leftEyeInput = head.querySelector('[name="color-left-eye"]');
  let rightEye = head.querySelector('.template__right-eye');
  let rightEyeInput = head.querySelector('[name="color-right-eye"]');
  let nose = head.querySelector('.template__nose');
  let noseInput = head.querySelector('[name="color-nose"]');
  let mouth = head.querySelector('.template__mouth');
  let mouthInput = head.querySelector('[name="color-mouth"]');

  leftEye.addEventListener('click', (evt) => {
    let randomColor = getRandomArrayElement(Color.FIREBALLS);
    evt.target.style.backgroundColor = randomColor;
    leftEyeInput.value = randomColor;
  });

  rightEye.addEventListener('click', (evt) => {
    let randomColor = getRandomArrayElement(Color.FIREBALLS);
    evt.target.style.backgroundColor = randomColor;
    rightEyeInput.value = randomColor;
  });

  nose.addEventListener('click', (evt) => {
    let randomColor = getRandomArrayElement(Color.FIREBALLS);
    evt.target.style.backgroundColor = randomColor;
    noseInput.value = randomColor;
  });

  mouth.addEventListener('click', (evt) => {
    let randomColor = getRandomArrayElement(Color.FIREBALLS);
    evt.target.style.backgroundColor = randomColor;
    mouthInput.value = randomColor;
  });
}

export { faceColorRender };
