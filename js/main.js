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


