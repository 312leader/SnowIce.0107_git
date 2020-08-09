$(document).ready(function () {
    


function revealOnScroll() {
    var scrolled = $(window).scrollTop();
    
        

        $(".leftIn").each(function(){
            var current = $(this), 
            w_height = $(window).outerHeight(), 
            offsetTop = current.offset().top; 

            
             if (scrolled + w_height > offsetTop) {
            current.addClass("fadeInLeft");
            } else {
            current.removeClass("fadeInLeft");
            } 
        });

        $(".rightIn").each(function(){
            var current = $(this), 
            w_height = $(window).outerHeight(), 
            offsetTop = current.offset().top; 
            if (scrolled + w_height > offsetTop) {
            current.addClass("fadeInRight");
            } else {
            current.removeClass("fadeInRight");
            }
        });
    }
$(window).on("scroll", revealOnScroll);






});