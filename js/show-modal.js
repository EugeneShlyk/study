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
    document.addEventListener('keydown', onDocumentEscapeKeydown);
    modalOpenButton.removeEventListener('keydown', onModalOpenButtonEnterKeydown);
  }

  let closeModal = () => {
    modal.classList.add('invisible');
    modalOpenButton.classList.remove('invisible');
    modalOpenButton.addEventListener('click', openModal);
    modalCloseButton.removeEventListener('click', closeModal);
    document.removeEventListener(`keydown`, onDocumentEscapeKeydown);
    modalOpenButton.addEventListener('keydown', onModalOpenButtonEnterKeydown);
  }

  let onDocumentEscapeKeydown = (evt) => {
    if ( isEscapeKey(evt) ) {
      evt.preventDefault();
      closeModal();
    }
  }

  let onModalOpenButtonEnterKeydown = (evt) => {
    if ( isEnterKey(evt) ) {
      evt.preventDefault();
      openModal();
    }
  }

  modalOpenButton.addEventListener('click', openModal);
  modalOpenButton.addEventListener('keydown', onModalOpenButtonEnterKeydown);
}

export { modalJs };


