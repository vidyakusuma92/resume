//$('.parallax-window').parallax({imageSrc: 'https://static.pexels.com/photos/5770/leaf-spring-leaves-plants.jpg'});
$('.parallax-window').parallax({imageSrc: 'https://static.pexels.com/photos/26920/pexels-photo.jpg'});
$('.parallax-window-second').parallax({imageSrc: ''});
$('.parallax-window-third').parallax({imageSrc: 'https://static.pexels.com/photos/6675/flight-mountains-sky-flying.jpeg'});
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
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
