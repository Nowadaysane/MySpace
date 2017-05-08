/**
 * Created by Hu Junheng on 2017/5/5.
 */
(function($) {
    $(function () {
        $(document).ready(function () {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;

            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {

                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }

            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });
        });

        $('#app').load('app/I/one.html');
        $('#home').load('app/II/two.html');
        $('#android').load('app/III/three.html');

    });
})(window.jQuery);

/*
 *添加选项卡方法
 */
function addTab(icon,url) {

    //先判断是否存在图标为icon的选项卡
    var tab = $('#myTabs').tab('exists',icon);
    if (tab){
        $('#myTabs').tab('select',title);
    }else {
        $('#myTabs').tab('add')
    }
}

