import $ from 'jQuery';
window.$ = window.jQuery = $


const hoverClipPath = {
    init() {
        this.duplicateLayer();

        const $layer2 = $('.layer--2'); 
        const $content = $('.content');

        $content.mousemove( (event)=>{
            this.moveClipPath(event.pageX, event.pageY, $layer2);
        });
    },

    duplicateLayer() {
        $('.layer--1')
        .clone()
        .removeClass('layer--1')
        .addClass('layer--2')
        .insertAfter('.layer--1');
    },

    moveClipPath(x, y, $layer) {
        const clipPath = `polygon(0px 100vh, ${x*1.3}px 0px, 0px 0px)`;
        $layer.css({
            "clip-path": clipPath,
            "-webkit-clip-path": clipPath
        });
    },

};

$(document).ready(() => hoverClipPath.init());



