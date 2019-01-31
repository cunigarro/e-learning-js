import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Multiples_answers BEGIN
const createMultipleAnswers = (options) => {
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
    const elRef = el;
    const checkboxes = elRef.querySelectorAll('input');
    elRef.insertAdjacentHTML('afterend', '<span></span>');
    userAnswer[`question_${k}`] = [];

    checkboxes.forEach((checkbox, i) => {
      let index;
      addEventHandler(checkbox, 'click', (event) => {
        const target = event.currentTarget;
        if (target.checked) {
          userAnswer[`question_${k}`].push(i + 1);
        } else {
          index = userAnswer[`question_${k}`].indexOf(i + 1);

          if (index > -1) {
            userAnswer[`question_${k}`].splice(index, 1);
          }
        }
      });
    });
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    inputs.forEach((item, i) => {
      let evaluation = false;

      if (userAnswer[`question_${i}`].length) {
        for (let k = 0; k < answers[i].length; k += 1) {
          if (userAnswer[`question_${i}`].indexOf(answers[i][k]) !== -1) {
            evaluation = true;
          } else {
            evaluation = false;
            break;
          }
        }

        if (evaluation) {
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
      userAnswer[`question_${i}`] = [];
      itemRef.nextSibling.innerHTML = '';
      for (let k = 0; k < itemRef.children.length; k += 1) {
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

      if (userAnswer[`question_${i}`].length) {
        for (let k = 0; k < answers[i].length; k += 1) {
          itemRef.children[answers[i][k] - 1].querySelector('input').checked = true;
        }
      }
    });
  });
};
// Multiples_answers END

export default createMultipleAnswers;
