!function(n){"use strict";var t={init:function(){t.count_down()},count_down:function(){function t(t,o){var u=parseInt(t.offset.seconds),e=parseInt(t.offset.minutes),d=parseInt(t.offset.hours),c=parseInt(t.offset.totalDays);if(o.is(".gsf-countdown-hide-day")&&(d=parseInt(t.offset.totalHours)),0!=u||0!=e||0!=d||0!=c)c<10&&(c="0"+c),d<10&&(d="0"+d),e<10&&(e="0"+e),u<10&&(u="0"+u),n(".countdown-day .countdown-value",o).text(c),n(".countdown-hours .countdown-value",o).text(d),n(".countdown-minutes .countdown-value",o).text(e),n(".countdown-seconds .countdown-value",o).text(u);else{var a=o.attr("data-url-redirect");void 0!==a&&""!=a&&(window.location.href=a)}}n(".gsf-countdown").each(function(){var o=n(this).data("date-end"),u=n(this);u.countdown(o,function(n){t(n,u)}).on("update.countdown",function(n){t(n,u)}).on("finish.countdown",function(t){n(".countdown-seconds .countdown-value",u).html("00");var o=u.attr("data-url-redirect");void 0!==o&&""!=o&&(window.location.href=o)})})}};n(document).ready(function(){t.init()})}(jQuery);