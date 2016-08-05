require(['jquery'], function ($) {
    $(".le>li").on("click", function () {
        $(this).next().slideDown().siblings(".con").slideUp();
    })
    $(".l_p1 span").on("click", function () {
        $("ol").toggle();
    })

    $('.nav1').on('click', function () {
        $('.left').toggleClass("add");
    })


});