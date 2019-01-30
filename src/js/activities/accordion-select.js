import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Accordion select BEGIN
const createAccordionSelect = (options) => {
  const questionsHtml = document.querySelector(options.questionsHtml);
  const selects = questionsHtml.querySelectorAll('select');
  const checkButton = document.querySelector(options.checkButton);
  const resetButton = document.querySelector(options.resetButton);
  const answerButton = document.querySelector(options.answerButton);
  const answers = [
    ...options.answers,
  ];

  questionsHtml.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  selects.forEach((item) => {
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    selects.forEach((item, i) => {
      const itemRef = item;
      const correctAnswer = answers[i];
      const userAnswer = itemRef.value;

      itemRef.nextElementSibling.innerHTML = '';
      if (userAnswer.length > 0) {
        if (correctAnswer === parseInt(userAnswer, 10)) {
          itemRef.nextElementSibling.appendChild(addValidationIcon('good'));
        } else {
          itemRef.nextElementSibling.appendChild(addValidationIcon('wrong'));
        }

        answerButton.style.display = 'inline-block';
        resetButton.style.display = 'inline-block';
        checkButton.style.display = 'none';
      } else {
        iterate += 1;
      }
    });

    if (iterate === selects.length) {
      questionsHtml.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questionsHtml.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(resetButton, 'click', () => {
    selects.forEach((item) => {
      const itemRef = item;
      itemRef.selectedIndex = null;
      itemRef.nextElementSibling.innerHTML = '';
    });

    answerButton.style.display = 'none';
    resetButton.style.display = 'none';
    checkButton.style.display = 'inline-block';
  });

  addEventHandler(answerButton, 'click', () => {
    selects.forEach((item, i) => {
      const itemRef = item;
      const userAnswer = itemRef.value;

      itemRef.value = '';
      itemRef.nextElementSibling.innerHTML = '';

      if (userAnswer.length > 0) {
        itemRef.value = answers[i];
      }
    });
  });
};
// Accordion select END

export default createAccordionSelect;
