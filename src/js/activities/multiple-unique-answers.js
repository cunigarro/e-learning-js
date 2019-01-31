import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Multiple unique answer BEGIN
const createMultipleUniqueAnswers = (options) => {
  const questionsHtml = document.querySelector(options.questionsHtml);
  const inputs = questionsHtml.querySelectorAll('[data-question]');
  const checkButton = document.querySelector(options.checkButton);
  const resetButton = document.querySelector(options.resetButton);
  const answerButton = document.querySelector(options.answerButton);
  const answers = [
    ...options.answers,
  ];
  const userAnswer = {};

  questionsHtml.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  inputs.forEach((el, k) => {
    const radios = el.querySelectorAll('input');
    const elRef = el;
    elRef.insertAdjacentHTML('afterend', '<span></span>');
    userAnswer[`question_${k}`] = 0;

    radios.forEach((radio) => {
      addEventHandler(radio, 'click', (event) => {
        const target = event.currentTarget;
        userAnswer[`question_${k}`] = target.value;
      });
    });
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    inputs.forEach((item, i) => {
      if (parseInt(userAnswer[`question_${i}`], 10) !== 0) {
        if (parseInt(userAnswer[`question_${i}`], 10) === answers[i]) {
          item.nextSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextSibling.appendChild(addValidationIcon('wrong'));
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
    inputs.forEach((item, i) => {
      const itemRef = item;
      userAnswer[`question_${i}`] = 0;
      itemRef.nextSibling.innerHTML = '';
      for (let k = 0; k < item.children.length; k += 1) {
        itemRef.children[k].querySelector('input').checked = false;
      }
    });

    answerButton.style.display = 'none';
    resetButton.style.display = 'none';
    checkButton.style.display = 'inline-block';
  });

  addEventHandler(answerButton, 'click', () => {
    inputs.forEach((item, i) => {
      const itemRef = item;
      itemRef.nextSibling.innerHTML = '';

      for (let k = 0; k < itemRef.children.length; k += 1) {
        itemRef.children[k].querySelector('input').checked = false;
      }

      if (parseInt(userAnswer[`question_${i}`], 10) !== 0) {
        itemRef.children[answers[i] - 1].querySelector('input').checked = true;
      }
    });
  });
};
// Multiple unique answer END

export default createMultipleUniqueAnswers;
