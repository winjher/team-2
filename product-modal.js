(() => {
    const refs = {
      openModalBtn: document.querySelector("[product-data-modal-open]"),
      openIceCoffeeModal: document.querySelector("[product-ice-coffee-data-modal-open]"),
      openMilkShakeModal: document.querySelector("[product-milk-shake-data-modal-open]"),
      closeModalBtn: document.querySelector("[product-data-modal-close]"),
      modal: document.querySelector("[product-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openIceCoffeeModal.addEventListener("click", toggleModal);
    refs.openMilkShakeModal.addEventListener("click",toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();