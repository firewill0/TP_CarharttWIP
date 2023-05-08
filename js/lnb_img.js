let lnbHover = false;
let lnbListHover = false;

const lnb_hover = document.querySelectorAll('.lnb_hover');
console.log("lnb_hover:", lnb_hover);
const lnbList = document.querySelector('.lnb_menu');
const lnbListIn = document.querySelector('.lnb_menu_in');

const lnb_img1 = document.querySelector('.lnb_img1');

const lnb_img2 = document.querySelector('.lnb_img2');

for (let i = 0; i < lnb_hover.length; i++) {
    console.log(i);
    lnb_hover[i].addEventListener('mouseover', function () {
        let num = i;
        lnbHover = true;
        console.log(lnbHover, lnbListHover);
        fnc_lnb(lnbHover, lnbListHover);
        let img_path1 = "./img/lnb_img/" + i + "/1.jpg";
        let img_path2 = "./img/lnb_img/" + i + "/2.jpg";

        // lnb_img1.src = new URL(img_path1, import.meta.url);

        lnb_img1.src = img_path1;
        lnb_img2.src = img_path2;

        console.log(img_path1,img_path2);


        // lnb_img1.setAttribute('src',img_path1);
        // lnb_img2.setAttribute('src',img_path2);

    });

    lnb_hover[i].addEventListener('mouseout', function () {
        lnbHover = false;
        console.log(lnbHover, lnbListHover);
        fnc_lnb(lnbHover, lnbListHover);
    });
}

lnbList.addEventListener('mouseover', function () {
    lnbListHover = true;
    console.log(lnbHover, lnbListHover);
    fnc_lnb(lnbHover, lnbListHover);
});
lnbList.addEventListener('mouseout', function () {
    lnbListHover = false;
    console.log(lnbHover, lnbListHover);

    fnc_lnb(lnbHover, lnbListHover);
});

function fnc_lnb(check1, check2) {
    if (check1 || check2) {
        lnbList.style.height = "400px";
        lnbListIn.style.height = "400px";
        lnbList.style.borderBottom = "1px solid #ccc";
        console.log('lnb open');
    } else {
        lnbList.style.height = "0px";
        lnbListIn.style.height = "0px";
        lnbList.style.borderBottom = "1px solid black";
        console.log('lnb close');
    }
}
