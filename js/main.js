const button = document.querySelector('.header__button');
const buttonRemove = document.querySelector('.header__button--remove');
const output = document.querySelector('.header__p');

function handleButton1Click() {
  output.textContent = 'Путин - хуйло';

  button.removeEventListener('click', handleButton1Click);
  buttonRemove.addEventListener('click', handleButton1Click2);
}

function handleButton1Click2() {
  output.textContent = 'Путин - чёрт';

  buttonRemove.removeEventListener('click', handleButton1Click2);
  button.addEventListener('click', handleButton1Click)
}

button.addEventListener(
  'click',
  handleButton1Click
);






