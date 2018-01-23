var abre = false;
var first_card_number = 0;
var second_card_number = 0;
var identifier = 0;
var good_counter = 1;
var first_type = false;

$(".card-container").on("click", function (){
    if($(this).find(".cards").attr('data-activo')=='true'){


        $(this).find(".card:first-child").animate(
          {rotation: 180},
          {
            duration: 100,
            step: function(now, fx) {
              $(this).css({
                "transform": "rotateY(180deg)",
                "-webkit-transform": "rotateY(180deg)",
                "-moz-transform": "rotateY(180deg)",
                "-ms-transform": "rotateY(180deg)"
            });
            }
          }
        );


        $(this).find(".card:last-child").animate(
          {rotation: 360},
          {
            duration: 100,
            step: function(now, fx) {
              $(this).css({
                "transform": "rotateY(360deg)",
                "-webkit-transform": "rotateY(360deg)",
                "-moz-transform": "rotateY(360deg)",
                "-ms-transform": "rotateY(360deg)"
            });
            }
          }
        );

        if(abre == false){
            first_card_number = $(this).find(".cards").attr('data-number');

            identifier = $(this).find(".cards").data('identifier');
            first_type = $(this).find(".cards").data('type');

            abre = true;
            $(this).find(".cards").attr('data-activo', 'false');
        }else if(identifier == $(this).find(".cards").data('identifier') && first_type !== $(this).find(".cards").data('type')){
            second_card_number = $(this).find(".cards").attr('data-number');

            $(this).off();
            $(".cards[data-number="+first_card_number+"]").parent().off();

            $(".cards[data-number="+first_card_number+"] .calificacion .good_icon").fadeIn('normal').css('display','block');
            $(".cards[data-number="+second_card_number+"] .calificacion .good_icon").fadeIn('normal').css('display','block');

            $(".cards[data-number="+first_card_number+"] .back").find('.correct_pair_id').text(good_counter);
            $(".cards[data-number="+second_card_number+"] .back").find('.correct_pair_id').text(good_counter);

            abre = false;
            first_card_number = 0;
            second_card_number = 0;
            first_type = false;
            identifier = 0;
            good_counter = good_counter + 1;

            $("#check_answers_13_1").fadeIn("slow", function() {
                $(this).find(".cards").delay(400).fadeOut("slow");
            });
            $("#check_answers_13_1 #bien").css("display", "block");
            $("#check_answers_13_1 #mal").css("display", "none");
        }else{
            $(".cards[data-number="+first_card_number+"]").find('.turn_cards').fadeIn('normal').css('display','block');
            $(this).find(".cards .turn_cards").fadeIn('normal').css('display','block');

            for (var i=1; i <= 20; i++){
                $(".cards[data-number="+i+"]").attr('data-activo', 'false');
                $(".cards[data-number="+i+"]").css('cursor', 'auto');
            }

            $(this).find(".cards").addClass('rotated_first');
            $(".cards[data-number="+first_card_number+"]").addClass('rotated_second');

            $(".cards[data-number="+first_card_number+"] .calificacion .wrong_icon").fadeIn('normal').css('display','block');
            $(this).find(".cards .calificacion .wrong_icon").fadeIn('normal').css('display','block');

            $(".cards[data-number="+second_card_number+"] .card").delay(1100).animate(
              {rotation: 360},
              {
                duration: 100,
                step: function(now, fx) {
                  $(this).css({
                    "transform": "rotateY(360deg)",
                    "-webkit-transform": "rotateY(360deg)",
                    "-moz-transform": "rotateY(360deg)",
                    "-ms-transform": "rotateY(360deg)"
                });
                },
                complete: function() {
                    $(".cards[data-number="+second_card_number+"] .calificacion .wrong_icon").fadeOut('normal');
                    for (var i=1; i <= 20; i++){
                        $(".cards[data-number="+i+"]").attr('data-activo', 'true');
                        $(".cards[data-number="+i+"]").css('cursor', 'pointer');
                    }
                }
              }
            );
            abre = false;
            $("#check_answers_13_1").fadeIn("slow", function() {
                $(this).find(".cards").delay(400).fadeOut("slow");
            });
            $("#check_answers_13_1 #bien").css("display", "none");
            $("#check_answers_13_1 #mal").css("display", "block");
        }
    }
});

$('.turn_cards').on('click', function () {
    $('.rotated_first .card:first-child').animate(
      {rotation: 0},
      {
        duration: 100,
        step: function(now, fx) {
            $(this).css({
                "transform": "rotateY(0deg)",
                "-webkit-transform": "rotateY(0deg)",
                "-moz-transform": "rotateY(0deg)",
                "-ms-transform": "rotateY(0deg)"
            });
        },
        complete: function() {
            $(this).find(".calificacion .wrong_icon").fadeOut('normal');
            $(this).parent().removeClass('rotated_first');
        }
      }
    );

    $('.rotated_first .card:last-child').animate(
      {rotation: 180},
      {
        duration: 100,
        step: function(now, fx) {
            $(this).css({
                "transform": "rotateY(180deg)",
                "-webkit-transform": "rotateY(180deg)",
                "-moz-transform": "rotateY(180deg)",
                "-ms-transform": "rotateY(180deg)"
            });
        },
        complete: function() {
            $(this).find(".calificacion .wrong_icon").fadeOut('normal');
            $(this).parent().removeClass('rotated_first');
        }
      }
    );


    $('.rotated_second .card:first-child').animate(
      {rotation: 0},
      {
        duration: 100,
        step: function(now, fx) {
            $(this).css({
                "transform": "rotateY(0deg)",
                "-webkit-transform": "rotateY(0deg)",
                "-moz-transform": "rotateY(0deg)",
                "-ms-transform": "rotateY(0deg)"
            });
        },
        complete: function() {
            $(".cards[data-number="+first_card_number+"] .calificacion .wrong_icon").fadeOut('normal');
            for (var i=1; i <= 20; i++){
                $(".cards[data-number="+i+"]").attr('data-activo', 'true');
                $(".cards[data-number="+i+"]").css('cursor', 'pointer');
            }
            $(this).parent().removeClass('rotated_second');
        }
      }
    );

    $('.rotated_second .card:last-child').animate(
      {rotation: 180},
      {
        duration: 100,
        step: function(now, fx) {
            $(this).css({
                "transform": "rotateY(180deg)",
                "-webkit-transform": "rotateY(180deg)",
                "-moz-transform": "rotateY(180deg)",
                "-ms-transform": "rotateY(180deg)"
            });
        },
        complete: function() {
            $(".cards[data-number="+first_card_number+"] .calificacion .wrong_icon").fadeOut('normal');
            for (var i=1; i <= 20; i++){
                $(".cards[data-number="+i+"]").attr('data-activo', 'true');
                $(".cards[data-number="+i+"]").css('cursor', 'pointer');
            }
            $(this).parent().removeClass('rotated_second');
        }
      }
    );

    $('.turn_cards').fadeOut('normal');
});

$('.turn_cards').tooltip({items: "[class]"});
$('.turn_cards').tooltip({
    content: "<span class='boldP light_orange'>Girar tarjetas</span>",
    tooltipClass: "tooltip_grafico_curso",
    position: {
        within:"#parent",
        my: "center top+11",
        at: "top bottom"
    }
});
