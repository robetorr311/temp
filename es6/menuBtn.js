let menuBtn = ()=>{
    $('.btn__menu').click(function () {
        $('body').hasClass('menu__open') ? $('body').removeClass('menu__open'): $('body').addClass('menu__open');
    });
};

export default menuBtn;