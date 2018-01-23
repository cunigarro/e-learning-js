/*--No configurar esta parte--*/
var array_width = new Array();
var array_height = new Array();
$(".crossword tr td").each(function(index) {
    if($(this).html()=="&nbsp;" && $(this).hasClass('black_box')!=true){
        $(this).css("border","thin solid #BBB");
        $(this).html("<input class='box_crossword' size='1' maxlength='1' type='text'/>");
    }else if($(this).html()=="&nbsp;" && $(this).hasClass('black_box')==true){
    	$(this).css("border","thin solid #BBB");
    	$(this).html("<input value=' ' class='box_crossword' size='1' maxlength='1' type='text' disabled='disabled'/>");
    }
});

/*--Activity 1 page 11--*/
$('#answers_11_1').hide();
$("#reset_answers_11_1").hide();
$("#check_answers_11_1").css('position','relative');

var word_1 = new Array();
var word_2 = new Array();
var word_3 = new Array();
var word_4 = new Array();
var word_5 = new Array();
var word_6 = new Array();
var word_7 = new Array();
var word_8 = new Array();
var word_9 = new Array();
var word_10 = new Array();
var word_11 = new Array();
var word_12 = new Array();

var string_word_1 = '';
var string_word_2 = '';
var string_word_3 = '';
var string_word_4 = '';
var string_word_5 = '';
var string_word_6 = '';
var string_word_7 = '';
var string_word_8 = '';
var string_word_9 = '';
var string_word_10 = '';
var string_word_11 = '';
var string_word_12 = '';

for (var i = 1; i <= 12; i++) {
    $(".word_"+ i +"_1 input").before("<div id='word_"+ i +"'>"+ i +"</div>");
    $("#word_"+i).css({
        "font-size":8,
        "position":"absolute",
        "margin-left":1,
        "margin-top":1
    });
}

$("#check_answers_11_1").click(function () {

    word_1 = [];
    word_2 = [];
    word_3 = [];
    word_4 = [];
    word_5 = [];
    word_6 = [];
    word_7 = [];
    word_8 = [];
    word_9 = [];
    word_10 = [];
    word_11 = [];
    word_12 = [];

	for (var i = 1; i <= 15; i++) {
		word_1.push($(".word_1_" + i + " .box_crossword").val());
	};
	string_word_1 = word_1.join("");

	for (var i = 1; i <= 16; i++) {
		word_2.push($(".word_2_" + i + " .box_crossword").val());
	};
	string_word_2 = word_2.join("");

	for (var i = 1; i <= 16; i++) {
		word_3.push($(".word_3_" + i + " .box_crossword").val());
	};
	string_word_3 = word_3.join("");

	for (var i = 1; i <= 7; i++) {
		word_4.push($(".word_4_" + i + " .box_crossword").val());
	};
	string_word_4 = word_4.join("");

	for (var i = 1; i <= 10; i++) {
		word_5.push($(".word_5_" + i + " .box_crossword").val());
	};
	string_word_5 = word_5.join("");

	for (var i = 1; i <= 10; i++) {
		word_6.push($(".word_6_" + i + " .box_crossword").val());
	};
	string_word_6 = word_6.join("");

	for (var i = 1; i <= 9; i++) {
		word_7.push($(".word_7_" + i + " .box_crossword").val());
	};
	string_word_7 = word_7.join("");

	for (var i = 1; i <= 6; i++) {
		word_8.push($(".word_8_" + i + " .box_crossword").val());
	};
	string_word_8 = word_8.join("");

	for (var i = 1; i <= 11; i++) {
		word_9.push($(".word_9_" + i + " .box_crossword").val());
	};
	string_word_9 = word_9.join("");

	for (var i = 1; i <= 10; i++) {
		word_10.push($(".word_10_" + i + " .box_crossword").val());
	};
	string_word_10 = word_10.join("");

	for (var i = 1; i <= 4; i++) {
		word_11.push($(".word_11_" + i + " .box_crossword").val());
	};
	string_word_11 = word_11.join("");

	for (var i = 1; i <= 8; i++) {
		word_12.push($(".word_12_" + i + " .box_crossword").val());
	};
	string_word_12 = word_12.join("");

    $(".crossword span").addClass('activity_span_crossword');

    if(string_word_1 == "savings account" && string_word_1.length > 1) {
        $("#eval_1").fadeIn("normal").css("display","inline-block");
        $("#eval_1 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_1 .wrong_icon").css("display","none");
    }else if(string_word_1 != "savings account" && string_word_1.length > 1) {
        $("#eval_1").fadeIn("normal").css("display","inline-block");
        $("#eval_1 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_1 .good_icon").css("display","none");
    }else if(string_word_1.length == 0) {
        $("#eval_1 .good_icon").fadeOut("normal");
        $("#eval_1 .wrong_icon").fadeOut("normal");
    };

    if(string_word_2 == "checking account" && string_word_2.length > 1){
        $("#eval_2").fadeIn("normal").css("display","inline-block");
        $("#eval_2 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_2 .wrong_icon").css("display","none");
    }else if(string_word_2 != "checking account" && string_word_2.length > 1){
        $("#eval_2").fadeIn("normal").css("display","inline-block");
        $("#eval_2 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_2 .good_icon").css("display","none");
    }else if(string_word_2.length == 0){
        $("#eval_2 .good_icon").fadeOut("normal");
        $("#eval_2 .wrong_icon").fadeOut("normal");
    };

    if(string_word_3 == "close an account" && string_word_3.length > 2){
        $("#eval_3").fadeIn("normal").css("display","inline-block");
        $("#eval_3 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_3 .wrong_icon").css("display","none");
    }else if(string_word_3 != "close an account" && string_word_3.length > 2){
        $("#eval_3").fadeIn("normal").css("display","inline-block");
        $("#eval_3 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_3 .good_icon").css("display","none");
    }else if(string_word_3.length == 0){
        $("#eval_3 .good_icon").fadeOut("normal");
        $("#eval_3 .wrong_icon").fadeOut("normal");
    };

    if(string_word_4 == "deposit" && string_word_4.length > 0) {
        $("#eval_4").fadeIn("normal").css("display","inline-block");
        $("#eval_4 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_4 .wrong_icon").css("display","none");
    }else if(string_word_4 != "deposit" && string_word_4.length > 0) {
        $("#eval_4").fadeIn("normal").css("display","inline-block");
        $("#eval_4 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_4 .good_icon").css("display","none");
    }else if(string_word_4.length == 0) {
        $("#eval_4 .good_icon").fadeOut("normal");
        $("#eval_4 .wrong_icon").fadeOut("normal");
    };

    if(string_word_5 == "withdrawal" && string_word_5.length > 0) {
        $("#eval_5").fadeIn("normal").css("display","inline-block");
        $("#eval_5 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_5 .wrong_icon").css("display","none");
    } else if(string_word_5 != "withdrawal" && string_word_5.length > 0) {
        $("#eval_5").fadeIn("normal").css("display","inline-block");
        $("#eval_5 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_5 .good_icon").css("display","none");
    } else if(string_word_5.length == 0) {
        $("#eval_5 .good_icon").fadeOut("normal");
        $("#eval_5 .wrong_icon").fadeOut("normal");
    };

    if(string_word_6 == "debit card" && string_word_6.length > 1){
        $("#eval_6").fadeIn("normal").css("display","inline-block");
        $("#eval_6 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_6 .wrong_icon").css("display","none");
    } else if(string_word_6 != "debit card" && string_word_6.length > 1){
        $("#eval_6").fadeIn("normal").css("display","inline-block");
        $("#eval_6 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_6 .good_icon").css("display","none");
    } else if(string_word_6.length==0) {
        $("#eval_6 .good_icon").fadeOut("normal");
        $("#eval_6 .wrong_icon").fadeOut("normal");
    };

    if(string_word_7 == "signature" && string_word_7.length > 0){
        $("#eval_7").fadeIn("normal").css("display","inline-block");
        $("#eval_7 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_7 .wrong_icon").css("display","none");
    } else if(string_word_7 != "signature" && string_word_7.length > 0){
        $("#eval_7").fadeIn("normal").css("display","inline-block");
        $("#eval_7 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_7 .good_icon").css("display","none");
    } else if(string_word_7.length==0) {
        $("#eval_7 .good_icon").fadeOut("normal");
        $("#eval_7 .wrong_icon").fadeOut("normal");
    };

    if(string_word_8 == "teller" && string_word_8.length > 0){
        $("#eval_8").fadeIn("normal").css("display","inline-block");
        $("#eval_8 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_8 .wrong_icon").css("display","none");
    } else if(string_word_8 != "teller" && string_word_8.length > 0){
        $("#eval_8").fadeIn("normal").css("display","inline-block");
        $("#eval_8 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_8 .good_icon").css("display","none");
    } else if(string_word_8.length==0) {
        $("#eval_8 .good_icon").fadeOut("normal");
        $("#eval_8 .wrong_icon").fadeOut("normal");
    };

    if(string_word_9 == "credit card" && string_word_9.length > 1){
        $("#eval_9").fadeIn("normal").css("display","inline-block");
        $("#eval_9 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_9 .wrong_icon").css("display","none");
    } else if(string_word_9 != "credit card" && string_word_9.length > 1){
        $("#eval_9").fadeIn("normal").css("display","inline-block");
        $("#eval_9 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_9 .good_icon").css("display","none");
    } else if(string_word_9.length==0) {
        $("#eval_9 .good_icon").fadeOut("normal");
        $("#eval_9 .wrong_icon").fadeOut("normal");
    };

    if(string_word_10 == "right away" && string_word_10.length > 1){
        $("#eval_10").fadeIn("normal").css("display","inline-block");
        $("#eval_10 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_10 .wrong_icon").css("display","none");
    } else if(string_word_10 != "right away" && string_word_10.length > 1){
        $("#eval_10").fadeIn("normal").css("display","inline-block");
        $("#eval_10 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_10 .good_icon").css("display","none");
    } else if(string_word_10.length==0) {
        $("#eval_10 .good_icon").fadeOut("normal");
        $("#eval_10 .wrong_icon").fadeOut("normal");
    };

    if(string_word_11 == "cash" && string_word_11.length > 0){
        $("#eval_11").fadeIn("normal").css("display","inline-block");
        $("#eval_11 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_11 .wrong_icon").css("display","none");
    } else if(string_word_11 != "cash" && string_word_11.length > 0){
        $("#eval_11").fadeIn("normal").css("display","inline-block");
        $("#eval_11 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_11 .good_icon").css("display","none");
    } else if(string_word_11.length==0) {
        $("#eval_11 .good_icon").fadeOut("normal");
        $("#eval_11 .wrong_icon").fadeOut("normal");
    };

    if(string_word_12 == "passport" && string_word_12.length > 0){
        $("#eval_12").fadeIn("normal").css("display","inline-block");
        $("#eval_12 .good_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_12 .wrong_icon").css("display","none");
    } else if(string_word_12 != "passport" && string_word_12.length > 0){
        $("#eval_12").fadeIn("normal").css("display","inline-block");
        $("#eval_12 .wrong_icon").fadeIn("normal").css("display","inline-block");
        $("#eval_12 .good_icon").css("display","none");
    } else if(string_word_12.length==0) {
        $("#eval_12 .good_icon").fadeOut("normal");
        $("#eval_12 .wrong_icon").fadeOut("normal");
    };

    if(string_word_1.length > 1 || string_word_2.length > 1 || string_word_3.length > 2 || string_word_4.length > 0 || string_word_5.length > 0 || string_word_6.length > 1 || string_word_7.length > 0 || string_word_8.length > 0 || string_word_9.length > 1 || string_word_10.length > 1 || string_word_11.length > 0 || string_word_12.length > 0){
        $('#answers_11_1').fadeIn();
        $("#reset_answers_11_1").css({
            'position':'relative',
            'display':'inline-block'
        });
        $("#reset_answers_11_1").fadeIn();
        if(string_word_1 == "savings account" && string_word_2 == "checking account" && string_word_3 == "close an account" && string_word_4 == "deposit" && string_word_5 == "withdrawal" && string_word_6 == "debit card" && string_word_7 == "signature" && string_word_8 == "teller" && string_word_9 == "credit card" && string_word_10 == "right away" && string_word_11 == "cash" && string_word_12 == "passport"){
            $('#check_answers_11_1').css('display', 'none');
        }
    }

});

$('#reset_answers_11_1').click(function () {
    word_1 = [];
    word_2 = [];
    word_3 = [];
    word_4 = [];
    word_5 = [];
    word_6 = [];
    word_7 = [];
    word_8 = [];
    word_9 = [];
    word_10 = [];
    word_11 = [];
    word_12 = [];

    string_word_1 = '';
    string_word_2 = '';
    string_word_3 = '';
    string_word_4 = '';
    string_word_5 = '';
    string_word_6 = '';
    string_word_7 = '';
    string_word_8 = '';
    string_word_9 = '';
    string_word_10 = '';
    string_word_11 = '';
    string_word_12 = '';

    $('.box_crossword').css('color','#000');
    $('.box_crossword').val('');
    $('.black_box .box_crossword').val(' ');
    $(".crossword span").fadeOut('normal');
    $('#answers_11_1').hide();
    $(this).hide();
    $('#check_answers_11_1').fadeIn();

});

$("#answers_11_1").click(function () {
    if(string_word_1.length > 1){
        string_word_1 = 'savings account';
        word_1 = string_word_1.split('');
        for (var i = 1; i <= 15; i++) {
            if($(".word_1_" + i + " .box_crossword").val().length >= 1){
                $(".word_1_" + i + " .box_crossword").val(word_1[i-1]);
                $(".word_1_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_2.length > 1){
        string_word_2 = 'checking account';
        word_2 = string_word_2.split('');
        for (var i = 1; i <= 16; i++) {
            if($(".word_2_" + i + " .box_crossword").val().length >= 1){
                $(".word_2_" + i + " .box_crossword").val(word_2[i-1]);
                $(".word_2_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_3.length > 2){
        string_word_3 = 'close an account';
        word_3 = string_word_3.split('');
        for (var i = 1; i <= 16; i++) {
            if($(".word_3_" + i + " .box_crossword").val().length >= 1){
                $(".word_3_" + i + " .box_crossword").val(word_3[i-1]);
                $(".word_3_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_4.length > 0){
        string_word_4 = 'deposit';
        word_4 = string_word_4.split('');
        for (var i = 1; i <= 7; i++) {
            if($(".word_4_" + i + " .box_crossword").val().length >= 1){
                $(".word_4_" + i + " .box_crossword").val(word_4[i-1]);
                $(".word_4_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_5.length > 0){
        string_word_5 = 'withdrawal';
        word_5 = string_word_5.split('');
        for (var i = 1; i <= 10; i++) {
            if($(".word_5_" + i + " .box_crossword").val().length >= 1){
                $(".word_5_" + i + " .box_crossword").val(word_5[i-1]);
                $(".word_5_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_6.length > 1){
        string_word_6 = 'debit card';
        word_6 = string_word_6.split('');
        for (var i = 1; i <= 10; i++) {
            if($(".word_6_" + i + " .box_crossword").val().length >= 1){
                $(".word_6_" + i + " .box_crossword").val(word_6[i-1]);
                $(".word_6_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_7.length > 0){
        string_word_7 = 'signature';
        word_7 = string_word_7.split('');
        for (var i = 1; i <= 9; i++) {
            if($(".word_7_" + i + " .box_crossword").val().length >= 1){
                $(".word_7_" + i + " .box_crossword").val(word_7[i-1]);
                $(".word_7_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_8.length > 0){
        string_word_8 = 'teller';
        word_8 = string_word_8.split('');
        for (var i = 1; i <= 6; i++) {
            if($(".word_8_" + i + " .box_crossword").val().length >= 1){
                $(".word_8_" + i + " .box_crossword").val(word_8[i-1]);
                $(".word_8_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_9.length > 1){
        string_word_9 = 'credit card';
        word_9 = string_word_9.split('');
        for (var i = 1; i <= 11; i++) {
            if($(".word_9_" + i + " .box_crossword").val().length >= 1){
                $(".word_9_" + i + " .box_crossword").val(word_9[i-1]);
                $(".word_9_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_10.length > 1){
        string_word_10 = 'right away';
        word_10 = string_word_10.split('');
        for (var i = 1; i <= 10; i++) {
            if($(".word_10_" + i + " .box_crossword").val().length >= 1){
                $(".word_10_" + i + " .box_crossword").val(word_10[i-1]);
                $(".word_10_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_11.length > 0){
        string_word_11 = 'cash';
        word_11 = string_word_11.split('');
        for (var i = 1; i <= 4; i++) {
            if($(".word_11_" + i + " .box_crossword").val().length >= 1){
                $(".word_11_" + i + " .box_crossword").val(word_11[i-1]);
                $(".word_11_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    if(string_word_12.length > 0){
        string_word_12 = 'passport';
        word_12 = string_word_12.split('');
        for (var i = 1; i <= 8; i++) {
            if($(".word_12_" + i + " .box_crossword").val().length >= 1){
                $(".word_12_" + i + " .box_crossword").val(word_12[i-1]);
                $(".word_12_" + i + " .box_crossword").css('color','#00B050');
            }
        };
    }
    $(".crossword span").fadeOut('normal');
});
/*--Activity 1 page 16--*/