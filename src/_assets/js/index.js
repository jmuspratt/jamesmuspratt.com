import $ from 'jQuery';
window.$ = window.jQuery = $


const hoverClipPath = {
    init() {

        $('.layer--1')
        .clone()
        .removeClass('layer--1')
        .addClass('layer--2')
        .insertAfter('.layer--1');

        const $layer2 = $('.layer--2'); 
        const $content = $('.content');

        $content.mousemove( (event)=>{
            this.moveClipPath(event.pageX, event.pageY, $layer2);
        });
    },

    moveClipPath(x, y, $layer) {
        // const clipPath = `polygon(0px 100vh, ${x*1.3}px 0px, 0px 0px)`;

        const xVal = x / 10 
        const yVal = y / 10; 

        const clipPath = `ellipse(${yVal}% ${xVal}% at 50% 50%)`;
        $layer.css({
            "clip-path": clipPath,
            "-webkit-clip-path": clipPath
        });
    },

};

$(document).ready(() => hoverClipPath.init());



