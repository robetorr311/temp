'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var inputFocus = function inputFocus() {
    $('label input').on({
        focus: function focus() {
            $(this).parent().addClass('focusIn');
        },
        blur: function blur() {
            if ($(this).val() == '') {
                $(this).parent().removeClass('focusIn');
            }
        }
    });
};

exports['default'] = inputFocus;
module.exports = exports['default'];