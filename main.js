(function($){
    $(function() {
        $('.nav__icon').on('click', function() {
            $(this).closest('.nav__container')
                .toggleClass('nav_state_open');

            $("html,body").css("overflow","hidden");

        });
            $('.nav__link').on('click', function() {
                $("html,body").css("overflow","auto");

                $(this).closest('.nav__container')
                    .removeClass('nav_state_open');
            });
        });
    })(jQuery);