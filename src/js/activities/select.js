/*--Select BEGIN --*/
const createSelect = (options) => {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('[data-question]');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var selected = [];

  questions_html.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  inputs.forEach(function(item, i) {
    var options = item.querySelectorAll('[data-option]');
    var question = '';
    var answer = '';

    selected.push({
      question: i + 1,
      answer: 0
    });

    options.forEach(function(item, k) {
      addEventHandler(item, 'click', function() {
        question = this.parentNode.getAttribute('data-question');
        answer = this.getAttribute('data-option');

        Array.prototype.map.call(options, function(el) {
          el.classList.remove('selected');
        });
        this.classList.add('selected');
        selected[question - 1].answer = answer;
      });
    });

    options[options.length - 1].insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    var iterate = 0;

    inputs.forEach(function(item, i) {
      if(selected[i].answer != 0) {
        if(selected[i].answer == answers[i]) {
          item.children[item.children.length - 1].appendChild(addValidationIcon('good'));
        } else {
          item.children[item.children.length - 1].appendChild(addValidationIcon('wrong'));
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
      selected[i].answer = 0;
      item.children[item.children.length - 1].innerHTML = '';
      for(var k = 0; k < item.children.length; k++) {
        item.children[k].classList.remove('selected');
      };
    });

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    inputs.forEach(function(item, i) {
      item.children[item.children.length - 1].innerHTML = '';

      for(var k = 0; k < item.children.length; k++) {
        item.children[k].classList.remove('selected');
      };

      if(selected[i].answer != 0) {
        item.children[answers[i] - 1].classList.add('selected');
      }
    });
  });
}
/*--Select END --*/

export default createSelect;
