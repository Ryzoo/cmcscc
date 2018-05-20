$(function(){
    let hideShowTimeout = null;
    let actualMousePos = 0;

    // NAVIGATION
    checkNavigation();
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

    $("nav ul a, .nav-logo").on("click",()=>{
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
    $('.burger').on("click", function() {
        $(this).toggleClass("open");
        $(".left-nav-menu").first().toggleClass("menu-left-show");
        hideRightMenu();
    });
    $('.right-burger').on("click", function() {
        $(this).toggleClass("open");
        $(".right-nav-menu").first().toggleClass("menu-right-show");
        hideLeftMenu();
    });
    $("nav li > ul").hover(
        function() { $.data(this, 'hover', true); },
        function() { $.data(this, 'hover', false); }
    ).data('hover', false);
    $(".nav-drop-header").hover(
        function() { $.data(this, 'hover', true); },
        function() { $.data(this, 'hover', false); }
    ).data('hover', false);

    $('.nav-drop-header').on({
        mouseenter: function() {
            if($(window).width() > 991){
                showMenuDropdown($(this));
            }
        },
        mouseleave: function() {
            if($(window).width() > 991){
                hideMenuDropdown($(this));
            }
        }
    });
    $('.nav-drop-header').on("click",function(){
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
    $("nav li ul").on("mouseleave",function(){
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

});

