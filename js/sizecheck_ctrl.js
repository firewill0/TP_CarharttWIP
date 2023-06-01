const pageBody = document.querySelector('body');
const btnSize_chk = document.querySelector('.btnSize_chk');
const sizecheck_outer = document.querySelector('.sizecheck_outer');
const sizeclose = document.querySelector('.sizeclose');
const btn_getSize = document.querySelector('.btn_getSize');
const size_result_box = document.querySelector('.size_result_box');
const size_height_id = document.getElementById('size_height_id');
const size_weight_id = document.getElementById('size_weight_id');
const size_alert = document.querySelector('.size_alert');

btnSize_chk.addEventListener('click', function () {
    sizecheck_outer.style.opacity = "1";
    sizecheck_outer.style.visibility = "visible";

    pageBody.style.overflowY = "hidden";
});

sizeclose.addEventListener('click', function () {
    sizecheck_outer.style.opacity = "0";
    sizecheck_outer.style.visibility = "hidden";

    pageBody.style.overflowY = "auto";
});

btn_getSize.addEventListener('click', function () {
    size_alert.style.opacity = "0";
    let height = parseInt(size_height_id.value);
    let weight = parseInt(size_weight_id.value);

    console.log(height, weight);

    if ((isNaN(height)) || (isNaN(weight))) {
        size_alert.style.opacity = "1";

    } else {
        let sum = height + weight;
        let result = "";

        if (sum <= 280 && sum > 251) {
            result = "4XL";
        } else if (sum <= 250 && sum > 221) {
            result = "3XL";
        } else if (sum <= 220 && sum >191) {
            result = "2XL";
        } else if (sum <= 190 && sum >161) {
            result = "XL";
        } else if (sum <= 160 && sum>131) {
            result = "L";
        } else if (sum <= 130 && sum>101) {
            result = "M";
        } else if (sum <= 100 && sum>71) {
            result = "S";
        } else if (sum <= 70 && sum > 60) {
            result = "XS";
        } else {
            result = "NOT FOUND";
        }

        size_result_box.innerText = result;
    };
});