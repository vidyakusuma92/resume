//$('.parallax-window').parallax({imageSrc: 'https://static.pexels.com/photos/5770/leaf-spring-leaves-plants.jpg'});
$('.parallax-window').parallax({imageSrc: 'http://localhost:3000/images/pexels.jpg'});
$('.parallax-window-second').parallax({imageSrc: ''});
$('.parallax-window-third').parallax({imageSrc: 'http://localhost:3000/images/parallax-two.jpg'});
$(function(){
        $(".element").typed({
            strings: ["Hi, I'm Vidya", "I love arts and design", "I develop frontend", "I am a creative", "Hi, I'm Vidya"],
            typeSpeed: 50,
            cursorChar: "|",
            loop: false,
            loopcount: false,
            showCursor: true,
            backDelay: 2000

        });
    });
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
