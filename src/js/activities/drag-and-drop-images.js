import addEventHandler from '../utilities/add-event-handler';
import addValidationIcon from '../utilities/add-validation-icon';

// Drag and drop images BEGIN
const createDragAndDropImages = (options) => {
  const questionsHtmlBox = document.querySelector(options.questionsHtml);
  let optionsHtml;
  let questionsHtml;
  const checkButton = document.querySelector(options.checkButton);
  const resetButton = document.querySelector(options.resetButton);
  const answerButton = document.querySelector(options.answerButton);
  const answers = [
    ...options.answers,
  ];
  const optionsHtmlContent = [];
  let currentlyDragging = null;
  const selected = [];

  questionsHtmlBox.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  function activateDragAndDrop() {
    optionsHtml = document.querySelector(options.optionsHtml).querySelectorAll('.box_img');
    questionsHtml = document.querySelector(options.questionsHtml).querySelectorAll('.box_img');

    optionsHtml.forEach((item, k) => {
      const itemRef = item;
      optionsHtmlContent[k] = optionsHtml[k].parentNode.innerHTML;
      itemRef.setAttribute('draggable', true);
      itemRef.ondragstart = (event) => {
        const eventRef = event;
        const target = event.currentTarget;
        eventRef.dataTransfer.effectAllowed = 'move';
        eventRef.dataTransfer.setData('text/html', target.innerHTML);
        currentlyDragging = eventRef.target.parentNode;
      };
    });

    questionsHtml.forEach((item, k) => {
      const itemRef = item;

      itemRef.ondragenter = (event) => {
        event.preventDefault();
      };

      itemRef.ondragover = (event) => {
        event.preventDefault();
      };

      itemRef.ondrop = (event) => {
        event.preventDefault();

        if (itemRef.innerHTML === '') {
          itemRef.appendChild(currentlyDragging);
          selected[k] = parseInt(currentlyDragging.getAttribute('data-option'), 10);
          currentlyDragging = null;
        }
      };
    });
  }

  activateDragAndDrop();

  questionsHtml.forEach((item) => {
    selected.push(0);
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(checkButton, 'click', () => {
    let iterate = 0;

    questionsHtml.forEach((item, i) => {
      if (selected[i] !== 0) {
        if (selected[i] === answers[i]) {
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

    if (iterate === questionsHtml.length) {
      questionsHtmlBox.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questionsHtmlBox.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(resetButton, 'click', () => {
    questionsHtml.forEach((item, i) => {
      const itemRef = item;
      selected[i] = 0;
      itemRef.innerHTML = '';
      itemRef.nextSibling.innerHTML = '';
    });

    optionsHtml.forEach((item, i) => {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = optionsHtmlContent[i];
    });

    activateDragAndDrop();

    answerButton.style.display = 'none';
    resetButton.style.display = 'none';
    checkButton.style.display = 'inline-block';
  });

  addEventHandler(answerButton, 'click', () => {
    questionsHtml.forEach((item, i) => {
      const itemRef = item;
      selected[i] = 0;
      itemRef.innerHTML = optionsHtmlContent[answers[i] - 1];
      itemRef.nextSibling.innerHTML = '';
    });

    optionsHtml.forEach((item, i) => {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = '';
    });
  });
};
// Drag and drop images END

export default createDragAndDropImages;
