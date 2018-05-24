$(function(){
    navigation();
    tables();
    modals();
});

function navigation() {
    let hideShowTimeout = null;
    let actualMousePos = 0;

    // NAVIGATION
    setTimeout(()=>{
        checkNavigation();
    },500);

    $(window).resize(()=>{
        checkNavigation();
    });

    $(document).on("mousedown touchstart",function(event) {
        let eventDoc, doc, body, pageX, pageY;
        event = event || window.event;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        actualMousePos = event.pageX;
        if(event.touches && event.touches[0]){
            let touch = event.touches[0];
            let x = touch.pageX;
            actualMousePos = x;
        }
    });

    $(document).on("click","nav ul a, .nav-logo",()=>{
        hideRightMenu();
        hideLeftMenu();
    });

    let hammertime = new Hammer($(document)[0]);
    hammertime.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 10 }) );
    hammertime.on('panleft', function(ev) {
        if($(window).width() < 991 && actualMousePos  > 0){
            if(actualMousePos> ($(window).width()/2)){
                showRightMenu();
            }else{
                hideLeftMenu();
            }
        }
    });
    hammertime.on('panright', function(ev) {
        if($(window).width() < 991 && actualMousePos  > 0){
            if(actualMousePos > ($(window).width()/2)){
                hideRightMenu();
            }else{
                showLeftMenu();
            }
        }
    });
    function showRightMenu(){
        $('.right-burger').first().addClass("open");
        $(".right-nav-menu").first().addClass("menu-right-show");
        hideLeftMenu();
    }
    function hideRightMenu(){
        $('.right-burger').first().removeClass("open");
        $(".right-nav-menu").first().removeClass("menu-right-show");
    }
    function showLeftMenu(){
        $('.burger').first().addClass("open");
        $(".left-nav-menu").first().addClass("menu-left-show");
        hideRightMenu();
    }
    function hideLeftMenu(){
        $('.burger').first().removeClass("open");
        $(".left-nav-menu").first().removeClass("menu-left-show");
    }
    $(document).on("click",'.burger', function() {
        $(this).toggleClass("open");
        $(".left-nav-menu").first().toggleClass("menu-left-show");
        hideRightMenu();
    });
    $(document).on("click",'.right-burger', function() {
        $(this).toggleClass("open");
        $(".right-nav-menu").first().toggleClass("menu-right-show");
        hideLeftMenu();
    });

    $(document).on("mouseover","nav li > ul",function() { $.data(this, 'hover', true); });
    $(document).on("mouseover",".nav-drop-header",function() { $.data(this, 'hover', true); });

    $(document).on("mouseout","nav li > ul",function() { $.data(this, 'hover', false); });
    $(document).on("mouseout",".nav-drop-header",function() { $.data(this, 'hover', false); });

    $(document).on("mouseenter",'.nav-drop-header',function() {
        if($(window).width() > 991){
            showMenuDropdown($(this));
        }
    });
    $(document).on("mouseleave",'.nav-drop-header',function() {
        if($(window).width() > 991){
            hideMenuDropdown($(this));
        }
    });

    $(document).on("click",'.nav-drop-header',function(){
        if($(window).width() < 991){
            $(this).toggleClass("activedHeaderDropdown");
            let dropdownList = $(this).next();
            if(dropdownList){
                dropdownList.toggleClass("activedDropdown");
                if(hideShowTimeout) clearTimeout(hideShowTimeout);
                if(dropdownList.hasClass("activedDropdown")) dropdownList.css("z-index","1");
                else dropdownList.css("z-index","-1");
            }
        }
    });
    $(document).on("mouseleave","nav li ul",function(){
        if($(window).width() > 991){
            let dropdownList = $(this).prev();
            setTimeout(()=>{
                if(dropdownList && !dropdownList.data('hover')){
                    if(hideShowTimeout) clearTimeout(hideShowTimeout);
                    hideShowTimeout = setTimeout(()=>{
                        $(this).css("z-index","-1");
                    },10);
                    dropdownList.removeClass("activedHeaderDropdown");
                    $(this).removeClass("activedDropdown");
                }
            },100);
        }
    });

    function showMenuDropdown( header ){
        header.addClass("activedHeaderDropdown");
        let dropdownList = header.next();
        if(dropdownList){
            dropdownList.addClass("activedDropdown");
            if(hideShowTimeout) clearTimeout(hideShowTimeout);
            hideShowTimeout = setTimeout(()=>{
                dropdownList.css("z-index","1");
            },250);
        }
    }
    function hideMenuDropdown( header ){
        let dropdownList = header.next();
        setTimeout(()=>{
            if(dropdownList  && !dropdownList.data('hover')){
                if(hideShowTimeout) clearTimeout(hideShowTimeout);
                hideShowTimeout = setTimeout(()=>{
                    dropdownList.css("z-index","-1");
                },10);
                header.removeClass("activedHeaderDropdown");
                dropdownList.removeClass("activedDropdown");
            }
        },100);
    }
    function checkNavigation(){
        if($(window).width() < 991){
            $("nav .burger, nav .right-burger").show();
        }else{
            $("nav .burger, nav .right-burger").hide();
        }
    }
}
function tables() {
    this.isMobile = $(document).width() <= 996;

    const self = this;

    $(document).off('click', '.table-settings');
    $(document).on('click', '.table-settings', function () {
        $('.table-content .func-icons').removeClass('active');
        let iconList = $(this).parent().next('.func-icons');
        iconList.addClass('active');
        iconList.css("height", $(this).parent().parent().height());
        iconList.css("left", $(this).parent().parent().offset().left+"px");
        iconList.css("width", $(this).parent().parent().width()+"px");
        const hasDiv = $(this).parent().parent().find('> div').length;
        if (self.isMobile && !hasDiv) {
            const number = $(this).parent().parent().index();
            let funcIcons = $('.large-only .table-content').eq((number / 4) - 1).find('.func-icons').clone();
            $(this).parent().parent().append(funcIcons);
            $(this).parent().next().addClass('active');
        }
    });

    $(document).off('mouseleave', '.icons-list');
    $(document).on('mouseleave', '.icons-list', function () {
        $(this).removeClass('active');
    });
    const hasIcon = $('table td').hasClass('table-icon');
    let mainIcon;
    let iconSize;
    if (hasIcon) {
        const tableIcon = $('.table-icon');
        mainIcon = tableIcon.data('main-icon');
        iconSize = tableIcon.data('icon-size');
        if (typeof iconSize === "undefined") {
            iconSize = 'md';
        }
        $('<div class="icons-list func-icons"><div class="icons-content"></div></div>').insertAfter(tableIcon);
        tableIcon.children().clone().appendTo('.icons-content');
        tableIcon.empty();
        tableIcon.append(`<div class="table-settings"><i class="i-${mainIcon} i-${iconSize}"></i></div>`);
    }


}
function modals(){
    if($('.modal-page-hide').length <= 0) {
        $("body").append(`<div class="modal-page-hide"></div>`);
        $(document).off('click','.modal-page-hide');
        $(document).on('click','.modal-page-hide',()=>{
            $('.modal-show').each(function() {
                $(this).hideModal();
            });
        })
    }

    jQuery.fn.extend({
        showModal: function() {
            return this.each(function() {
                if(checkIsModal(this)){
                    addCloseIcon(this);
                    showModal(this);
                }
            });
        },
        hideModal: function() {
            return this.each(function() {
                if(checkIsModal(this)){
                    addCloseIcon(this);
                    hideModal(this);
                }
            });
        }
    });

    function checkIsModal(element){
        return $(element).hasClass("modal");
    }

    function addCloseIcon(element){
        let modalCloseIcon = $(element).find('.modal-close');
        if(modalCloseIcon.length <=0 ){
            $(element).append(`<span class="modal-close"></span>`);
            modalCloseIcon = $(element).find('.modal-close').first();
            modalCloseIcon.off('click');
            modalCloseIcon.on('click',()=>{
                hideModal(element);
            });
        }
    }

    function showModal(modal){
        $('.modal-page-hide').first().addClass('modal-page-show');
        $(modal).first().addClass('modal-show');
    }

    function hideModal(modal){
        $('.modal-page-hide').first().removeClass('modal-page-show');
        $(modal).first().removeClass('modal-show');
    }

}