const subpage_left_filter = document.querySelector('.subpage_left_filter');
const chk_filter = document.getElementById('chk_filter');
const filter_box = document.querySelector('.filter_box');
const filter_circle = document.querySelector('.filter_circle');

filter_box.addEventListener('click', function () {
    console.log(chk_filter.checked);

    if (chk_filter.checked === false) {
        chk_filter.checked = true;
        filter_box.style.backgroundColor = "#4154B1";
        filter_circle.style.left = "27px";
        subpage_left_filter.style.visibility = "visible";
        subpage_left_filter.style.opacity = "1";
    }
    else {
        chk_filter.checked = false;
        filter_box.style.backgroundColor = "white";
        filter_circle.style.left = "0";
        subpage_left_filter.style.visibility = "hidden";
        subpage_left_filter.style.opacity = "0";
    }
});