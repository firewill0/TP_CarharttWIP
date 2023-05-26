import {
    itemList
} from "./data.js";

import {
    setCookie,
    getCookie
} from "./cookie_control.js";
// import load_param from "./load_param.js";

let itemId = getCookie("id");
let index = 0;

let itemListCount = itemList.length;

let KrWon = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});


console.log("current id is:" + itemId + '/' + "item counter:" + itemListCount);

// console.log("test");

const itemcode = document.querySelector('.itemcode');
const item_img = document.querySelector('.item_img');
const thumbnail = document.querySelector('.thumbnail_list').querySelectorAll('img');
const title = document.querySelector('.title');
const bestTag = document.querySelector('.best');
const newTag = document.querySelector('.new');
const price = document.querySelector('.price');
const save = document.querySelector('.save').querySelector('span');
const rating = document.querySelector('.rating_star');
const rating_score = document.querySelector('.rating_score').querySelector('span');
const color_box = document.querySelector('.item_color');
const size_box = document.querySelector('.item_size');
const btnSize_chk = document.querySelector('.btnSize_chk');

const desc_detail = document.querySelector('.desc_detail');
const qna_list = document.querySelector('.qna_list');
const item_combo_list = document.querySelector('.item_combo_list');
const watched_item_combo_list = document.querySelector('.watched_item_combo_list');


// for (let i = 0; i < itemListCount; i++) {
//     if (itemId == itemList[i].id) {
//         index = i;
//         break;
//     }
// }

itemList.forEach((item, itemidx) => {
    if (itemId == item.id) {
        index = itemidx;
        return false;
    };
});

title.innerHTML = itemList[index].name;
itemcode.innerHTML = itemList[index].stylecode;
item_img.setAttribute('src', itemList[index].colorSrc[0][0]);

thumbnail.forEach((value, idx) => {
    value.setAttribute('src', itemList[index].colorSrc[0][idx]);

    value.addEventListener('mouseover', function () {
        item_img.setAttribute('src', itemList[index].colorSrc[0][idx]);
    });
});

price.innerHTML = KrWon.format(itemList[index].price);

if (itemList[index].isBest) {
    bestTag.style.display = "block";
} else {
    bestTag.style.display = "none";
}

if (itemList[index].isNew) {
    newTag.style.display = "block";
} else {
    newTag.style.display = "none";
}

save.innerHTML = KrWon.format(itemList[index].price * 0.005);

desc_detail.innerHTML = "";
for (let i = 0; i < itemList[index].desc.length; i++) {
    desc_detail.innerHTML += itemList[index].desc[i];
    desc_detail.innerHTML += "<br />";
}

let colorList = itemList[index].colorSrc;

colorList.forEach((color) => {
    const color_img = document.createElement('img');
    color_img.setAttribute('src', color[0]);
    color_box.appendChild(color_img);
    color_img.addEventListener('click', function () {
        let mainImg = color[0];
        item_img.setAttribute('src', mainImg);
        thumbnail.forEach((value, idx_c) => {
            let thumImg = color[idx_c];
            value.setAttribute('src', thumImg);

            value.addEventListener('mouseover', function () {
                item_img.setAttribute('src', thumImg);
            });
        });
    });
});


let sizeList = itemList[index].size;

sizeList.forEach((sizeItem) => {
    let size = document.createElement('div');
    size.innerHTML = sizeItem;
    size.setAttribute('class', 'size');
    size_box.appendChild(size);

    size.addEventListener('click', function () {
        let size_list = document.querySelectorAll('.size');
        for (let i = 0; i < size_list.length; i++) {
            if (size_list[i].classList.contains("sizechecked")) {
                size_list[i].classList.remove("sizechecked");
            };
        };

        this.classList.add("sizechecked");
    });
});

if (itemList[index].withItem) {

    for (let i = 0; i < itemList[index].withItemID.length; i++) {
        if (i > 3) {
            break;
        }

        let getwItem = itemList[index].withItemID[i];
        let getIdx = 0;

        itemList.forEach((getwItem_original, wItemidx) => {
            if (getwItem == getwItem_original.id) {
                getIdx = wItemidx;
                return false;
            };
        });


        let wItem = document.createElement('div');
        wItem.setAttribute('class', 'item');
        let wItem_img = document.createElement('img');
        wItem_img.setAttribute('src', itemList[getIdx].colorSrc[0][0]);
        let wItem_desc = document.createElement('p');
        wItem_desc.setAttribute('class', 'item_name');
        wItem_desc.innerHTML = itemList[getIdx].name;
        let wItem_price = document.createElement('p');
        wItem_price.setAttribute('class', 'item_price');
        wItem_price.innerHTML = KrWon.format(itemList[getIdx].price);

        wItem.appendChild(wItem_img);
        wItem.appendChild(wItem_desc);
        wItem.appendChild(wItem_price);

        wItem.addEventListener("click", function () {
            // event.preventDefault();
            setCookie("id", itemList[getIdx].id);
            location.href = "./item_detail.html";
            // console.log(getCookie("id"));
            // location.href = "./item_detail.html";
        });
        item_combo_list.appendChild(wItem);
    }


}


let rvlist = getCookie("rvlist");

if (rvlist == "" || rvlist == " ") {
    let rvlist_new = [];
    rvlist_new.unshift(itemId);
    setCookie("rvlist", JSON.stringify(rvlist_new));
    console.log(getCookie("rvlist"));
} else {
    let getRvlist_json = getCookie("rvlist");
    let getRvlist = JSON.parse(getRvlist_json);

    console.log(getRvlist);

    if (getRvlist.length >= 4) {
        for (let i = 0; i < 4; i++) {
            let rvel = getRvlist[i];

            let rvelIdx = 0;

            if (rvel != itemId) {
                itemList.forEach((rvitem, rvitemidx) => {
                    if (rvel == rvitem.id) {
                        rvelIdx = rvitemidx;
                        return false;
                    };
                });

                let rvItem = document.createElement('div');
                rvItem.setAttribute('class', 'watched_item item');
                let rvItem_img = document.createElement('img');
                rvItem_img.setAttribute('src', itemList[rvelIdx].colorSrc[0][0]);
                let rvItem_desc = document.createElement('p');
                rvItem_desc.setAttribute('class', 'item_name');
                rvItem_desc.innerHTML = itemList[rvelIdx].name;
                let rvItem_price = document.createElement('p');
                rvItem_price.setAttribute('class', 'item_price');
                rvItem_price.innerHTML = KrWon.format(itemList[rvelIdx].price);

                rvItem.appendChild(rvItem_img);
                rvItem.appendChild(rvItem_desc);
                rvItem.appendChild(rvItem_price);

                rvItem.addEventListener("click", function () {
                    // event.preventDefault();
                    setCookie("id", itemList[rvelIdx].id);
                    location.href = "./item_detail.html";
                    // console.log(getCookie("id"));
                    // location.href = "./item_detail.html";
                });
                watched_item_combo_list.appendChild(rvItem);
            };



        }
    } else {
        for (let i = 0; i < getRvlist.length - 1; i++) {
            let rvel = getRvlist[i];
            let rvelIdx = 0;

            if (rvel != itemId) {
                itemList.forEach((rvitem, rvitemidx) => {
                    if (rvel == rvitem.id) {
                        rvelIdx = rvitemidx;
                        return false;
                    };
                });

                let rvItem = document.createElement('div');
                rvItem.setAttribute('class', 'watched_item item');
                let rvItem_img = document.createElement('img');
                rvItem_img.setAttribute('src', itemList[rvelIdx].colorSrc[0][0]);
                let rvItem_desc = document.createElement('p');
                rvItem_desc.setAttribute('class', 'item_name');
                rvItem_desc.innerHTML = itemList[rvelIdx].name;
                let rvItem_price = document.createElement('p');
                rvItem_price.setAttribute('class', 'item_price');
                rvItem_price.innerHTML = KrWon.format(itemList[rvelIdx].price);

                rvItem.appendChild(rvItem_img);
                rvItem.appendChild(rvItem_desc);
                rvItem.appendChild(rvItem_price);

                rvItem.addEventListener("click", function () {
                    // event.preventDefault();
                    setCookie("id", itemList[rvelIdx].id);
                    location.href = "./item_detail.html";
                    // console.log(getCookie("id"));
                    // location.href = "./item_detail.html";
                });
                watched_item_combo_list.appendChild(rvItem);
            };
        }

    }

    getRvlist.unshift(itemId);
    let getRvlistUnique = [...new Set(getRvlist)];
    setCookie("rvlist", JSON.stringify(getRvlistUnique));
    console.log(getCookie("rvlist"));
}