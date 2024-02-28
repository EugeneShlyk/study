let boxes = document.querySelectorAll('.box');
let circles = document.querySelectorAll('.circle');

circles[0].addEventListener('click', (evt) => {
  boxes[1].append(evt.cloneNode(true));
})







