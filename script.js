
   $(document).ready(function(){
        $(window).scroll(function(){
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });

        //typing animation script
        var typed = new Typed(" .typing", {
            strings: ["Sports", "Web Development", "Programming"],  //very case sensative Strings(carefully)
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        var typed = new Typed(" .typing2", {
            strings: ["Student", "Web Developer", "Programmer"],  //very case sensative Strings(carefully)
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });




        // slide-up button      // not working
        $(' .scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
        });

        //toggle menu/navbar ScriptProcessorNode
        $(' .menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");   //cross daal diya
        });
    });

