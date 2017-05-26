$(window).on('load', function () {
    $('.loader').fadeOut();

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-99919362-1', 'auto');
    ga('send', 'pageview');
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
            $('.status-msg').text("Please Fill All Fields");
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
            $('#formId').submit();
        }
    });

    var $contactForm = $('#formId');
    $contactForm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/cedricfadel@hotmail.com',
            method: 'POST',
            data: $('#formId').serialize(),
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
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

