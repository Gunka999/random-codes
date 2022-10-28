export default function modal(modalSelector, modalCloseSelector, btnSelector) {
  const callElem = className => document.querySelector(className);
  const modal = callElem(modalSelector);
  const modalClose = callElem(modalCloseSelector);
  const btn = callElem(btnSelector);

  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  modalClose.addEventListener("click", () => {
    hideModal();
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      hideModal();
    }
  });

  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      hideModal();
    }
  });

  function hideModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}
