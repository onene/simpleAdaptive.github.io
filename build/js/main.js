$(document).ready(function() {
    $('.header-top__menu_toogle').on('click', function() {
        $('#menu').slideToggle(300, function() {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style')
            }
        });
    });

    $('.sl').slick({
        infinite: true,
        dots: true
    });

    $('.sldr').slick({
        infinite: true,
        dots: true
    });



});
$(document).ready(function() {
    $('.know1').on('click', function() {
        event.preventDefault()
        $('.services_row1__item1__blue').css({
            "display": "block"

        })
    });
    $('.hide1').on('click', function() {
        event.preventDefault()
        $('.services_row1__item1__blue').css({
            "display": "none"

        })
    });
    $('.know2').on('click', function() {
        event.preventDefault()
        $('.services_row1__item2__blue').css({
            "display": "block"

        })
    });
    $('.hide2').on('click', function() {
        event.preventDefault()
        $('.services_row1__item2__blue').css({
            "display": "none"

        })
    })
    $('.know3').on('click', function() {
        event.preventDefault()
        $('.services_row2__item1__blue').css({
            "display": "block"

        })
    });
    $('.hide3').on('click', function() {
        event.preventDefault()
        $('.services_row2__item1__blue').css({
            "display": "none"

        })
    });
    $('.know4').on('click', function() {
        event.preventDefault()
        $('.services_row2__item2__blue').css({
            "display": "block"

        })
    });
    $('.hide4').on('click', function() {
        event.preventDefault()
        $('.services_row2__item2__blue').css({
            "display": "none"

        })
    });
    $('.know5').on('click', function() {
        event.preventDefault()
        $('.services_row3__item1__blue').css({
            "display": "block"

        })
    });
    $('.hide5').on('click', function() {
        event.preventDefault()
        $('.services_row3__item1__blue').css({
            "display": "none"

        })
    });
    $('.know6').on('click', function() {
        event.preventDefault()
        $('.services_row3__item2__blue').css({
            "display": "block"

        })
    });
    $('.hide6').on('click', function() {
        event.preventDefault()
        $('.services_row3__item2__blue').css({
            "display": "none"

        })
    });


});