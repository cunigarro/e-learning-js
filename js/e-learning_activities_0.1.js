// Auxiliar methods
function addEventHandler(elem, eventType, handler) {
  if (elem.addEventListener)
    elem.addEventListener (eventType, handler, false);
  else if (elem.attachEvent)
    elem.attachEvent ('on' + eventType, handler);
}

function addValidationIcon(result) {
  var fragment = document.createDocumentFragment();
  var icon = document.createElement('i');

  icon.style.display = 'inline-block';
  icon.style.marginLeft = '10px';
  icon.style.marginRight = '10px';
  if(result == 'good') {
    icon.classList.add('good_icon');
    icon.innerHTML = '&#10004;'
  } else if(result == 'wrong') {
    icon.classList.add('wrong_icon');
    icon.innerHTML = '&times;';
  }

  fragment.appendChild(icon);

  return fragment;
}

/*-- Multiple choice BEGIN --*/
function create_multiple_choice(options) {
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

/*--Select BEGIN --*/
function create_select(options) {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('[data-question]');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var selected = [];

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
      }
    });
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

/*--Drag and drop BEGIN --*/
function create_drag_drop(options){
  var options_html;
  var questions_html;
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var options_html_content = [];
  var currentlyDragging = null;
  selected = [];

  function activateDragAndDrop() {
    options_html = document.querySelector(options.options_html).querySelectorAll('.box');
    questions_html = document.querySelector(options.questions_html).querySelectorAll('.box');

    options_html.forEach(function(item, k) {
      options_html_content[k] = options_html[k].parentNode.innerHTML;
      item.setAttribute( 'draggable', true );
      item.ondragstart = function( ev ) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData( 'text/html', this.innerHTML )
        currentlyDragging = ev.target;
      }
    });

    questions_html.forEach(function(item, k) {
      item.ondragenter = item.ondragover = function( ev ) {
        ev.preventDefault();
      };

      item.ondrop = function(ev) {
        item.appendChild(currentlyDragging);
        selected[k] = parseInt(currentlyDragging.getAttribute('data-option'));
        currentlyDragging = null;
      };
    });
  }

  activateDragAndDrop();

  questions_html.forEach(function(item, i) {
    selected.push(0);
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      if(selected[i] != 0) {
        if(selected[i] == answers[i]) {
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
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = '';
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = options_html_content[i];
    });

    activateDragAndDrop();

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = options_html_content[answers[i] - 1];
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = '';
    });
  });
}
/*--Drag and drop END --*/

/*--Multiple unique answer BEGIN --*/
function create_multiple_unique_asnwers (options) {
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
/*--Multiple unique answer END --*/

/*--Multiples_answers BEGIN --*/
function create_multiple_answers (options) {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('[data-question]');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var user_answer = {};

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
      }
    });
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

/*--False and true BEGIN --*/
function create_false_true (options) {
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

/*--Drag and drop images BEGIN --*/
function create_drag_drop_images(options){
  var options_html;
  var questions_html;
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var options_html_content = [];
  var currentlyDragging = null;
  selected = [];

  function activateDragAndDrop() {
    options_html = document.querySelector(options.options_html).querySelectorAll('.box_img');
    questions_html = document.querySelector(options.questions_html).querySelectorAll('.box_img');

    options_html.forEach(function(item, k) {
      options_html_content[k] = options_html[k].parentNode.innerHTML;
      item.setAttribute( 'draggable', true );
      item.ondragstart = function( ev ) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData( 'text/html', this.innerHTML )
        currentlyDragging = ev.target.parentNode;
      }
    });

    questions_html.forEach(function(item, k) {
      item.ondragenter = item.ondragover = function( ev ) {
        ev.preventDefault();
      };

      item.ondrop = function(ev) {
        ev.preventDefault();
        item.appendChild(currentlyDragging);
        selected[k] = parseInt(currentlyDragging.getAttribute('data-option'));
        currentlyDragging = null;
      };
    });
  }

  activateDragAndDrop();

  questions_html.forEach(function(item, i) {
    selected.push(0);
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      if(selected[i] != 0) {
        if(selected[i] == answers[i]) {
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
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = '';
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = options_html_content[i];
    });

    activateDragAndDrop();

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = options_html_content[answers[i] - 1];
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = '';
    });
  });
}
/*--Drag and drop images END --*/

/*--Accordion select BEGIN --*/
function create_accordion_select(options) {
  var questions_html = document.querySelector(options.questions_html);
  var selects = questions_html.querySelectorAll('select');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;

  selects.forEach(function(item, i){
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
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
      }
    });
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
