;(function() {
  $(document).ready(function() {

    skel.breakpoints({
        medium: '(min-width: 640px)',
        large: '(min-width: 1200px)',
        xlarge: '(min-width: 1440px)'
    });

    $(window).on('load', function() {
        $('body').removeClass('loading');

        setTimeout(function() {
            $('body').removeClass('loading-1');
        }, 500);

        init_parallax();
        init_nav();
    });


    function init_parallax() {

        $(document).scroll(function() {

            var st = $(this).scrollTop();

            if (st <= $('.showcase').height()) {
                var offset = st * 0.2;
                $('.showcase').css('background-position', 'center ' + -offset + 'px');
            }

        })

    }

    function init_nav() {

        $('.page-header__nav-button').click(function() {

          $(this).toggleClass('page-header__nav-button--close');
          $('.page-header').toggleClass('page-header--nav-active');

        });

    }

  })
})();