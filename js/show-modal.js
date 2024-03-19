import { isEscapeKey, isEnterKey } from './utils.js';

let modalJs = () => {
  let modalOpenButton = document.querySelector('.open-modal');
  let modal = document.querySelector('.modal');
  let modalCloseButton = document.querySelector('.modal__close-button');

  let openModal = () => {
    modal.classList.remove('invisible');
    modalOpenButton.classList.add('invisible');

    modalOpenButton.removeEventListener('click', openModal);
    modalCloseButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscapeKeydown);
    modalOpenButton.removeEventListener('keydown', handleEnterKeydown);
  }

  let closeModal = () => {
    modal.classList.add('invisible');
    modalOpenButton.classList.remove('invisible');

    modalOpenButton.addEventListener('click', openModal);
    modalCloseButton.removeEventListener('click', closeModal);
    document.removeEventListener(`keydown`, handleEscapeKeydown);
    modalOpenButton.addEventListener('keydown', handleEnterKeydown);
  }

  let handleEscapeKeydown = (evt) => {
    if ( isEscapeKey(evt) ) {
      evt.preventDefault();
      closeModal();
    }
  }

  let handleEnterKeydown = (evt) => {
    if ( isEnterKey(evt) ) {
      evt.preventDefault();
      openModal();
    }
  }

  modalOpenButton.addEventListener('click', openModal);
  modalOpenButton.addEventListener('keydown', handleEnterKeydown);
}

export { modalJs };


