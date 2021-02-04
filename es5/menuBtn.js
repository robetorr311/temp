'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var menuBtn = function menuBtn() {
    $('.btn__menu').click(function () {
        $('body').hasClass('menu__open') ? $('body').removeClass('menu__open') : $('body').addClass('menu__open');
    });
};

exports['default'] = menuBtn;
module.exports = exports['default'];