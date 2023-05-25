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
        wItem_desc.setAttribute('class','item_name');
        wItem_desc.innerHTML = itemList[getIdx].name;
        let wItem_price = document.createElement('p');
        wItem_price.setAttribute('class','item_price');
        wItem_price.innerHTML = KrWon.format(itemList[getIdx].price);

        wItem.appendChild(wItem_img);
        wItem.appendChild(wItem_desc);
        wItem.appendChild(wItem_price);

        wItem.addEventListener("click", function () {
            // event.preventDefault();
            setCookie("id", itemList[getIdx].id);
            location.href="./item_detail.html";
            // console.log(getCookie("id"));
            // location.href = "./item_detail.html";
        });
        item_combo_list.appendChild(wItem);
    }


}




// const items_list = document.querySelector('.items_list');
// const pagenation = document.querySelector('.pagination');
// let page = 1;
// let c = 1;
// let check = 12;
// let cut = 0;
// let tempNum = 0;
// let pageAry = [];

// const pageBtn = document.createElement('div');
// pageBtn.setAttribute('class', 'page_btn');
// // pageBtn.setAttribute('type', 'module');
// pageBtn.innerText = page;
// pagenation.appendChild(pageBtn);

// let itemListCount = itemListCount.length;

// let KrWon = new Intl.NumberFormat('ko-KR', {
//     style: 'currency',
//     currency: 'KRW',
// });

// console.log(shoppingList_TopCount);

// function addItem(index) {
//     const Item = document.createElement('div');
//     Item.setAttribute('class', 'item');

//     const item_img = document.createElement('div');
//     item_img.setAttribute('class', 'item_img');

//     const item_url = document.createElement('a');
//     item_url.setAttribute('class', 'item_url');
//     item_url.setAttribute('href', "./item_detail.html");
//     item_img.appendChild(item_url);

//     const itemImg = document.createElement('img');
//     itemImg.setAttribute('src', shoppingList_Top[index].src[0]);
//     item_img.appendChild(itemImg);

//     const img_hover = document.createElement('img');
//     img_hover.setAttribute('class', 'img_hover');
//     img_hover.setAttribute('src', shoppingList_Top[index].src[1]);
//     item_img.appendChild(img_hover);

//     const cart = document.createElement('div');
//     cart.setAttribute('class', 'cart');
//     item_img.appendChild(cart);

//     const desc_top = document.createElement('p');
//     desc_top.setAttribute('class', 'desc_top');

//     if (shoppingList_Top[index].isBest) {
//         const best = document.createElement('span');
//         const bestTxt = document.createTextNode("BEST");
//         best.setAttribute('class', 'best');
//         best.appendChild(bestTxt);
//         desc_top.appendChild(best);
//     }
//     if (shoppingList_Top[index].isNew) {
//         const newtag = document.createElement('span');
//         const newtxt = document.createTextNode("NEW");
//         newtag.setAttribute('class', 'new');
//         newtag.appendChild(newtxt);
//         desc_top.appendChild(newtag);
//     }

//     const desc = document.createElement('div');
//     desc.setAttribute('class', 'desc');

//     const itemName = document.createElement('p');
//     itemName.setAttribute('class', 'desc_main');
//     const itemNameText = document.createTextNode(shoppingList_Top[index].name);
//     itemName.appendChild(itemNameText);

//     const itemSubName = document.createElement('p');
//     itemSubName.setAttribute('class', 'desc_sub');
//     const itemSubNameText = document.createTextNode(shoppingList_Top[index].subname);
//     itemSubName.appendChild(itemSubNameText);

//     const itemPrice = document.createElement('p');
//     let price = shoppingList_Top[index].price;
//     // const itemPriceText = document.createTextNode(price);
//     const itemPriceText = document.createTextNode(KrWon.format(price));
//     itemPrice.setAttribute('class', 'desc_price');

//     itemPrice.appendChild(itemPriceText);

//     desc.appendChild(itemName);
//     desc.appendChild(itemSubName);
//     desc.appendChild(itemPrice);

//     Item.appendChild(item_img);
//     Item.appendChild(desc_top);
//     Item.appendChild(desc);

//     items_list.appendChild(Item);
// };

// if (shoppingList_TopCount < 12) {
//     for (let i = 0; i < shoppingList_TopCount; i++) {
//         addItem(i);
//     }
// } else {
//     for (let i = 0; i < 12; i++) {
//         addItem(i);
//     }
// }

// for (let i = 0; i < shoppingList_TopCount; i++) {
//     pageAry[page - 1] = c;
//     if (c > 11) {
//         cut++;
//         check = check * cut;

//         if ((shoppingList_TopCount - check) > 0) {
//             page = page + 1;
//             c = 1;
//             console.log(page, c);
//             const pageBtn = document.createElement('div');
//             pageBtn.setAttribute('class', 'page_btn');
//             pageBtn.innerText = page;
//             pagenation.appendChild(pageBtn);
//         }
//     } else {
//         console.log(page, c);
//         c = c + 1;
//     }
// };

// console.log("PageAry: ", pageAry);

// const pageBtns = document.querySelectorAll('.page_btn');

// for (let i = 0; i < pageBtns.length; i++) {
//     pageBtns[i].addEventListener('click', function () {
//         console.log('this is a ' + i + 'page');
//         let num = 12;

//         num = num * i;

//         tempNum = shoppingList_TopCount;
//         tempNum = tempNum - num;

//         console.log("num:  " + num + "tempnum:  " + tempNum);

//         while (items_list.hasChildNodes()) {
//             items_list.removeChild(items_list.firstChild);
//         }

//         let Loopcount = pageAry[i];

//         for (let i = 0; i < Loopcount; i++) {
//             let count = num + i;
//             console.log("count is  ", count);

//             addItem(count);

//         }
//     });
// }