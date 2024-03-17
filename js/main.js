// import { handleOpenModal } from './show-modal';

const CIRCLE_COLOR = [
  'red',
  'blue',
  'yellow',
  'green',
  'Magenta',
  'Aquamarine',
];

let boxRender = document.querySelector('.box-render-circle');
// let template = document.querySelector('#template').content.querySelector('.template__inner');
let circles = document.querySelectorAll('.circle');

let renderRandomColor = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() *
    (
      upper - lower + 1
    ) +
    lower;

  return Math.floor(result);
};

let renderCircles = (event) => {
  boxRender.innerHTML = '';
  Array.from({ length: event.currentTarget.textContent }, func);
};

circles.forEach(circle => circle.addEventListener('click', renderCircles));

let func = () => {
  let clone = template.cloneNode(true);
  clone.style.backgroundColor = CIRCLE_COLOR[renderRandomColor(1, 5)];

  boxRender.append(clone);
};

let modalButton = document.querySelector('.open-modal');
let modal = document.querySelector('.modal');
let modalCloseButton = document.querySelector('.modal__close-button');

let handleEscapeKeydown = (evt) => {
  if ( evt.key === 'Escape' ) {
    evt.preventDefault();
    modal.classList.add('invisible');
    modalButton.classList.remove('invisible');

    modalButton.addEventListener('click', handleOpenModal);
    modalCloseButton.removeEventListener('click', handleCloseModal);
  }
}

let handleOpenModal = () => {
  modal.classList.remove('invisible');
  modalButton.classList.add('invisible');

  modalButton.removeEventListener('click', handleOpenModal);
  modalCloseButton.addEventListener('click', handleCloseModal);
  document.addEventListener('keydown', handleEscapeKeydown);
}

let handleCloseModal = () => {
  modal.classList.add('invisible');
  modalButton.classList.remove('invisible');

  modalButton.addEventListener('click', handleOpenModal);
  modalCloseButton.removeEventListener('click', handleCloseModal);
  document.removeEventListener(`keydown`, handleEscapeKeydown);
}

modalButton.addEventListener('click', handleOpenModal);


