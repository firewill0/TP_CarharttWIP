
let sideTab = document.querySelector('.sideTab');
let top_btn = document.querySelector(".btnTopArea");
let target = document.querySelector('.footer_mid_left');
let btn_sideTab = document.querySelector('.btn_sideTab');
let btn_sideTab_i = btn_sideTab.querySelector('i');
let recent_view = document.querySelector('.recent_view');
let recent_item = document.querySelectorAll('.recent_item');
let items;

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
    sideTab.style.top = value;
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

    target_height_sub = body_ch * 0.9;
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
        moveTop("9%");
    } else {
        moveTop("50%");
    }
    // 9%

});

btn_sideTab_i.addEventListener('click',function(){
    let chkicon = btn_sideTab_i.classList.contains('fa-chevron-circle-left');

    if (chkicon) {
        btn_sideTab_i.classList.add('fa-chevron-circle-right');
        btn_sideTab_i.classList.remove('fa-chevron-circle-left');
        recent_view.style.right = "0";
    }
    else {
        btn_sideTab_i.classList.add('fa-chevron-circle-left');
        btn_sideTab_i.classList.remove('fa-chevron-circle-right');
        recent_view.style.right = "-86px";
    }
});

