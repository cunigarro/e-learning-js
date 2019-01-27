/*--Accordion select BEGIN --*/
const createAccordionSelect = (options) => {
  var questions_html = document.querySelector(options.questions_html);
  var selects = questions_html.querySelectorAll('select');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;

  questions_html.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  selects.forEach(function(item, i){
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    var iterate = 0;

    selects.forEach(function(item, i) {
      var correct_answer = answers[i];
      var user_answer = item.value;

      item.nextElementSibling.innerHTML = '';
      if(user_answer.length > 0) {
        if (correct_answer == user_answer) {
          item.nextElementSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextElementSibling.appendChild(addValidationIcon('wrong'));
        }

        answer_button.style.display = 'inline-block';
        reset_button.style.display = 'inline-block';
        check_button.style.display = 'none';
      } else {
        iterate++;
      }
    });

    if(iterate === selects.length) {
      questions_html.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questions_html.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(reset_button, 'click', function() {
    selects.forEach(function(item, i) {
      item.selectedIndex = null;
      item.nextElementSibling.innerHTML = '';
    });

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    selects.forEach(function(item, i) {
      var user_answer = item.value;

      item.value = '';
      item.nextElementSibling.innerHTML = '';

      if(user_answer.length > 0) {
        item.value = answers[i];
      }
    });
  });
}
/*--Accordion select END --*/

export default createAccordionSelect;
