const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-icon");
const modalOverlay = document.querySelector(".modal-overlay");

openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
