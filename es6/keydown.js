import {default as blockedScroll} from './blockedScroll';

let key = {
    escape: (container, esc = false)=> {
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('.' + container).removeClass(container);

                if (esc) {
                    blockedScroll.scroll();
                }
            }
        });
    }
};

export default key;