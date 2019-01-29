import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Select BEGIN
const createSelect = (options) => {
  const questionsHtml = document.querySelector(options.questionsHtml);
  const inputs = questionsHtml.querySelectorAll('[data-question]');
  const checkButton = document.querySelector(options.checkButton);
  const resetButton = document.querySelector(options.resetButton);
  const answerButton = document.querySelector(options.answerButton);
  const answers = [
    ...options.answers,
  ];
  const selected = [];

  questionsHtml.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  inputs.forEach((item, i) => {
    const optionsList = item.querySelectorAll('[data-option]');
    let question = '';
    let answer = '';

    selected.push({
      question: i + 1,
      answer: 0,
    });

    optionsList.forEach((itemOption) => {
      addEventHandler(itemOption, 'click', (event) => {
        const target = event.currentTarget;
        question = target.parentNode.getAttribute('data-question');
        answer = target.getAttribute('data-option');

        Array.prototype.map.call(optionsList, (el) => {
          el.classList.remove('selected');
        });

        target.classList.add('selected');
        selected[question - 1].answer = answer;
      });
    });

    optionsList[optionsList.length - 1].insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    inputs.forEach((item, i) => {
      if (selected[i].answer !== 0) {
        if (parseInt(selected[i].answer, 10) === answers[i]) {
          item.children[item.children.length - 1].appendChild(addValidationIcon('good'));
        } else {
          item.children[item.children.length - 1].appendChild(addValidationIcon('wrong'));
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
      selected[i].answer = 0;
      itemRef.children[itemRef.children.length - 1].innerHTML = '';
      for (let k = 0; k < itemRef.children.length; k += 1) {
        item.children[k].classList.remove('selected');
      }
    });

    answerButton.style.display = 'none';
    resetButton.style.display = 'none';
    checkButton.style.display = 'inline-block';
  });

  addEventHandler(answerButton, 'click', () => {
    inputs.forEach((item, i) => {
      const itemRef = item;
      itemRef.children[itemRef.children.length - 1].innerHTML = '';

      for (let k = 0; k < itemRef.children.length; k += 1) {
        item.children[k].classList.remove('selected');
      }

      if (selected[i].answer !== 0) {
        item.children[answers[i] - 1].classList.add('selected');
      }
    });
  });
};
// Select END

export default createSelect;
