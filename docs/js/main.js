import {
  createMultipleChoice,
  createSelect,
  createDragAndDrop,
  createMultipleUniqueAnswers,
  createMultipleAnswers,
  createFalseAndTrue,
  createDragAndDropImages,
  createAccordionSelect,
} from '../../src/js/e-learning-js';

const jsConf = document.querySelector('.js-conf');

const menuContent = `
  <li><a href="p01.html" target="_self">Table of contents</a></li>
  <li><a href="p02.html" target="_self">1. Multiple choice</a></li>
  <li><a href="p03.html" target="_self">2. Select</a></li>
  <li><a href="p04.html" target="_self">3. Drag and drop</a></li>
  <li><a href="p05.html" target="_self">4. Multiple unique answer</a></li>
  <li><a href="p06.html" target="_self">5. Multiples answers</a></li>
  <li><a href="p07.html" target="_self">6. False and True</a></li>
  <li><a href="p08.html" target="_self">7. Drag and drop images</a></li>
  <li><a href="p09.html" target="_self">8. Accordion select</a></li>
`;

const totalPages = 9;
const currentPage = parseInt(jsConf.getAttribute('data-current-page'), 10);
const menuContainer = document.querySelector('.js-menu');
const prevBtn = document.querySelectorAll('.js-prev-btn');
const nextBtn = document.querySelectorAll('.js-next-btn');
const currentPageContainer = document.querySelectorAll('.js-current-page');
const totalPagesContainer = document.querySelectorAll('.js-total-pages');

// Go to previos and next page
function goPrev(pageNumber) {
  let newLink = '';
  if (pageNumber > 1) {
    const tempPage = pageNumber - 1;
    if (tempPage <= 9) {
      newLink = `p0${tempPage}.html`;
    } else {
      newLink = `p${tempPage}.html`;
    }
  } else {
    newLink = '../index.html';
  }
  window.location.href = newLink;
}

function goNext(pageNumber) {
  let newLink = '';
  if (pageNumber < totalPages) {
    const tempPage = pageNumber + 1;
    if (tempPage <= 9) {
      newLink = `p0${tempPage}.html`;
    } else {
      newLink = `p${tempPage}.html`;
    }

    window.location.href = newLink;
  }
}

// Menu
menuContainer.innerHTML = menuContent;

currentPageContainer.forEach((el) => {
  const elRef = el;
  elRef.innerHTML = currentPage;
});

totalPagesContainer.forEach((el) => {
  const elRef = el;
  elRef.innerHTML = totalPages;
});

prevBtn.forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    goPrev(currentPage);
  });
});

nextBtn.forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    goNext(currentPage);
  });
});

// Page 2 activity 1
if (document.querySelector('.questions_2_1') !== null) {
  createMultipleChoice({
    questionsHtml: '.questions_2_1',
    checkButton: '#check_answers_2_1',
    resetButton: '#reset_answers_2_1',
    answerButton: '#answers_2_1',
    answers: [
      ['father\'s', 'father´s', 'father'],
      ['sisters', 'option_1', 'option_2'],
      ['husband', 'option_1', 'option_2'],
      ['wife', 'option_2'],
      ['children', 'option_2'],
      ['husband', 'option_2'],
    ],
  });
}

// Page 3 activity 1
if (document.querySelector('.questions_3_1') !== null) {
  createSelect({
    questionsHtml: '.questions_3_1',
    checkButton: '#check_answers_3_1',
    resetButton: '#reset_answers_3_1',
    answerButton: '#answers_3_1',
    answers: [3, 4, 2, 3, 2, 1, 3, 1, 4, 2],
  });
}

// Page 4 activity 1
if (document.querySelector('.answer_options_4_1') !== null) {
  createDragAndDrop({
    optionsHtml: '.answer_options_4_1',
    questionsHtml: '.answers_place_4_1',
    checkButton: '#check_answers_4_1',
    resetButton: '#reset_answers_4_1',
    answerButton: '#answers_4_1',
    answers: [2, 1, 3, 4, 5, 6, 7],
  });
}

// Page 5 activity 1
if (document.querySelector('.questions_5_1') !== null) {
  createMultipleUniqueAnswers({
    questionsHtml: '.questions_5_1',
    checkButton: '#check_answers_5_1',
    resetButton: '#reset_answers_5_1',
    answerButton: '#answers_5_1',
    answers: [1, 2, 4],
  });
}

if (document.querySelector('.questions_6_1') !== null) {
  createMultipleAnswers({
    questionsHtml: '.questions_6_1',
    checkButton: '#check_answers_6_1',
    resetButton: '#reset_answers_6_1',
    answerButton: '#answers_6_1',
    answers: [
      [1, 3, 4, 5],
      [3, 4],
      [1, 3, 4],
    ],
  });
}

if (document.querySelector('.questions_7_1') !== null) {
  createFalseAndTrue({
    questionsHtml: '.questions_7_1',
    checkButton: '#check_answers_7_1',
    resetButton: '#reset_answers_7_1',
    answerButton: '#answers_7_1',
    answers: [1, 2, 1, 1],
  });
}

if (document.querySelector('.answer_options_8_1') !== null) {
  createDragAndDropImages({
    optionsHtml: '.answer_options_8_1',
    questionsHtml: '.answers_place_8_1',
    checkButton: '#check_answers_8_1',
    resetButton: '#reset_answers_8_1',
    answerButton: '#answers_8_1',
    answers: [7, 2, 3, 4, 5, 6, 1],
  });
}

if (document.querySelector('.questions_9_1') !== null) {
  createAccordionSelect({
    questionsHtml: '.questions_9_1',
    checkButton: '#check_answers_9_1',
    resetButton: '#reset_answers_9_1',
    answerButton: '#answers_9_1',
    answers: [5, 1, 6, 7, 4, 2, 3],
  });
}
