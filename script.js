$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //go to top script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

    });

    // toggle menu/navbar upon click
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


    // Project buttons
    $('.more-btn').on('click', function(){
        $(this).parent().find('.more-text').toggleClass('active');
    });

    

    // backspace animation on homepage using script
    var typed = new Typed(".typing",{
        strings: ["Data Science Analyst", "Machine Learning Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    })

    var typed = new Typed(".typing-small",{
        strings: ["Data Science Analyst", "Machine Learning Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    })

    var typed = new Typed(".typing-major",{
        strings: ["Mathematics", "Statistics"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    })

    

});



