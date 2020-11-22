import { makesTrendingMkp } from './addTrendsMkp';
import refs from './pagination-btns-refs';

let page = 1;

refs.previousBtn.addEventListener('click', onClickPreviousBtn);
refs.nextBtn.addEventListener('click', onClickNextBtn);
refs.firstBtn.addEventListener('click', onClickFirstBtn);
refs.secondBtn.addEventListener('click', onClickSecondBtn);
refs.thirdBtn.addEventListener('click', onClickThirdBtn);
refs.fourthBtn.addEventListener('click', onClickFourthBtn);
refs.fifthBtn.addEventListener('click', onClickFifthBtn);
refs.sixthBtn.addEventListener('click', onClickSixthBtn);
refs.seventhBtn.addEventListener('click', onClickSeventhBtn);
refs.eighthBtn.addEventListener('click', onClickEighthBtn);
refs.lastBtn.addEventListener('click', onClickLastBtn);

function scrollMovies() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function renderPagination(e, btnRef) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtn.classList.remove('current-page');
  page = btnRef.textContent;
  makesTrendingMkp(page);

  if (refs.secondBtn.textContent !== '...') {
    btnRef.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  } else {
    refs.fifthBtn.textContent = btnRef.textContent;
    refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
    refs.thirdBtn.textContent = Number(refs.fifthBtn.textContent) - 2;
    refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.fifthBtn.textContent) + 2;

    refs.fifthBtn.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  }
  if (refs.thirdBtn.textContent == 3) {
    refs.secondBtn.textContent = 2;
  }
}

function onClickNextBtn(e) {
  e.preventDefault();

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtn:
      onClickSecondBtn();
      break;

    case refs.secondBtn:
      onClickThirdBtn();
      break;

    case refs.thirdBtn:
      onClickFourthBtn();
      break;

    case refs.fourthBtn:
      onClickFifthBtn();
      break;

    case refs.fifthBtn:
      onClickSixthBtn();
      break;

    case refs.sixthBtn:
      onClickSeventhBtn();
      break;

    case refs.seventhBtn:
      onClickEighthBtn();
      break;

    case refs.eighthBtn:
      onClickLastBtn();
      break;
  }
  scrollMovies();
}

function onClickLastBtn(e) {
  e.preventDefault();
  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }
  page = refs.lastBtn.textContent;
  makesTrendingMkp(page);
  refs.lastBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.lastBtn;
  refs.eighthBtn.textContent = page - 1;
  refs.seventhBtn.textContent = page - 2;
  refs.sixthBtn.textContent = page - 3;
  refs.fifthBtn.textContent = page - 4;
  refs.fourthBtn.textContent = page - 5;
  refs.thirdBtn.textContent = page - 6;
  refs.secondBtn.textContent = '...';
  scrollMovies();
}

function onClickPreviousBtn(e) {
  e.preventDefault();
  if (page > 1) {
    page = Number(page) - 1;
  }

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtn:
      break;

    case refs.secondBtn:
      onClickFirstBtn();

      break;

    case refs.thirdBtn:
      onClickSecondBtn();
      break;

    case refs.fourthBtn:
      onClickThirdBtn();
      break;

    case refs.fifthBtn:
      onClickFourthBtn();
      break;

    case refs.sixthBtn:
      onClickFifthBtn();
      break;

    case refs.seventhBtn:
      onClickSixthBtn();
      break;

    case refs.eighthBtn:
      onClickSeventhBtn();
      break;
  }
  scrollMovies();
}

export function onClickFirstBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }

  refs.fifthBtn.classList.remove('current-page');

  page = 1;

  makesTrendingMkp(page);
  refs.firstBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.firstBtn;
  refs.secondBtn.textContent = page + 1;
  refs.thirdBtn.textContent = page + 2;
  refs.fourthBtn.textContent = page + 3;
  refs.fifthBtn.textContent = page + 4;
  refs.sixthBtn.textContent = page + 5;
  refs.seventhBtn.textContent = page + 6;
  refs.eighthBtn.textContent = '...';
  addDotes();
  scrollMovies();
}

export function onClickSecondBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.secondBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = refs.secondBtn.textContent;
    makesTrendingMkp(page);
    refs.secondBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.secondBtn;
  }
  addDotes();
  scrollMovies();
}

export function onClickThirdBtn(e) {
  renderPagination(e, refs.thirdBtn);
  addDotes();
  scrollMovies();
}

export function onClickFourthBtn(e) {
  renderPagination(e, refs.fourthBtn);
  addDotes();
  scrollMovies();
}

export function onClickFifthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;
  addDotes();
  scrollMovies();
}

export function onClickSixthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  renderPaginationRight(refs.sixthBtn);

  fromLeftEnd(refs.sixthBtn);
  addDotes();
  scrollMovies();
}

export function onClickSeventhBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  renderPaginationRight(refs.seventhBtn);

  fromLeftEnd(refs.seventhBtn);

  scrollMovies();
}

export function onClickEighthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  fromLeftEnd(refs.eighthBtn);
  scrollMovies();
}

function fromLeftEnd(pageRef) {
  if (refs.eighthBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = pageRef.textContent;
    makesTrendingMkp(page);
    pageRef.classList.add('current-page');
    refs.previousActiveBtn = pageRef;
  }
}

function renderPaginationRight(currentRef) {
  if (refs.eighthBtn.textContent === '...') {
    refs.previousActiveBtn.classList.remove('current-page');
    refs.fifthBtn.textContent = Number(currentRef.textContent);
    refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
    refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
    refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
    refs.secondBtn.textContent = '...';
    page = refs.fifthBtn.textContent;
    makesTrendingMkp(page);
    refs.fifthBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.fifthBtn;
  }
}

function addDotes() {
  if (
    Number(refs.lastBtn.textContent) - 2 >
    Number(refs.seventhBtn.textContent)
  ) {
    refs.eighthBtn.textContent = '...';
  } else {
    refs.eighthBtn.textContent = Number(refs.lastBtn.textContent) - 1;
  }
}
