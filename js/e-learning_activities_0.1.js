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
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;

  var answered = false;
  var inputs = questions_html.querySelectorAll('input');

  answer_button.style.display = 'none';
  reset_button.style.display = 'none';
  check_button.style.position = 'relative';

  inputs.forEach(function(item, i){
    addEventHandler(item, 'input', function() {
      answered = true;
    });
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

/*--Select--*/
function create_select(questions_html,check_button,reset_button,answer_button,answers_amount) {
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    if(questions_html.find('div').html().length == 1){
        questions_html.find('div').css({
            'width': 21,
            'padding': 1
        });
    }else if(questions_html.find('figure').length){
        questions_html.find('div').css('padding',0);
    }

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = 0;
    }

    questions_html.on('click', 'div', function () {
        $(this).parent().find('div').not($(this)).removeClass('selected');
        $(this).addClass('selected');

        answered = true;
        var selected_option = $(this).data('select');
        var question = questions[$(this).closest('li').data('question')];
        question['answer'] = selected_option;
    });

    check_button.click(function () {
        questions_html.find('li').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').css('display','none');
                } else {
                    $(element).find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').css('display','none');
                }
            }
        });

        if(answered === true){
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = 0;
        }
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').each(function( key, element) {
            $(element).removeClass('selected');
            $(element).removeClass('answer');
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        questions_html.find('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('div').removeClass('selected');

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];

            if (user_answer > 0) {
                questions_html.find("[data-question='" + question + "']").find("[data-select='" + correct_answer + "']").addClass('answer');
            }
        }
    });
}
/*--Select--*/

/*--Drag and drop--*/
function create_drag_drop(answers_options,answers_place,check_button,reset_button,answer_button,answers_amount){
    var array_width = new Array();
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
    });
}
/*--Drag and drop--*/

/*--Multiple unique answer--*/
function create_multiple_unique_asnwers (questions_html,check_button,reset_button,answer_button,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function() {
        answered = true;
        var selected_option = $(this).data('option');
        var question = questions[$(this).closest('ol').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        questions_html.find('ol').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];

            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer === selected_answer) {
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

        if (answered === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();

        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });

    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        questions_html.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];

            if (user_answer) {
                questions_html.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--Multiple unique answer--*/

/*--Multiples_answers--*/
function create_multiple_answers (questions_html,check_button,reset_button,answer_button,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function () {
        answered = true;
    });

    check_button.click(function () {
        questions_html.find('li.question_text').each(function( key, element) {
            var qstion_id = $(this).closest('li').data('question');
            // Introducing user answers data in check button function.

            var user_answer = {};
            for (qu_id in answers) {
                var total = 0

                for (op in answers[qu_id]) {
                    total = total + 1;
                    user_answer[op] = false;
                }
            }

            var question = questions[qstion_id];
            $(element).find('input:checked').each(function( key, option) {
                var checked_option = $(this).data('option');
                user_answer[checked_option] = true;
            });

            questions[qstion_id]['answer'] = user_answer;
            var correct_answer = answers[qstion_id];
            var answer = questions[qstion_id]['answer'];

            var answered_question = false;

            for (value in answer) {
                if (answer[value] === true) {
                    answered_question = true
                }
            }

            if (answered_question) {
                var answer_options = answers[qstion_id];
                var dict_length = Object.keys(answer_options).length;

                var correct_answers_dict = {}
                for (var i = 1, l = dict_length ; i <= l; i++)  {

                    if (user_answer['option_' + i] === answers[qstion_id]['option_' + i]) {
                        correct_answers_dict['correct_' + i] = true;
                    } else {
                        correct_answers_dict['correct_' + i] = false;
                    };
                };

                var answered_correct = true;
                for (id in correct_answers_dict) {
                    if (correct_answers_dict[id] == false) {
                        answered_correct = false;
                    }
                }

                $(element).find('.good_icon').parent().addClass('activity_span');
                if (answered_correct) {
                    $(element).find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').css('display','none');
                } else {
                    $(element).find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').css('display','none');
                }
            }
        });

        if (answered === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });
        answer_button.hide();
        $(this).hide();
        check_button.fadeIn();
    });

    answer_button.click(function () {

        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        questions_html.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var user_answer = questions[question]['answer'];
            var correct_answer = answers[question];
            var answered_question = false;

            for (value in user_answer) {
                if (user_answer[value] === true) {
                    answered_question = true
                }
            }

            if (answered_question) {
                $.each(correct_answer, function(key, value) {
                    if (value === true) {
                    questions_html.find("[data-question='" + question + "']").find("[data-option='" + key + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});

                    }
                });
            }
        }
    });
}
/*--Multiples_answers--*/

/*--False and true--*/
function create_false_true (questions_html,check_button,reset_button,answer_button,answers_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    questions_html.on('click', 'input', function () {
        answered = true;
        var selected_option = $(this).data('option');
        var question = questions[$(this).closest('li').data('question')];

        question['answer'] = selected_option;
    });


    check_button.click(function () {
        questions_html.find('li').each(function( key, element) {
            var correct_answer = answers[$(element).data('question')];
            var selected_answer = questions[$(element).data('question')]['answer'];
            if (selected_answer) {
                $(element).parent().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer === selected_answer) {
                    $(element).find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').css('display','none');
                } else {
                    $(element).find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).find('.good_icon').css('display','none');
                }
            }
        });

        if (answered === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        };
    });


    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('input').each(function( key, element) {
            $(element).prop("checked", false).parent().css({'color':'#000','font-family':'open_sansregular'});
        });

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        questions_html.find('input').each(function( key, element) {
            $(element).parent().css({'color':'#000','font-family':'open_sansregular'});
            $(element).prop("checked", false);
        });

        for (question in questions) {
            var correct_answer = answers[question];
            var user_answer = questions[question]['answer'];

            if (user_answer) {
                questions_html.find("[data-question='" + question + "']").find("[data-option='" + correct_answer + "']").prop("checked", true).parent().css({'color':'#00B050','font-family':'open_sanssemibold'});
            }
        }
    });
}
/*--False and true--*/

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

/*--Accordion select--*/
function create_accordion_select (questions_html,check_button,reset_button,answer_button,answers_amount,options_amount){
    answer_button.hide();
    reset_button.hide();
    check_button.css('position','relative');

    var answered = false;

    var questions = JSON.parse(JSON.stringify(answers_amount));

    for (qu in questions) {
        questions[qu] = {};
    }

    var answers = answers_amount;

    var select_options = options_amount;

    for (qu in questions) {
        questions[qu]['answer'] = false;
    }

    questions_html.on('change', 'select', function () {
        answered = true;
    });


    check_button.click(function () {
        questions_html.find('select').each(function( key, element) {
            var correct_answer = answers[$(element).data('position')];
            var selected_answer = $(element).find('option:selected').val();
            questions[$(element).data('position')]['answer'] = selected_answer;

            if (selected_answer) {
                $(element).next().find('.good_icon').parent().addClass('activity_span');
                if (correct_answer == selected_answer) {
                    $(element).next().find('.good_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.good_icon').fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.wrong_icon').css('display','none');
                } else {
                    $(element).next().find('.wrong_icon').parent().fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.wrong_icon').fadeIn('normal').css("display","inline-block");
                    $(element).next().find('.good_icon').css('display','none');
                }
            }
        });

        if (answered === true) {
            answer_button.fadeIn();
            check_button.css('display', 'none');
            reset_button.fadeIn();
        }
    });

    reset_button.click(function () {
        answered = false;
        for (qu in questions) {
            questions[qu]['answer'] = false;
        }
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");
        questions_html.find('select').css('color', '#000').removeAttr('disabled').val('');

        answer_button.hide();
        check_button.fadeIn();
        $(this).hide();
    });


    answer_button.click(function () {
        $('.good_icon, .wrong_icon').parent().fadeOut("normal");

        for (question in questions) {
            var user_answer = questions[question]['answer'];
            var correct_answer = answers[question];

            if (user_answer) {
                questions_html.find("[data-position='" + question + "']").val(correct_answer).css('color', '#00B050');

            }
        }

        questions_html.find('select').each(function( key, element) {
            $(element).attr('disabled', 'true');
        });
    });
}
/*--Accordion select--*/
