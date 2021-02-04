'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blockedScroll = require('./blockedScroll');

var _blockedScroll2 = _interopRequireDefault(_blockedScroll);

var key = {
    escape: function escape(container) {
        var esc = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('.' + container).removeClass(container);

                if (esc) {
                    _blockedScroll2['default'].scroll();
                }
            }
        });
    }
};

exports['default'] = key;
module.exports = exports['default'];