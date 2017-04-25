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

    //$('.validation-btn').on('click', function () {
    //    var name = $('.name').val();
    //    var email = $('.email').val();
    //    var msg = $('.message').val();

    //    if (name == "" || name == null, email == "" || email == null, msg == "" || msg == null) {
    //        $('.error-msg').text("Please Fill All Required Fields");
    //        $('.error-msg').show();
    //    }
    //    else if (!validateEmail(email)) {
    //        $('.error-msg').text("Please Enter A Valid Email");
    //        $('.error-msg').show();
    //    }
    //    else {
    //        $('.submit').click();
    //    }
    //});
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}