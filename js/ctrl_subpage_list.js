import {
    shoppingList_Top
} from "./data.js";
import {
    setCookie,
    getCookie
} from "./cookie_control.js";

const items_list = document.querySelector('.items_list');
const pagenation = document.querySelector('.pagination');
let page = 1;
let itemCounter = 1;
let check = 12;
let itemCutNum = 0;
let tempNum = 0;
let pageAry = [];

const pageBtn = document.createElement('div');
pageBtn.setAttribute('class', 'page_btn');
// pageBtn.setAttribute('type', 'module');
pageBtn.innerText = page;
pagenation.appendChild(pageBtn);

let shoppingList_TopCount = shoppingList_Top.length;

let KrWon = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});

console.log(shoppingList_TopCount);

function addItem(index) {
    const Item = document.createElement('div');
    Item.setAttribute('class', 'item');

    const item_img = document.createElement('div');
    item_img.setAttribute('class', 'item_img');

    const item_url = document.createElement('a');
    item_url.setAttribute('class', 'item_url');
    let url_text = "./item_detail.html?";
    url_text += "id=";
    url_text += shoppingList_Top[index].id;
    item_url.setAttribute('href', url_text);
    // item_url.setAttribute('href', "./item_detail.html");


    item_img.appendChild(item_url);

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', shoppingList_Top[index].src[0]);
    item_img.appendChild(itemImg);

    const img_hover = document.createElement('img');
    img_hover.setAttribute('class', 'img_hover');
    img_hover.setAttribute('src', shoppingList_Top[index].src[1]);
    item_img.appendChild(img_hover);

    const cart = document.createElement('div');
    cart.setAttribute('class', 'cart');
    item_img.appendChild(cart);

    const desc_top = document.createElement('p');
    desc_top.setAttribute('class', 'desc_top');

    if (shoppingList_Top[index].isBest) {
        const best = document.createElement('span');
        const bestTxt = document.createTextNode("BEST");
        best.setAttribute('class', 'best');
        best.appendChild(bestTxt);
        desc_top.appendChild(best);
    }
    if (shoppingList_Top[index].isNew) {
        const newtag = document.createElement('span');
        const newtxt = document.createTextNode("NEW");
        newtag.setAttribute('class', 'new');
        newtag.appendChild(newtxt);
        desc_top.appendChild(newtag);
    }

    const desc = document.createElement('div');
    desc.setAttribute('class', 'desc');

    const itemName = document.createElement('p');
    itemName.setAttribute('class', 'desc_main');
    const itemNameText = document.createTextNode(shoppingList_Top[index].name);
    itemName.appendChild(itemNameText);

    const itemSubName = document.createElement('p');
    itemSubName.setAttribute('class', 'desc_sub');
    const itemSubNameText = document.createTextNode(shoppingList_Top[index].subname);
    itemSubName.appendChild(itemSubNameText);

    const itemPrice = document.createElement('p');
    let price = shoppingList_Top[index].price;
    // const itemPriceText = document.createTextNode(price);
    const itemPriceText = document.createTextNode(KrWon.format(price));
    itemPrice.setAttribute('class', 'desc_price');

    itemPrice.appendChild(itemPriceText);

    desc.appendChild(itemName);
    desc.appendChild(itemSubName);
    desc.appendChild(itemPrice);

    Item.appendChild(item_img);
    Item.appendChild(desc_top);
    Item.appendChild(desc);

    Item.setAttribute('data-date',shoppingList_Top[index].date);
    Item.setAttribute('data-buycount',shoppingList_Top[index].buycount);
    Item.setAttribute('data-price',shoppingList_Top[index].price);
    Item.setAttribute('data-id',shoppingList_Top[index].id);
    Item.setAttribute('data-idint',shoppingList_Top[index].idInt);

    items_list.appendChild(Item);

    item_url.addEventListener("click", function () {
        // event.preventDefault();
        setCookie("id", shoppingList_Top[index].id);
        // console.log(getCookie("id"));
        // location.href = "./item_detail.html";
    });
};

pageMaker(shoppingList_TopCount);

function pageMaker(getValue) {
    if (getValue < 12) {
        for (let i = 0; i < getValue; i++) {
            addItem(i);
        }
    } else {
        for (let i = 0; i < 12; i++) {
            addItem(i);
        }
    }

    for (let i = 0; i < getValue; i++) {
        pageAry[page - 1] = itemCounter;
        if (itemCounter > 11) {
            itemCutNum++;
            check = check * itemCutNum;

            if ((getValue - check) > 0) {
                page = page + 1;
                itemCounter = 1;
                console.log(page, itemCounter);
                const pageBtn = document.createElement('div');
                pageBtn.setAttribute('class', 'page_btn');
                pageBtn.innerText = page;
                pagenation.appendChild(pageBtn);
            }
        } else {
            console.log(page, itemCounter);
            itemCounter = itemCounter + 1;
        }
    };



    console.log("PageAry: ", pageAry);

    const pageBtns = document.querySelectorAll('.page_btn');

    pageBtns[0].classList.add("on");

    for (let i = 0; i < pageBtns.length; i++) {
        pageBtns[i].addEventListener('click', function () {
            console.log('this is a ' + i + 'page');
            let num = 12;

            num = num * i;

            tempNum = getValue;
            tempNum = tempNum - num;

            console.log("num:  " + num + "tempnum:  " + tempNum);

            while (items_list.hasChildNodes()) {
                items_list.removeChild(items_list.firstChild);
            }

            let Loopcount = pageAry[i];

            for (let i = 0; i < Loopcount; i++) {
                let count = num + i;
                console.log("count is  ", count);

                addItem(count);

            }

            pageBtns.forEach((pgel) => {
                pgel.classList.remove("on");
            });

            pageBtns[i].classList.add("on");

        });
    }
};

export {addItem, pageMaker}; 