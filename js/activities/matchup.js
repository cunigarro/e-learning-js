/*--Page 13 activity 1--*/
$('#answers_2_2').hide();
$("#reset_answers_2_2").hide();
$("#check_answers_2_2").css('position','relative');

    var option_2_1_1 = 0;
    var option_2_1_2 = 0;
    var option_2_1_3 = 0;
    var option_2_1_4 = 0;

    var option_2_2_1 = 0;
    var option_2_2_2 = 0;
    var option_2_2_3 = 0;
    var option_2_2_4 = 0;

    var origen_2_1 = 0;
    var origen_2_2 = 0;
    var origen_2_3 = 0;
    var origen_2_4 = 0;

    var exampleDropOptions = {
        tolerance:"touch",
        hoverClass:"dropHover",
        activeClass:"dragActive"
    };

    var colorconector1 = "#fcc062";
    var colorconector2 = "#fcc062";

function load_jsplumb() {

      jsPlumb.addEndpoint($('.state_1_1'), {
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomRight",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_2_4") {
                option_2_1_1 = 1;
                origen_2_4 = 1;
            } else if(params.sourceId != "item_2_4") {
                option_2_1_1 = 2;
                if (params.sourceId == "item_2_1") {
                    origen_2_1 = 1;
                } else if (params.sourceId == "item_2_2") {
                    origen_2_2 = 1;
                } else if (params.sourceId == "item_2_3") {
                    origen_2_3 = 1;
                } else if (params.sourceId == "item_2_4") {
                    origen_2_4 = 1;
                }
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_1_2'), {
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomRight",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_2_2") {
                option_2_1_2 = 1;
                origen_2_2 = 1;
            } else if(params.sourceId != "item_2_2") {
                option_2_1_2 = 2;
                if (params.sourceId == "item_2_1") {
                    origen_2_1 = 1;
                } else if (params.sourceId == "item_2_2") {
                    origen_2_2 = 1;
                } else if (params.sourceId == "item_2_3") {
                    origen_2_3 = 1;
                } else if (params.sourceId == "item_2_4") {
                    origen_2_4 = 1;
                }
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_1_3'), {
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomRight",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_2_1") {
                option_2_1_3 = 1;
                origen_2_1 = 1;
            } else if(params.sourceId != "item_2_1") {
                option_2_1_3 = 2;
                if (params.sourceId == "item_2_1") {
                    origen_2_1 = 1;
                } else if (params.sourceId == "item_2_2") {
                    origen_2_2 = 1;
                } else if (params.sourceId == "item_2_3") {
                    origen_2_3 = 1;
                } else if (params.sourceId == "item_2_4") {
                    origen_2_4 = 1;
                }
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_1_4'), {
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomRight",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_2_3") {
                option_2_1_4 = 1;
                origen_2_3 = 1;
            } else if(params.sourceId != "item_2_3") {
                option_2_1_4 = 2;
                if (params.sourceId == "item_2_1") {
                    origen_2_1 = 1;
                } else if (params.sourceId == "item_2_2") {
                    origen_2_2 = 1;
                } else if (params.sourceId == "item_2_3") {
                    origen_2_3 = 1;
                } else if (params.sourceId == "item_2_4") {
                    origen_2_4 = 1;
                }
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_2_1'), { 
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomLeft",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) { 
            if(params.sourceId == "item_1_3") {
                option_2_2_1 = 1;
            } else if(params.sourceId != "item_1_3") {
                option_2_2_1 = 2;
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_2_2'), { 
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomLeft",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_1_2") {
                option_2_2_2 = 1;
            } else if (params.sourceId != "item_1_2") {
                option_2_2_2 = 2;
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_2_3'), { 
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomLeft",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) { 
            if(params.sourceId == "item_1_4") {
                option_2_2_3 = 1;
            } else if(params.sourceId != "item_1_4") {
                option_2_2_3 = 2;
            }
            params.preventDefault();
        }
      });

      jsPlumb.addEndpoint($('.state_2_4'), { 
        endpoint:["Dot", {radius:10} ],
        anchor:"BottomLeft",
        paintStyle:{ fillStyle:colorconector1, opacity:0.5 },
        isSource:true,
        scope:'yellow',
        connectorStyle:{ strokeStyle:colorconector1, lineWidth:3 },
        connector : "Straight",
        isTarget:true,
        dropOptions : exampleDropOptions,
        beforeDrop:function(params) {
            if(params.sourceId == "item_1_1") {
                option_2_2_4 = 1;
            } else if (params.sourceId != "item_1_1") {
                option_2_2_4 = 2;
            }
            params.preventDefault();
        }
      });

    $("#check_answers_2_2").click(function () {

        /*-- Bad answers --*/
        /*-- column_1 > column_2 --*/
        if((option_2_1_1 == 2 || option_2_1_2 == 2 || option_2_1_3 == 2 || option_2_1_4 == 2) && origen_2_1 == 1) {
            $("#wrong_2_1").fadeIn("normal").css("display","inline-block");
            $("#good_2_1").css("display","none");
        }

        if((option_2_1_1 == 2 || option_2_1_2 == 2 || option_2_1_3 == 2 || option_2_1_4 == 2) && origen_2_2 == 1) {
            $("#wrong_2_2").fadeIn("normal").css("display","inline-block");
            $("#good_2_2").css("display","none");
        }

        if((option_2_1_1 == 2 || option_2_1_2 == 2 || option_2_1_3 == 2 || option_2_1_4 == 2) && origen_2_3 == 1) {
            $("#wrong_2_3").fadeIn("normal").css("display","inline-block");
            $("#good_2_3").css("display","none");
        }

        if((option_2_1_1 == 2 || option_2_1_2 == 2 || option_2_1_3 == 2 || option_2_1_4 == 2) && origen_2_4 == 1) {
            $("#wrong_2_4").fadeIn("normal").css("display","inline-block");
            $("#good_2_4").css("display","none");
        }

        /*-- column_1 > column_2 --*/

        if(option_2_1_1 == 1 && origen_2_4 == 1) {
            $("#good_2_4").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_4").css("display","none");
        }
        if(option_2_1_2 == 1 && origen_2_2 == 1) {
            $("#good_2_2").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_2").css("display","none");
        }
        if(option_2_1_3 == 1 && origen_2_1 == 1) {
            $("#good_2_1").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_1").css("display","none");
        }
        if(option_2_1_4 == 1 && origen_2_3 == 1) {
            $("#good_2_3").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_3").css("display","none");
        }

        /*-- column_1 > column_2 --*/

        if(option_2_1_3 == 1 && origen_2_4 == 1) {
            $("#good_2_5").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_5").css("display","none");
        }

        if(option_2_1_4 == 1 && origen_2_1 == 1) {
            $("#good_2_1").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_1").css("display","none");
        }

        if(option_2_1_4 == 1 && origen_2_2 == 1) {
            $("#good_2_2").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_2").css("display","none");
        }

        /*-- column_2 > column_1 --*/
        if(option_2_2_1 == 1) {
            $("#good_2_1").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_1").css("display","none");
        }else if(option_2_2_1 == 2) {
            $("#wrong_2_1").fadeIn("normal").css("display","inline-block");
            $("#good_2_1").css("display","none");
        }

        if(option_2_2_2 == 1) {
            $("#good_2_2").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_2").css("display","none");
        }else if(option_2_2_2 == 2) {
            $("#wrong_2_2").fadeIn("normal").css("display","inline-block");
            $("#good_2_2").css("display","none");
        }

        if(option_2_2_3 == 1) {
            $("#good_2_3").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_3").css("display","none");
        }else if(option_2_2_3 == 2) {
            $("#wrong_2_3").fadeIn("normal").css("display","inline-block");
            $("#good_2_3").css("display","none");
        }

        if(option_2_2_4 == 1) {
            $("#good_2_4").fadeIn("normal").css("display","inline-block");
            $("#wrong_2_4").css("display","none");
        }else if(option_2_2_4 == 2) {
            $("#wrong_2_4").fadeIn("normal").css("display","inline-block");
            $("#good_2_4").css("display","none");
        }

        //$('#answers_2_2').fadeIn();
        $("#reset_answers_2_2").fadeIn();
        $(".mensaje_final").fadeIn();

});

    $("#reset_answers_2_2").click(function () {

        jsPlumb.detachAllConnections('item_1_1');
        jsPlumb.detachAllConnections('item_1_2');
        jsPlumb.detachAllConnections('item_1_3');
        jsPlumb.detachAllConnections('item_1_4');

        jsPlumb.detachAllConnections('item_2_1');
        jsPlumb.detachAllConnections('item_2_2');
        jsPlumb.detachAllConnections('item_2_3');
        jsPlumb.detachAllConnections('item_2_4');

        option_2_1_1 = 0;
        option_2_1_2 = 0;
        option_2_1_3 = 0;
        option_2_1_4 = 0;
        
        option_2_2_1 = 0;
        option_2_2_2 = 0;
        option_2_2_3 = 0;
        option_2_2_4 = 0;

        origen_2_1 = 0;
        origen_2_2 = 0;
        origen_2_3 = 0;
        origen_2_4 = 0;

        for(i = 1; i <= 4; i += 1){
            $('#good_2_' + i).fadeOut('normal');
            $('#wrong_2_' + i).fadeOut('normal');
        }

        $('#answers_2_2').fadeOut();
        $(this).fadeOut();
        $('#check_answers_2_2').fadeIn();
        $(".mensaje_final").fadeOut();

    });

}

$(document).on('ready', function(){
    load_jsplumb();
});
/*--Page 13 activity 1--*/
