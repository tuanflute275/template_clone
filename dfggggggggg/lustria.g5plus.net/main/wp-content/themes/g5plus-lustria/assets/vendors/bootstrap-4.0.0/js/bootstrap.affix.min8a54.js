+function(a){'use strict';function b(f){return this.each(function(){var g=a(this),h=g.data('bs.affix');h||g.data('bs.affix',h=new c(this,'object'==typeof f&&f)),'string'==typeof f&&h[f]()})}var c=function(f,g){this.options=a.extend({},c.DEFAULTS,g),this.$target=a(this.options.target).on('scroll.bs.affix.data-api',a.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(f),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION='3.3.7',c.RESET='affix affix-top affix-bottom',c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(f,g,h,i){var j=this.$target.scrollTop(),k=this.$element.offset(),l=this.$target.height();if(null!=h&&'top'==this.affixed)return!!(j<h)&&'top';if('bottom'==this.affixed)return null==h?!(j+l<=f-i)&&'bottom':!(j+this.unpin<=k.top)&&'bottom';var m=null==this.affixed,n=m?j:k.top,o=m?l:g;return null!=h&&j<=h?'top':null!=i&&n+o>=f-i&&'bottom'},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass('affix');var f=this.$target.scrollTop(),g=this.$element.offset();return this.pinnedOffset=g.top-f},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(':visible')){var f=this.$element.height(),g=this.options.offset,h=g.top,i=g.bottom,j=Math.max(a(document).height(),a(document.body).height());'object'!=typeof g&&(i=h=g),'function'==typeof h&&(h=g.top(this.$element)),'function'==typeof i&&(i=g.bottom(this.$element));var k=this.getState(j,f,h,i);if(this.affixed!=k){null!=this.unpin&&this.$element.css('top','');var l='affix'+(k?'-'+k:''),m=a.Event(l+'.bs.affix');if(this.$element.trigger(m),m.isDefaultPrevented())return;this.affixed=k,this.unpin='bottom'==k?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(l).trigger(l.replace('affix','affixed')+'.bs.affix')}'bottom'==k&&this.$element.offset({top:j-f-i})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on('load',function(){a('[data-spy="affix"]').each(function(){var f=a(this),g=f.data();g.offset=g.offset||{},null!=g.offsetBottom&&(g.offset.bottom=g.offsetBottom),null!=g.offsetTop&&(g.offset.top=g.offsetTop),b.call(f,g)})})}(jQuery);