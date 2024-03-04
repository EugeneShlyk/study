let buttons = document.querySelectorAll('.button');
let circles = document.querySelectorAll('.circle');

let handleClick = (event) => {
  // console.log(parseInt(event.currentTarget.textContent));
  let numberButton = event.currentTarget.textContent;
  // console.log(numberButton);

  let isNecessary = circles.some((circle) =>
    1 === 1
    // circle.textContent = numberButton
    // console.log('подходит кнопка' + circle);
  );
  console.log(isNecessary);
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})





