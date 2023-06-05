import {
    shoppingList_Top
} from "./data.js";

let KrWon = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});

const sel_sort = document.getElementById('sel_sort');
const items_list = document.querySelector('.items_list');

sel_sort.addEventListener('change', async function () {
    let sortValue = sel_sort.value;
    console.log(sortValue);

    let sortArry = items_list.children;

    let sorted = await sortItems(sortValue, sortArry);

    console.log("getnew:", sorted);

    while (items_list.hasChildNodes()) {
        items_list.removeChild(items_list.firstChild);
    }

    makeItemList(sorted);
});

function makeItemList(array) {


    const arraycount = array.length;

    for (let i = 0; i < arraycount; i++) {
        addItem(array[i]);
    }
}

function addItem(el) {


    let getId = el.dataset.idint;
    const Item = document.createElement('div');
    Item.setAttribute('class', 'item');

    const item_img = document.createElement('div');
    item_img.setAttribute('class', 'item_img');

    const item_url = document.createElement('a');
    item_url.setAttribute('class', 'item_url');
    let url_text = "./item_detail.html?";
    url_text += "id=";
    url_text += shoppingList_Top[getId].id;
    item_url.setAttribute('href', url_text);
    // item_url.setAttribute('href', "./item_detail.html");


    item_img.appendChild(item_url);

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', shoppingList_Top[getId].src[0]);
    item_img.appendChild(itemImg);

    const img_hover = document.createElement('img');
    img_hover.setAttribute('class', 'img_hover');
    img_hover.setAttribute('src', shoppingList_Top[getId].src[1]);
    item_img.appendChild(img_hover);

    const cart = document.createElement('div');
    cart.setAttribute('class', 'cart');
    item_img.appendChild(cart);

    const desc_top = document.createElement('p');
    desc_top.setAttribute('class', 'desc_top');

    if (shoppingList_Top[getId].isBest) {
        const best = document.createElement('span');
        const bestTxt = document.createTextNode("BEST");
        best.setAttribute('class', 'best');
        best.appendChild(bestTxt);
        desc_top.appendChild(best);
    }
    if (shoppingList_Top[getId].isNew) {
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
    const itemNameText = document.createTextNode(shoppingList_Top[getId].name);
    itemName.appendChild(itemNameText);

    const itemSubName = document.createElement('p');
    itemSubName.setAttribute('class', 'desc_sub');
    const itemSubNameText = document.createTextNode(shoppingList_Top[getId].subname);
    itemSubName.appendChild(itemSubNameText);

    const itemPrice = document.createElement('p');
    let price = shoppingList_Top[getId].price;
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

    Item.setAttribute('data-date', shoppingList_Top[getId].date);
    Item.setAttribute('data-buycount', shoppingList_Top[getId].buycount);
    Item.setAttribute('data-price', shoppingList_Top[getId].price);
    Item.setAttribute('data-id', shoppingList_Top[getId].id);
    Item.setAttribute('data-idint', shoppingList_Top[getId].idInt);

    items_list.appendChild(Item);

    item_url.addEventListener("click", function () {
        // event.preventDefault();
        setCookie("id", shoppingList_Top[getId].id);
        // console.log(getCookie("id"));
        // location.href = "./item_detail.html";
    });
};

function sortItems(value, arr) {

    let sortArry_new;
    switch (value) {
        case "new":

            // sortArry_new = Array.prototype.slice.call(arr, 0);

            sortArry_new = Array.slice.call(arr, 0);

            sortArry_new.sort(function (a, b) {
                let avalue = parseInt(a.dataset.date);
                let bvalue = parseInt(b.dataset.date);
                console.log(avalue, bvalue);
                return bvalue - avalue;
            });

            console.log(sortArry_new);

            break;
        case "best":

            sortArry_new = Array.prototype.slice.call(arr, 0);

            sortArry_new.sort(function (a, b) {
                let avalue = parseInt(a.dataset.buycount);
                let bvalue = parseInt(b.dataset.buycount);
                console.log(avalue, bvalue);
                return bvalue - avalue;
            });

            console.log(sortArry_new);

            break;
        case "low":
            sortArry_new = Array.prototype.slice.call(arr, 0);

            sortArry_new.sort(function (a, b) {
                let avalue = parseInt(a.dataset.price);
                let bvalue = parseInt(b.dataset.price);
                console.log(avalue, bvalue);
                return avalue - bvalue;
            });

            console.log(sortArry_new);

            break;
        case "high":
            sortArry_new = Array.prototype.slice.call(arr, 0);

            sortArry_new.sort(function (a, b) {
                let avalue = parseInt(a.dataset.price);
                let bvalue = parseInt(b.dataset.price);
                console.log(avalue, bvalue);
                return bvalue - avalue;
            });

            console.log(sortArry_new);
            break;

        default:
            break;
    }

    return sortArry_new;
}