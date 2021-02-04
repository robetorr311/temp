let inputFocus = ()=> {
    $('label input').on({
        focus: function () {
            $(this).parent().addClass('focusIn');
        },
        blur: function () {
            if($(this).val() == '') {
                $(this).parent().removeClass('focusIn');
            }
        }
    });
};

export default inputFocus;