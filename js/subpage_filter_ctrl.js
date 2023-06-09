// import {
//     shoppingList_Top
// } from "./data.js";

let jsonQuery = require('json-query');

const items_list = document.querySelector('.items_list');
const pagenation = document.querySelector('.pagination');
let items;
let page = 1;
let itemCounter = 1;
let check = 12;
let itemCutNum = 0;
let tempNum = 0;
let pageAry = [];

let KrWon = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});


let xhr = new XMLHttpRequest(); // 인스턴스 (객체변수보단 인스턴스라고 부르면 됨)
xhr.open('GET', './db.json');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("READY");
        let datalist = JSON.parse(xhr.responseText);
        items = datalist;
    }
}

const subpage_left_filter = document.querySelector('.subpage_left_filter');
const chk_price_1 = document.getElementById('chk_price_1');
const chk_price_2 = document.getElementById('chk_price_2');
const chk_price_3 = document.getElementById('chk_price_3');
const chk_price_4 = document.getElementById('chk_price_4');
const chk_price_5 = document.getElementById('chk_price_5');
const checkboxes_price = document.querySelectorAll('.checkbox_price');

const checkboxes_color = document.querySelectorAll('.checkbox_color');

let color = "";
let itemListFinal = [];
let itemListFinalCount = 0;
let itemlistColor = [];
let itemlistColorCount = 0;
let itemlistPrice = [];
let itemlistPriceCount = 0;
let itemlistDiscount = [];
let itemlistDiscountCount = 0;

let colorChk = false;
let priceChk = false;
let discountChk = false;

console.log(checkboxes_price, checkboxes_color);

checkboxes_color.forEach((element) => {
    element.addEventListener('change', function () {
        if (element.getAttribute('id') === 'chk_color_all') {
            for (let i = 0; i < checkboxes_color.length; i++) {
                checkboxes_color[i].checked = false;
                console.log('other checkbox', checkboxes_color[i], 'is', checkboxes_color[i].checked);
            };

            let query = 'shoppingList_Top[*]';
            let qResult = jsonQuery(query, {
                data: items
            }).value;

            console.log(qResult);

            itemlistColor = [];

            qResult.forEach((item) => {
                itemlistColor.push(item.id);
            });
            itemlistColorCount = itemlistColor.length;
            console.log(itemlistColor, '/', itemlistColorCount);
            colorChk = false;
        } else {
            if (element.checked == true) {
                console.log(element);
                for (let i = 0; i < checkboxes_color.length; i++) {
                    if (checkboxes_color[i] != element) {
                        checkboxes_color[i].checked = false;
                        console.log('other checkbox', checkboxes_color[i], 'is', checkboxes_color[i].checked);
                    };
                };
                console.log('checkbox', element, 'is', element.checked);
                let getColor = element.getAttribute('id').slice(10);
                console.log(getColor);

                let query = 'shoppingList_Top[*]';
                let qResult = jsonQuery(query, {
                    data: items
                }).value;

                console.log(qResult);

                itemlistColor = [];

                qResult.forEach((item) => {
                    let colors = item.color;
                    if (colors.includes(getColor)) {
                        itemlistColor.push(item.id);
                    };
                });
                itemlistColorCount = itemlistColor.length;
                console.log(itemlistColor, '/', itemlistColorCount);
                colorChk = true;
            };
        };
        itemListFilter();
    });
});

function priceCheck(number, min, max) {
    return number > min && number <= max;
}

checkboxes_price.forEach((el_price) => {
    el_price.addEventListener('change', function () {
        if (el_price.getAttribute('id') === 'chk_price_6') {
            for (let i = 0; i < checkboxes_price.length; i++) {
                checkboxes_price[i].checked = false;
                console.log('other checkbox', checkboxes_price[i], 'is', checkboxes_price[i].checked);
            };

            let query = 'shoppingList_Top[*]';
            let qResult = jsonQuery(query, {
                data: items
            }).value;

            console.log(qResult);

            itemlistPrice = [];

            qResult.forEach((item) => {
                itemlistPrice.push(item.id);
            });
            itemlistPriceCount = itemlistPrice.length;
            console.log(itemlistPrice, '/', itemlistPriceCount);
            priceChk = false;
        } else {
            if (el_price.checked == true) {
                console.log(el_price);
                for (let i = 0; i < checkboxes_price.length; i++) {
                    if (checkboxes_price[i] != el_price) {
                        checkboxes_price[i].checked = false;
                        console.log('other checkbox', checkboxes_price[i], 'is', checkboxes_price[i].checked);
                    };
                };
                console.log('checkbox', el_price, 'is', el_price.checked);
                let getpriceID = el_price.getAttribute('id');
                console.log(getpriceID);

                let query = 'shoppingList_Top[*]';
                let qResult = jsonQuery(query, {
                    data: items
                }).value;

                console.log(qResult);

                itemlistPrice = [];


                qResult.forEach((item) => {
                    let price = item.price;

                    switch (getpriceID) {
                        case "chk_price_1":
                            if (priceCheck(price, 0, 50000)) {
                                itemlistPrice.push(item.id);
                            };
                            break;
                        case "chk_price_2":
                            if (priceCheck(price, 50000, 150000)) {
                                itemlistPrice.push(item.id);
                            };
                            break;
                        case "chk_price_3":
                            if (priceCheck(price, 150000, 250000)) {
                                itemlistPrice.push(item.id);
                            };
                            break;
                        case "chk_price_4":
                            if (priceCheck(price, 250000, 500000)) {
                                itemlistPrice.push(item.id);
                            };
                            break;
                        case "chk_price_5":
                            if (priceCheck(price, 500000, 99999999)) {
                                itemlistPrice.push(item.id);
                            };
                            break;
                        default:
                            break;
                    };

                });
                itemlistPriceCount = itemlistPrice.length;
                console.log(itemlistPrice, '/', itemlistPriceCount);
                priceChk = true;
            };
        };
        itemListFilter();
    });
});



function itemListFilter() {
    itemListFinal = [];

    if (priceChk === true && colorChk !== true) {
        itemListFinal = [].concat(itemlistPrice);
    } else if (priceChk !== true && colorChk === true) {
        itemListFinal = [].concat(itemlistColor);
    } else if (priceChk === true && colorChk === true) {
        itemListFinal = itemlistColor.concat(itemlistPrice);

        const tofindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
        const findSameItem = tofindDuplicates(itemListFinal);
        itemListFinal = [].concat(findSameItem);
    } else {
        itemListFinal = itemlistColor.concat(itemlistPrice);
        let itemListFinalUnique = [...new Set(itemListFinal)];
        itemListFinal = [].concat(itemListFinalUnique);
    }

    itemListFinalCount = itemListFinal.length;
    console.log(itemListFinal);
    pageMaker(itemListFinal);
}


function addItem_filter(index) {

    console.log("additem ID: ", index);

    let query = 'shoppingList_Top[id=' + index + ']';
    let queryResult = jsonQuery(query, {
        data: items
    }).value;

    console.log('query result:', queryResult);

    const Item = document.createElement('div');
    Item.setAttribute('class', 'item');

    const item_img = document.createElement('div');
    item_img.setAttribute('class', 'item_img');

    const item_url = document.createElement('a');
    item_url.setAttribute('class', 'item_url');
    let url_text = "./item_detail.html?";
    url_text += "id=";
    url_text += queryResult.id;
    item_url.setAttribute('href', url_text);
    // item_url.setAttribute('href', "./item_detail.html");


    item_img.appendChild(item_url);

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', queryResult.src[0]);
    item_img.appendChild(itemImg);

    const img_hover = document.createElement('img');
    img_hover.setAttribute('class', 'img_hover');
    img_hover.setAttribute('src', queryResult.src[1]);
    item_img.appendChild(img_hover);

    const cart = document.createElement('div');
    cart.setAttribute('class', 'cart');
    item_img.appendChild(cart);

    const desc_top = document.createElement('p');
    desc_top.setAttribute('class', 'desc_top');

    if (queryResult.isBest) {
        const best = document.createElement('span');
        const bestTxt = document.createTextNode("BEST");
        best.setAttribute('class', 'best');
        best.appendChild(bestTxt);
        desc_top.appendChild(best);
    }
    if (queryResult.isNew) {
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
    const itemNameText = document.createTextNode(queryResult.name);
    itemName.appendChild(itemNameText);

    const itemSubName = document.createElement('p');
    itemSubName.setAttribute('class', 'desc_sub');
    const itemSubNameText = document.createTextNode(queryResult.subname);
    itemSubName.appendChild(itemSubNameText);

    const itemPrice = document.createElement('p');
    let price = queryResult.price;
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

    Item.setAttribute('data-date',queryResult.date);
    Item.setAttribute('data-buycount',queryResult.buycount);
    Item.setAttribute('data-price',queryResult.price);
    Item.setAttribute('data-id',queryResult.id);

    items_list.appendChild(Item);

    item_url.addEventListener("click", function () {
        // event.preventDefault();
        setCookie("id", queryResult.id);
        // console.log(getCookie("id"));
        // location.href = "./item_detail.html";
    });
};

async function initPageItem() {
    while (items_list.hasChildNodes()) {
        items_list.removeChild(items_list.firstChild);
    }

    while (pagenation.hasChildNodes()) {
        pagenation.removeChild(pagenation.firstChild);
    }

    return true;
};

async function initItem(result, getvalue, getcount) {

    if (result === true) {

        console.log("Getvalue:", getvalue, "/ length:", getcount);
        if (getcount < 12) {
            for (let i = 0; i < getcount; i++) {
                console.log(getvalue[i]);

                addItem_filter(getvalue[i]);
            }
        } else {
            for (let i = 0; i < 12; i++) {
                console.log(getvalue[i]);
                addItem_filter(getvalue[i]);
            }
        }
    }
    return true
}

async function initPage(result, getcount) {
    if (result === true) {
        for (let i = 0; i < getcount; i++) {
            pageAry[page - 1] = itemCounter;
            if (itemCounter > 11) {
                itemCutNum++;
                check = check * itemCutNum;

                if ((getcount - check) > 0) {
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
    }
    return true
}

async function makePgn(result, getcount) {

    const pageBtn = document.createElement('div');
    pageBtn.setAttribute('class', 'page_btn');
    // pageBtn.setAttribute('type', 'module');
    pageBtn.innerText = page;
    pagenation.appendChild(pageBtn);

    if (result === true) {
        console.log("PageAry: ", pageAry);

        const pageBtns = document.querySelectorAll('.page_btn');

        pageBtns[0].classList.add("on");

        for (let i = 0; i < pageBtns.length; i++) {
            pageBtns[i].addEventListener('click', function () {
                console.log('this is a ' + i + 'page');
                let num = 12;

                num = num * i;

                tempNum = getcount;
                tempNum = tempNum - num;

                console.log("num:  " + num + "tempnum:  " + tempNum);

                while (items_list.hasChildNodes()) {
                    items_list.removeChild(items_list.firstChild);
                }

                let Loopcount = pageAry[i];

                for (let i = 0; i < Loopcount; i++) {
                    let count = num + i;
                    console.log("count is  ", count);

                    addItem_filter(count);

                }

                pageBtns.forEach((pgel) => {
                    pgel.classList.remove("on");
                });

                pageBtns[i].classList.add("on");

            });
        }
    };

}

async function pageMaker(getValue) {
    let getValueCount = getValue.length;
    const result = await initPageItem();
    console.log(result);
    const makeItem = await initItem(result, getValue, getValueCount);
    console.log(makeItem);
    const makePage = await initPage(makeItem, getValueCount);
    console.log(makePage);
    const makePagen = await makePgn(makePage, getValueCount);
    console.log(makePagen);
};