$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 10) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        if (this.scrollY > 10) {
          $(".whatsapp-btn").addClass("show");
        } else {
          $(".whatsapp-btn").removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
      $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // send email
    // function sendEmail(){
    //     Email.send({
    //         Host: "smtp.yourisp.com",
    //         Username: "username",
    //         Password: "password",
    //         To: "them@website.com",
    //         From: "you@isp.com",
    //         Subject: "This is the subject",
    //         Body: "And this is the body",
    //     }).then((message) => alert("mail sent successfully"));
    // }
});