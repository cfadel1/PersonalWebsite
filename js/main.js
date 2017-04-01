$(window).on('load', function () {
   $('.loader').fadeOut();
});

$(document).ready(function () {
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

    //$("#first_name").on("focusin", function () {
    //    $('#first_name').addClass('fieldClicked');
    //});

    //$("#last_name").on("focusin", function () {
    //    $('#first_name').addClass('fieldClicked');
    //});
    //$("#email").on("focusin", function () {
    //    $('#first_name').addClass('fieldClicked');
    //});
    //$("#message").on("focusin", function () {
    //    $('#first_name').addClass('fieldClicked');
    //});
});