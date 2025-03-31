(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    closeModalBtn2: document.querySelector('[data-menu-close2]'),
    closeModalBtn3: document.querySelector('[data-menu-close3]'),
    closeModalBtn4: document.querySelector('[data-menu-close4]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn4.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();