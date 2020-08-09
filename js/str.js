$(document).ready(function () {
    $('.heading li').click(function (e) { 
        $(this).addClass('ok').siblings().removeClass('ok')
    });
    $('.on').click(function (e) { 
        e.preventDefault();
        $(".flex_column_item1").fadeOut(1000);
        $(".flex_column_item2").fadeIn(1000);
        
        
    });
    $('.on1').click(function (e) {
        e.preventDefault();
        
        $(".flex_column_item2").fadeOut(1000);
        $(".flex_column_item1").fadeOut(1000);



    });
    $('.on2').click(function (e) {
        e.preventDefault();
        $(".flex_column_item1,.flex_column_item2").fadeIn(1000);


    });
});
