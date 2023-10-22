(() => {
    const refs = {
      openModalBtn: document.querySelector("[product-data-modal-open]"),
      closeModalBtn: document.querySelector("[product-data-modal-close]"),
      modal: document.querySelector("[product-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();