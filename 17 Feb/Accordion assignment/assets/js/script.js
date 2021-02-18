// create an accordion using jQuery

// this function handles working of accordion where multiple flaps can remain open at a time
$(document).ready(function () {
    $('.toggle1').click(function () {
        var textElement = $(this).parent().find('.text1');
        textElement.slideToggle();

        var iconElement = $(this).find('i');
        if (iconElement.hasClass('fa-chevron-down'))
            iconElement.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        else
            iconElement.removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
});


// this function handles working of accordion where only one flap can remain open at a time
$(document).ready(function () {
    $('.toggle2').click(function () {
        var textElement = $(this).parent().find('.text2');
        var iconElement = $(this).find('i');
        if (iconElement.hasClass('fa-chevron-down')) {
            // change all up to down
            $('.toggle2').find('i').each(function () { $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down') });

            iconElement.removeClass('fa-chevron-down').addClass('fa-chevron-up');

            $(this).parent().find('i').removeClass('show');
            $('.text2').slideUp();
            textElement.slideDown();
        }
        else {
            iconElement.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $('.text2').slideUp();
            textElement.slideUp();
        }
    });
});