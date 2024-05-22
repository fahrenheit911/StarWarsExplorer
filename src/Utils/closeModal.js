export const closeModal = (e, returnToMainPage) => {
  if (e.target.classList.contains('modal__wrapper')) returnToMainPage();
};
