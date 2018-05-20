
/*--False and true BEGIN --*/
const createFalseAndTrue = (options) => {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('[data-question]');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var user_answer = {};

  inputs.forEach(function(el, k) {
    var radio = el.querySelectorAll('input');
      el.insertAdjacentHTML('afterend', '<span></span>');
      user_answer['question_' + k] = 0;

      radio.forEach(function(el, i) {
      addEventHandler(el, 'click', function() {
        user_answer['question_' + k] = this.value;
      });
    });
  });

  addEventHandler(check_button, 'click', function() {
    inputs.forEach(function(item, i) {
      if(user_answer['question_' + i] != 0) {
        if(user_answer['question_' + i] == answers[i]) {
          item.nextSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextSibling.appendChild(addValidationIcon('wrong'));
        }

        answer_button.style.display = 'inline-block';
        reset_button.style.display = 'inline-block';
        check_button.style.display = 'none';
      }
    });
  });

  addEventHandler(reset_button, 'click', function() {
    inputs.forEach(function(item, i) {
      user_answer['question_' + i] = 0;
      item.nextSibling.innerHTML = '';
      for(var k = 0; k < item.children.length; k++) {
        item.children[k].querySelector('input').checked = false;
      };
    });

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    inputs.forEach(function(item, i) {
      item.nextSibling.innerHTML = '';

      for(var k = 0; k < item.children.length; k++) {
        item.children[k].querySelector('input').checked = false;
      };

      if(user_answer['question_' + i] != 0) {
        item.children[answers[i] - 1].querySelector('input').checked = true;
      }
    });
  });
}
/*--False and true END --*/

export default createFalseAndTrue;
