(function(a){'use strict';var b={_timeOutHoverMenu:[],_timeOutHoverOutMenu:[],_timeOutDuration:100,init:function(){this.menuHover(),this.onChangeSubmenuSize(),this.megaMenuActive(),a(window).trigger('x-menu-change')},isMobile:function(){var c=991,d=a('body');return'undefined'==typeof d.data('responsive-breakpoint')||isNaN(parseInt(d.data('responsive-breakpoint'),10))||(c=parseInt(d.data('responsive-breakpoint'),10)),window.matchMedia('(max-width: '+c+'px)').matches},menuHover:function(){var c=this;a('.x-nav-menu li.menu-item').each(function(){var d=a(this),e=0;d.hover(function(){if(!c.isMobile()){var f=a(this),g=f.prop('id'),h=f.data('transition');e=g,'undefined'!=typeof c._timeOutHoverMenu[g]&&clearTimeout(c._timeOutHoverMenu[g]),c._timeOutHoverMenu[g]=setTimeout(function(){f.addClass('x-active')},c._timeOutDuration)}},function(){if(!c.isMobile()){var f=a(this),g=f.prop('id'),h=f.data('transition');clearTimeout(c._timeOutHoverMenu[g]),null==h?f.removeClass('x-active'):(e=0,c._timeOutHoverOutMenu[g]=setTimeout(function(){e===g||(f.find(' > ul.sub-menu').addClass(h+'-out'),setTimeout(function(){f.removeClass('x-active'),f.find(' > ul.sub-menu').removeClass(h+'-out')},300))},c._timeOutDuration))}})})},subMenuSize:function(){var c=this;c.isMobile()?a('.x-nav-menu li.menu-item > ul.sub-menu').each(function(){var d=a(this),e=d.parent();(e.hasClass('x-submenu-width-fullwidth')||e.hasClass('x-submenu-width-container'))&&d.css({width:'',left:''})}):a('.x-nav-menu li.menu-item > ul.sub-menu').each(function(){var f,g,h,d=a(this),e=d.parent();e.hasClass('x-submenu-width-fullwidth')?(g=a(window).width(),h=-e.offset().left):e.hasClass('x-submenu-width-container')&&(f=a('.x-nav-menu-container'),f.length?g=f.width():(g=1200,a(window).width()<g&&(g=a(window).width())),h=-e.offset().left+(a(window).width()-g)/2),d.css({width:g+'px',left:h+'px'})})},megaMenuActive:function(){var c=window.location.href;'/'===c.substr(c.length-1)&&(c=c.substr(0,c.length-1)),a('.x-mega-sub-menu a').each(function(){var d=a(this).attr('href');if('/'===d.substr(d.length-1)&&(d=d.substr(0,d.length-1)),d==c){a(this).parent().addClass('current-menu-item');var e=a(this).closest('.sub-menu');if(e.length){e.parent().addClass('current-menu-parent');var f=e.parent().closest('.sub-menu');f.length&&f.parent().addClass('current-menu-ancestor')}}})},menuPosition:function(){var c=this;c.isMobile()?a('.x-nav-menu > li.menu-item > .x-submenu-custom-width').each(function(){var d=a(this);d.css({left:''})}):a('.x-nav-menu > li.menu-item > .x-submenu-custom-width').each(function(){var i,j,d=a(this),e=d.parent(),f=a('.x-nav-menu-container'),g=d.outerWidth(),h=0,k='right';f.length?(h=f.width(),j=(a(window).width()-h)/2):(h=a(window).width()-30,j=15),e.hasClass('x-submenu-position-left')&&(k='left'),e.hasClass('x-submenu-width-fullwidth')||e.hasClass('x-submenu-width-container')||('right'==k?e.offset().left+g>j+h&&(i=j+h-(e.offset().left+g),d.css('left',i+'px')):e.offset().left+e.width()<g&&(i=g-(e.offset().left+g)+15,d.css('left',e.width()+i+'px')))})},onChangeSubmenuSize:function(){a(window).on('x-menu-change',function(){b.timeOutSubmenuSize(0)})},timeOutSubmenuSize:function(c){5>c&&(b.subMenuSize(),b.menuPosition(),setTimeout(function(){b.timeOutSubmenuSize(c+1)},100))}};a(document).ready(function(){b.init()}),a(window).resize(function(){a(window).trigger('x-menu-change')})})(jQuery);