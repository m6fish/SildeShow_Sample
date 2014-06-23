(function($) {
    $(function() {
        $('.jcarousel').jcarousel({
          //循環播放
          /*
            -first:過頭回到尾端
            -last :過尾回到頭端
            -both :雙向連接頭尾
            -circular:循環播放
          */
          wrap: 'circular',
        })
        //自動撥放
        .jcarouselAutoscroll({
            interval: 500,
            target: '+=1',
            autostart: true
        })
    ;;

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

