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

    $('.validation-btn').on('click', function (e) {
        var name = $('.name').val();
        var email = $('.email').val();
        var msg = $('.message').val();

        if (name == "" || name == null, email == "" || email == null, msg == "" || msg == null) {
            $('.status-msg').text("Please Fill All Required Fields");
            $('.status-msg').css("color", "red");
            $('.status-msg').show();
            return false;
        }
        else if (!validateEmail(email)) {
            $('.status-msg').text("Please Enter A Valid Email");
            $('.status-msg').css("color", "red");
            $('.status-msg').show();
            return false;
        }
        else {
            e.preventDefault();
            $.ajax({
                url: '//formspree.io/cedricfadel@hotmail.com',
                method: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function () {
                    $('.status-msg').text("Sending Message");
                    $('.status-msg').css("color", "blue");
                    $('.status-msg').show();
                },
                success: function (data) {
                    $('.status-msg').text("Message Sent");
                    $('.status-msg').css("color", "blue");
                    $('.status-msg').show();
                },
                error: function (err) {
                    $('.status-msg').text("Error sending message, Please try again");
                    $('.status-msg').css("color", "red");
                    $('.status-msg').show();
                }
            });
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}