const pageBody = document.querySelector('body');
const search_outer = document.querySelector('.search_outer');
const search_box = document.querySelector('.search_box');
const search_btn = document.querySelector('.search_btn');
const btn_search_close = document.querySelector('.btn_search_close');


search_btn.addEventListener('click', function () {
    search_outer.style.opacity = "1";
    search_outer.style.visibility = "visible";

    search_box.style.top = "0";

    pageBody.style.overflowY = "hidden";
});

btn_search_close.addEventListener('click', function () {
    search_outer.style.opacity = "0";
    search_outer.style.visibility = "hidden";

    search_box.style.top = "-120%";

    pageBody.style.overflowY = "auto";
});