import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Multiple choice BEGIN
const createMultipleChoice = (options) => {
  const questionsHtml = document.querySelector(options.questionsHtml);
  const inputs = questionsHtml.querySelectorAll('input');
  const checkButton = document.querySelector(options.checkButton);
  const resetButton = document.querySelector(options.resetButton);
  const answerButton = document.querySelector(options.answerButton);
  const answers = [
    ...options.answers,
  ];

  questionsHtml.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  inputs.forEach((item) => {
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    inputs.forEach((item, i) => {
      const correctAnswer = answers[i];
      const userAnswer = item.value;
      const input = item;

      input.nextElementSibling.innerHTML = '';

      if (userAnswer.length > 0) {
        if (correctAnswer.indexOf(userAnswer.trim()) > -1) {
          item.nextElementSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextElementSibling.appendChild(addValidationIcon('wrong'));
        }

        answerButton.style.display = 'inline-block';
        resetButton.style.display = 'inline-block';
        checkButton.style.display = 'none';
      } else {
        iterate += 1;
      }
    });

    if (iterate === inputs.length) {
      questionsHtml.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questionsHtml.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(resetButton, 'click', () => {
    inputs.forEach((item) => {
      const input = item;
      input.value = '';
      input.nextElementSibling.innerHTML = '';
    });

    answerButton.style.display = 'none';
    resetButton.style.display = 'none';
    checkButton.style.display = 'inline-block';
  });

  addEventHandler(answerButton, 'click', () => {
    inputs.forEach((item, i) => {
      const input = item;
      const userAnswer = input.value;

      input.value = '';
      input.nextElementSibling.innerHTML = '';

      if (userAnswer.length > 0) {
        const answer = answers[i];
        const value = answer[0];
        input.value = value;
      }
    });
  });
};
// Multiple choice END

export default createMultipleChoice;
