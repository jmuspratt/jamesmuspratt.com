import $ from 'jQuery';
window.$ = window.jQuery = $


const hoverClipPath = {
    init() {
        console.log('init');
        const $layer2 = $('.layer--2'); 
        const $contnet = $('.content');
        $content.mousemove( (event)=>{
            this.moveClipPath(event.pageX, event.pageY, $layer2);
        });
    },

    moveClipPath(x, y, $layer) {
        console.log('moving', x);
        console.log('layer', $layer);
        const clipPath = `polygon(0px 900px, ${x*1.3}px 0px, 0px 0px)`;
        $layer.css({
            "clip-path": clipPath,
            "-webkit-clip-path": clipPath
        });
    },

};

$(document).ready(() => hoverClipPath.init());



