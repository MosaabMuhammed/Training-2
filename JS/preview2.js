$(function(){
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#F76110',
        cursorwidth: 6
    });  // trigger the nicescroll
    // setting the height of window
    $('.header, .layout').height( $(window).height() );
    // settign the transition of the arrow
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    $('.show-more').click(function(){
        $('.pics .hidden').toggle('slow');
        if($('.pics .hidden').css('display') === 'none'){
            $('.show-more').text('show less');
        } else {
            $('.show-more').text('show more');
        }
    });
    // check clints and dynamic the arrows
    var right = $(".testi .fa-chevron-right"),
        left = $(".testi .fa-chevron-left");
    function checkClints() {
        if($('.clinet:first-of-type').hasClass('active')){
            left.fadeOut('fast');
        } else {
            left.fadeIn('fast');
        }
        if($('.clinet:last-of-type').hasClass('active')){
            right.fadeOut('fast');
        } else {
            right.fadeIn('fast');
        }
    }
    checkClints();
    $(".testi i").click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testi .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.clinet').addClass('active').fadeIn();
                checkClints();
            });
        } else {
            $('.testi .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.clinet').addClass('active').fadeIn();
                checkClints();
            });
        }
    });
    checkClints();
    /// sellect the balls of a specific person
    $('.d1').mouseenter(function(){
        $('.l1').css("background-color", "#F76110");
    });
    $('.d1').mouseleave(function(){
        $('.l1').css("background-color", 'white');
    });
    $('.d2').mouseenter(function(){
        $('.l2').css("background-color", "#F76110");
    });
    $('.d2').mouseleave(function(){
        $('.l2').css("background-color", 'white');
    });

    $('.d3').mouseenter(function(){
        $('.l3').css("background-color", "#F76110");
    });
    $('.d3').mouseleave(function(){
        $('.l3').css("background-color", 'white');
    });

    $('.d4').mouseenter(function(){
        $('.l4').css("background-color", "#F76110");
    });
    $('.d4').mouseleave(function(){
        $('.l4').css("background-color", 'white');
    });


});
