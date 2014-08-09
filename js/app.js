var clock;
var m ;
var s;
		
$(document).ready(function() {
    $("#row-final, #row-clock").hide();
    $("#btnInit").click(init);

    $('.start').click(function(e) {
        clock.start();
    });
    alignMiddle();
    $( window ).resize(alignMiddle);

});

function init(e){
    e.preventDefault();
    e.stopPropagation();
    $("#final-message").html($("#inputMessage").val());
    m = parseInt($("#inputMin").val()) || 0;
    s = parseInt($("#inputSec").val()) || 0;
    $("#row-config").fadeOut();
    $("#row-clock").fadeIn({
        complete: function(e){
             clock = $('.clock').FlipClock((m*60)+s, {
                clockFace: 'MinuteCounter',
                countdown: true,
                autoStart: true,
                callbacks: {
                    stop: function() {
                         $("#row-clock").fadeOut({
                             complete: function(e){
                                   $("#row-final").fadeIn();
                             }
                         });
                    }
                }
            });
        }
    })
}

function alignMiddle(e){
    var r =$('#main-container').height();
    var t = ( window.innerHeight - r) >>1;
    $('#main-container').css({
        'margin-top':t+ 'px'
    });
}

   