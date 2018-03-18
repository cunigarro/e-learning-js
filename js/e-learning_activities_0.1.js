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
    icon.classList.add('good_icon', 'fa', 'fa-check-circle');
  } else if(result == 'wrong') {
    icon.classList.add('wrong_icon', 'fa', 'fa-times-circle');
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
  var inputs = questions_html.querySelectorAll('.js-select-input');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  window['selected'] = [];

  inputs.forEach(function(item, i) {
    var options = item.querySelectorAll('div');
    var question = '';
    var answer = '';

    window['selected'].push({
      question: i + 1,
      answer: 0
    });

    options.forEach(function(item, k) {
      addEventHandler(item, 'click', function() {
        question = this.parentNode.getAttribute('data-question');
        answer = this.getAttribute('data-answer');

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

/*--Drag and drop--*/
function create_drag_drop(options){
  var options_html = document.querySelector(options.options_html).querySelectorAll('.box');
  var questions_html = document.querySelector(options.questions_html).querySelectorAll('.box');
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;

  var moving = false;

  // Drag function
  options_html.forEach(function(item, k) {
    addEventHandler(item, 'mousedown', function(event) {
      moving = true;
      // Select the item that was clicked
      var self = event.target;
      // Positions cursor in center of element when being dragged, as oposed to the top left
      var itemWidth = self.offsetWidth / 2;
      var itemHeight = self.offsetHeight / 2;
      // Element follows mouse cursor
      document.addEventListener('mousemove',function(e) {
        // Only run if variable is true (this is destroyed on mouseup)
        if(moving === true){
          // Postion element, minus half width/height as above
          var x = e.clientX - itemWidth;
          var y = e.clientY - itemHeight;

          // Store left, top, and z-index in variable
          var position = 'left:' + x + 'px;top:' + y + 'px;cursor:move;position:fixed;';
          // Set style
          self.setAttribute('style', position);
        };
      });
    });
    addEventHandler(item, 'mouseup', function(event) {
      moving = false;
    });
  });

    /* Options: answers_options,answers_place,check_button,reset_button,answer_button,answers_amount */
    /* var array_width = new Array();
    var array_height = new Array();
    $(".box").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('background','#FFC742');
            $(this).css('color','#333');
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height)-1);

    $("body").droppable({
        drop: function(event, ui) {
            $(ui.draggable).css("left",0);
            $(ui.draggable).css("top",0);
        }
    });

    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    answers_options.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    answers_place.find('.box').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_4_1 .answer_par",
            drop: function(event, ui) {
                $(this).css("background-color","#FFC742");
                $(this).css("color","#333");
                $(this).html($(ui.draggable).html());
                $(ui.draggable).css("left",0);
                $(ui.draggable).css("top",0);
                $(ui.draggable).css("visibility","hidden");
                $(this).css("opacity",1);
                $(this).droppable( "disable");
                $(ui.draggable).draggable("disable");

                answered = true;
                var correct_answer = answers[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }
            }
        });

        if(answered){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            var answer_text = answers_options.find("[data-option='" + correct_answer + "']").text();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css({"background-color":"#00B050","color":"#FFF"}).html(answer_text);
            }
        }

        answers_place.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    }); */
}
/*--Drag and drop--*/

/*--Multiple unique answer BEGIN --*/
function create_multiple_unique_asnwers (options) {
  var questions_html = document.querySelector(options.questions_html);
  var inputs = questions_html.querySelectorAll('.js-radio-input-group');
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
  var inputs = questions_html.querySelectorAll('.js-checkbox-input-group');
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
  var inputs = questions_html.querySelectorAll('.js-radio-input-group');
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

/*--Drag and drop images--*/
function create_drag_drop_images(answers_options,answers_place,check_button,reset_button,answer_button,answers_amount){
    var array_width = new Array();
    var array_height = new Array();
    $(".box_img").each(function(index) {
        array_width.push($(this).innerWidth());
        array_height.push($(this).innerHeight());
        if($(this).html().length > 1){
            $(this).css('cursor','pointer');
        }else{
            $(this).html("&nbsp;");
        }
    });
    $(".box").css('width',Math.max.apply(Math,array_width));
    $(".box").css('height',Math.max.apply(Math,array_height));

    $("body").droppable({
        drop: function(event, ui) {
            $(ui.draggable).css("left",0);
            $(ui.draggable).css("top",0);
        }
    });

    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    answers_options.find('.answer_par').each(function( key, element) {
        $(element).draggable();
    });

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    answers_place.find('.box_img').each(function( key, element) {
        $(element).droppable({
            accept: ".answer_options_8_1 .answer_par",
            drop: function(event, ui) {
                $(this).css("background-color","#FFC742");
                $(this).css("color","#333");
                $(this).html($(ui.draggable).html());
                $(ui.draggable).css("left",0);
                $(ui.draggable).css("top",0);
                $(ui.draggable).css("visibility","hidden");
                $(this).css("opacity",1);
                $(this).droppable( "disable");
                $(ui.draggable).draggable("disable");

                answered = true;
                var correct_answer = answers[$(this).droppable().data('question')];
                var selected_answer = $(ui.draggable).data('option');

                var question = questions[$(this).droppable().data('question')];
                question['answer'] = selected_answer;
            }
        });
    });

    check_button.click(function () {
        answers_place.find('.box_img').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).parent().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').css('display','none');
                } else {
                    $(element).parent().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).parent().find('.good_icon').css('display','none');
                }
            }
        });

        if(answered){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

            answers_options.find('.answer_par').each(function( key, element) {
                $(element).draggable("disable");
            });
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");

        answers_options.find('.answer_par').each(function( key, element) {
            $(element).css("visibility","visible");
            $(element).draggable("enable");
        });

        answers_place.find('.box_img').each(function( key, element) {
            $(element).css("background-color","#DDD");
            $(element).html("&nbsp;");
            $(element).css("border","none");
            $(element).droppable("enable");
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];
            var answer_img = answers_options.find("[data-option='" + correct_answer + "']").html();

            if (user_answer) {
                answers_place.find("[data-question='" + question + "']").css("border","3px solid #00ca5c").html(answer_img);
            }
        }

        answers_place.parent().find('.good_icon, .wrong_icon').parent().fadeOut("normal");
    });
}
/*--Drag and drop images--*/

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
