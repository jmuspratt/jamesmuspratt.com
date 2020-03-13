import $ from 'jQuery';
window.$ = window.jQuery = $


const Triangle = {
    init() {

        this.setup();
        this.bindMouseMove();


    },

    setup() {
        $('.layer--1')
        .clone()
        .removeClass('layer--1')
        .addClass('layer--2')
        .insertAfter('.layer--1');

        this.permissionGiven = false;
        this.$layer2 = $('.layer--2');
        this.$content = $('.content');

        this.$content.click(()=>{
            this.askPermission();
        });
    },

    askPermission() {
        if (window.DeviceOrientationEvent) {
            window.DeviceMotionEvent
                .requestPermission()
                .then(response => {
                if (response === 'granted') {
                    this.bindDeviceTilt();
                    this.permissionGiven = true;
                } else {
                    this.permissionGiven = false;
                }
            });
        }
    },

    bindDeviceTilt() {
        window.addEventListener('deviceorientation', (event) => {
            const a = Math.abs(event.alpha) * 1.3;
            const b = Math.abs(event.gamma) * 10;
            const c = Math.abs(event.beta) * 5;

            this.moveClipPath(a, b, c);
        });
    },

    bindMouseMove() {
        this.$content.mousemove( (event)=>{
            const a = event.pageY * 1.3;
            const b = event.pageX * 1.3;
            const c = event.pageY * 1.3;
            this.moveClipPath(a, b, c);
        });
    },

    moveClipPath(a, b, c, shiftX) {
      // $('.debug').html(`a: ${a}<br />b: ${b}<br />c: ${c}, shiftX: ${shiftX}`);
        const clipPath = `polygon(${a}px 100vh, ${b}px 0, 0 ${c}px)`;
        this.$layer2.css({
            "clip-path": clipPath,
            "-webkit-clip-path": clipPath,
        });
    },

};

$(document).ready(() => Triangle.init());



