//$('.parallax-window').parallax({imageSrc: 'https://static.pexels.com/photos/25900/pexels-photo-25900.jpg'});
$('.parallax-window').parallax({imageSrc: '/images/pexels1.jpg'});
$('.parallax-window-second').parallax({imageSrc: ''});
$('.parallax-window-third').parallax({imageSrc: '/images/parallax-two.jpg'});
$(function(){
        $(".element").typed({
            strings: ["Hi, I'm Vidya", "I love anything design", "I create experiences", "Hi, I'm Vidya"],
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
$('body').scrollspy({ target: '#navMain' })
function sendMessage(data){
    console.log(data);
    var formdata = data;
    var theUrl = "mailto:vidyakusuma92@gmail.com?subject=" + data.subject.value + "&body=" + data.body.value + "%0A" + data.firstname.value + "%0A" + data.email.value;
    window.location.href=theUrl;
    return false;
}
