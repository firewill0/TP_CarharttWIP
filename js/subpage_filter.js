const subpage_left_filter = document.querySelector('.subpage_left_filter');
const chk_filter = document.getElementById('#chk_filter');
const label_chk_filter = document.querySelector('.label_chk_filter');
let chk = false;

// if (chk_filter.checked) {
//     subpage_left_filter.style.visibility = "visible";
// }

label_chk_filter.addEventListener('click', function () {

    if (!chk) {
        subpage_left_filter.style.visibility = "visible";
        chk = true;
    }
    else {
        subpage_left_filter.style.visibility = "hidden";
        chk = false;
    }


});
