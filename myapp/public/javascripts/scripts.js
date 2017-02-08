//$('.parallax-window').parallax({imageSrc: 'https://static.pexels.com/photos/5770/leaf-spring-leaves-plants.jpg'});
$('.parallax-window').parallax({imageSrc: 'http://localhost:3000/images/mountain.jpg'});
$('.parallax-window-second').parallax({imageSrc: 'https://static.pexels.com/photos/6088/wood-forest-fire-fireplace.jpg'});
$(function(){
        $(".element").typed({
            strings: ["Frontend Developer.", "Vidya Kusuma"],
            typeSpeed: 50,
            cursorChar: "|",
            loop: false,
            loopcount: false,
            showCursor: true,
            backDelay: 4000

        });
    });
$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html', 'body').animate({
        scrollTop: $().offset($.attr(this, 'href')).offset().top
        }, 500);
});
