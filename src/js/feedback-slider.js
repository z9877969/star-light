const sliderNavBtns = document.querySelector('.js-feedback-btns');
const list = document.querySelector('.js-feedback-list');

const scrollToNextActiveItem = direction => {
  const siblingPosition =
    direction === 'prev'
      ? 'previousElementSibling'
      : direction === 'next'
      ? 'nextElementSibling'
      : null;
  if (!siblingPosition) return null;
  const activeItem = list.querySelector('.js-active-feedback');
  if (direction === 'prev' && activeItem === list.children[0]) return;
  if (
    direction === 'next' &&
    activeItem === list.children[list.children.length - 1]
  )
    return;
  const nextActiveItem = activeItem[siblingPosition];
  activeItem.classList.toggle('js-active-feedback');
  nextActiveItem.classList.toggle('js-active-feedback');
  nextActiveItem.scrollIntoView({ inline: 'center', behavior: 'smooth' });
};

const handleBtnsNavClick = e => {
  if (document.body.clientWidth >= 1440) return;
  if (
    e.target.nodeName !== 'BUTTON' &&
    e.target.closest('.js-btn-nav')?.nodeName !== 'BUTTON'
  )
    return;
  const btnEl =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.closest('button');

  const { action } = btnEl.dataset;

  if (action === 'prev') {
    scrollToNextActiveItem(action);
  }
  if (action === 'next') {
    scrollToNextActiveItem(action);
  }
};

sliderNavBtns.addEventListener('click', handleBtnsNavClick);
