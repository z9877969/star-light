const modalQuestion = document.querySelector('.js-modal-question');

const openModalQuestion = e => {
  console.log(e.target);
  if (!e.target.classList.contains('js-open-question-modal')) return;

  modalQuestion.classList.toggle('is-open');
};

document.body.addEventListener('click', openModalQuestion);
modalQuestion.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  modalQuestion.classList.toggle('is-open');
});
