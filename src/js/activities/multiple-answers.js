/*--Multiples_answers BEGIN --*/
const createMultipleAnswers = (options) => {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('[data-question]');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var user_answer = {};

  questions_html.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  inputs.forEach(function(el, k) {
    var checkbox = el.querySelectorAll('input');
    el.insertAdjacentHTML('afterend', '<span></span>');
    user_answer['question_' + k] = [];

    checkbox.forEach(function(el, i) {
      var index;
      addEventHandler(el, 'click', function() {
        if(this.checked) {
          user_answer['question_' + k].push(i + 1);
        } else {
          index = user_answer['question_' + k].indexOf(i + 1);

          if (index > -1) {
            user_answer['question_' + k].splice(index, 1);
          }
        }
      });
    });
  });

  addEventHandler(check_button, 'click', function() {
    var iterate = 0;

    inputs.forEach(function(item, i) {
      var evaluation = false;

      if(user_answer['question_' + i].length) {

        for(var k = 0; k < answers[i].length; k++) {
          if(user_answer['question_' + i].indexOf(answers[i][k]) != -1) {
            evaluation = true
          } else {
            evaluation = false;
            break;
          };
        }

        if(evaluation) {
          item.nextSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextSibling.appendChild(addValidationIcon('wrong'));
        }

        answer_button.style.display = 'inline-block';
        reset_button.style.display = 'inline-block';
        check_button.style.display = 'none';
      } else {
        iterate++;
      }
    });

    if(iterate === inputs.length) {
      questions_html.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questions_html.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(reset_button, 'click', function() {
    inputs.forEach(function(item, i) {
      user_answer['question_' + i] = [];
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

      if(user_answer['question_' + i].length) {
        for(var k = 0; k < answers[i].length; k++) {
          item.children[answers[i][k] - 1].querySelector('input').checked = true;
        }
      }
    });
  });
}
/*--Multiples_answers END --*/

export default createMultipleAnswers;
