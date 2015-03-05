document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var nodes = Array.from(document.querySelectorAll('.js-bg'));

    var checkScroll = function() {

        var h = document.documentElement.clientHeight;

        nodes.forEach(function(node) {
            var pos = node.parentNode.getBoundingClientRect();

            if (pos.top > h || pos.bottom < 0) {
                return;
            }

            window.requestAnimationFrame(function(){
                node.style[window.CSSTransformProperty] = 'translate3d(0, ' + Math.round((pos.top/-3)) + 'px, 0)';
            });

        });
        window.setTimeout(checkScroll, 10);
    };
    window.setTimeout(checkScroll, 10);
});
