let top_btn = document.querySelector(".btnTopArea");
let target = document.querySelector('.footer_mid_left');
let target_height = 0;
let w = 0;
let target_height_sub = 0;
w = innerWidth;
let body = document.querySelector("body");
let body_ch = body.clientHeight;

target_height_sub = body_ch * 0.8;
target_height = body_ch - target_height_sub;

function toggle(display, opacity) {
    top_btn.style.visibility = display;
    top_btn.style.opacity = opacity;
}

function moveTop(value) {
    top_btn.style.bottom = value;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('resize', function () {
    w = innerWidth;
    body_ch = body.clientHeight;

    target_height_sub = body_ch * 0.8;
    target_height = body_ch - target_height_sub;

});

window.addEventListener('scroll', function () {
    let scrollHeight = window.scrollY;

    if (scrollHeight >= target_height) {
        toggle("visible", 1);
    } else {
        toggle("hidden", 0);
    }

    if (isInViewport(target)) {
        moveTop("330px");
    } else {
        moveTop("15px");
    }

});