/*-- Multiple choice BEGIN --*/
const createMultipleChoice = (options) => {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('input');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;

  inputs.forEach(function(item, i){
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    inputs.forEach(function(item, i) {
      var correct_answer = answers[i];
      var user_answer = item.value;

      item.nextElementSibling.innerHTML = '';
      if(user_answer.length > 0) {
        if (correct_answer.indexOf(user_answer.trim()) > -1) {
          item.nextElementSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextElementSibling.appendChild(addValidationIcon('wrong'));
        }

        answer_button.style.display = 'inline-block';
        reset_button.style.display = 'inline-block';
        check_button.style.display = 'none';
      }
    });
  });

  addEventHandler(reset_button, 'click', function() {
    inputs.forEach(function(item, i) {
      item.value = '';
      item.nextElementSibling.innerHTML = '';
    });

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    inputs.forEach(function(item, i) {
      var user_answer = item.value;

      item.value = '';
      item.nextElementSibling.innerHTML = '';

      if(user_answer.length > 0) {
        item.value = answers[i][0];
      }
    });
  });
}
/*-- Multiple choice END --*/

export default createMultipleChoice;
