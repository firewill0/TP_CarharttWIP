const lb_t_l = document.querySelector('.lb_t_l');
const lb_t_r_l = document.querySelector('.lb_t_r_l');
const lb_t_r_r = document.querySelector('.lb_t_r_r');
const lookbook_background = document.querySelector('.lookbook_background');
const lookbook_stand = document.querySelector('.lookbook_stand');
const lookbook_item = document.querySelectorAll('.lookbook_item');
const lookbook_item1 = document.querySelector('.lookbook_item1');
const lookbook_item2 = document.querySelector('.lookbook_item2');
const lookbook_item3 = document.querySelector('.lookbook_item3');
const lookbook_item1_desc = document.querySelector('.lookbook_item1_desc');
const lookbook_item2_desc = document.querySelector('.lookbook_item2_desc');
const lookbook_item3_desc = document.querySelector('.lookbook_item3_desc');


// 처음 접속했을때 첫번째 아이템을 보여줄것
lookbook_background.setAttribute("src", "./img/lookbook/lookbook_1_background.jpg");
lookbook_stand.setAttribute("src", "./img/lookbook/lookbook_1_stand_off.png");
lookbook_item1.setAttribute("src", "./img/lookbook/lookbook_1_item_1.png");
lookbook_item2.setAttribute("src", "./img/lookbook/lookbook_1_item_2.png");
lookbook_item3.setAttribute("src", "./img/lookbook/lookbook_1_item_3.png");

lookbook_item1_desc.innerHTML = "TYLER BUCKET HAT" + "<br />" + "YUCCA" + "<br />" + "₩ 103,000";
lookbook_item2_desc.innerHTML = "S/S MASTER SHIRT" + "<br />" + "TEIDE" + "<br />" + "₩ 113,000";
lookbook_item3_desc.innerHTML = "REGULAR CARGO SHORT COLUMBIA" + "<br />" + "BUFFALO RINSED" + "<br />" + "₩ 138,000";

lookbook_item1.addEventListener('mouseover', function () {
    this.style.opacity = "1";
    lookbook_item1_desc.style.opacity = "1";
});
lookbook_item1.addEventListener('mouseout', function () {
    this.style.opacity = "0";
    lookbook_item1_desc.style.opacity = "0";
});

lookbook_item2.addEventListener('mouseover', function () {
    this.style.opacity = "1";
    lookbook_item2_desc.style.opacity = "1";
});
lookbook_item2.addEventListener('mouseout', function () {
    this.style.opacity = "0";
    lookbook_item2_desc.style.opacity = "0";
});

lookbook_item3.addEventListener('mouseover', function () {
    this.style.opacity = "1";
    lookbook_item3_desc.style.opacity = "1";
});
lookbook_item3.addEventListener('mouseout', function () {
    this.style.opacity = "0";
    lookbook_item3_desc.style.opacity = "0";
});





lb_t_l.addEventListener('click', function () {

});