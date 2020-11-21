;(function($){

    function toggleSidebar(element, status){
        var selector = $(element)
        selector.animate({
            width: status ? '0px' : "240px",
            left: status ? "-400px" : 0,
        }, 700 )
    }
    
    var sidebarDisplay = false;
    $("body").on("click", "#toggle-sidebar", function(e){
        e.preventDefault();
        if(sidebarDisplay){
            toggleSidebar("#left-sidebar", sidebarDisplay);
            sidebarDisplay = false;
        }else{
            toggleSidebar("#left-sidebar", sidebarDisplay);
            sidebarDisplay = true;
        }
    });

    $(".sidebar-menu > li > a").on("click", function(e){
        // if($(this).siblings('#sub-menu').length === 1){}
        $(".sidebar-menu").find(".active").not($(this)).removeClass("active").siblings("#sub-menu").slideUp(400);
        $(this).addClass("active").siblings("#sub-menu").slideToggle(500);
    });


    $(".top-menu li").on("click", function (e) {
        e.preventDefault();

        $(this).siblings().find('.option-dropdown').slideUp();
        $(this).find('.option-dropdown').slideToggle();
    });

    // $(".select2-dropdown").select2();

}(jQuery));