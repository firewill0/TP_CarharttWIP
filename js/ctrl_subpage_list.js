import {
    shoppingList_Top
} from "./data.js";

const items_list = document.querySelector('.items_list');
const pagenation = document.querySelector('.pagination');
let page = 1;
let c = 1;
let check = 12;
let cut = 0;
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

if (shoppingList_TopCount < 12) {
    for (let i = 0; i < shoppingList_TopCount; i++) {

        const Item = document.createElement('div');
        Item.setAttribute('class', 'item');

        const item_img = document.createElement('div');
        item_img.setAttribute('class', 'item_img');

        const item_url = document.createElement('a');
        item_url.setAttribute('class','item_url');
        item_url.setAttribute('href',"./item_detail.html" );
        item_img.appendChild(item_url);

        const itemImg = document.createElement('img');
        itemImg.setAttribute('src', shoppingList_Top[i].src[0]);
        item_img.appendChild(itemImg);

        const img_hover = document.createElement('img');
        img_hover.setAttribute('class', 'img_hover');
        img_hover.setAttribute('src', shoppingList_Top[i].src[1]);
        item_img.appendChild(img_hover);

        const cart = document.createElement('div');
        cart.setAttribute('class', 'cart');
        item_img.appendChild(cart);

        const desc_top = document.createElement('p');
        desc_top.setAttribute('class', 'desc_top');

        if (shoppingList_Top[i].isBest) {
            const best = document.createElement('span');
            const bestTxt = document.createTextNode("BEST");
            best.setAttribute('class','best');
            best.appendChild(bestTxt);
            desc_top.appendChild(best);
        }
        if (shoppingList_Top[i].isNew) {
            const newtag = document.createElement('span');
            const newtxt = document.createTextNode("NEW");
            newtag.setAttribute('class','new');
            newtag.appendChild(newtxt);
            desc_top.appendChild(newtag);
        }

        const desc = document.createElement('div');
        desc.setAttribute('class', 'desc');

        const itemName = document.createElement('p');
        itemName.setAttribute('class', 'desc_main');
        const itemNameText = document.createTextNode(shoppingList_Top[i].name);
        itemName.appendChild(itemNameText);

        const itemSubName = document.createElement('p');
        itemSubName.setAttribute('class', 'desc_sub');
        const itemSubNameText = document.createTextNode(shoppingList_Top[i].subname);
        itemSubName.appendChild(itemSubNameText);

        const itemPrice = document.createElement('p');
        let price = shoppingList_Top[i].price;
        // const itemPriceText = document.createTextNode(price);
        const itemPriceText = document.createTextNode(KrWon.format(price));
        itemPrice.setAttribute('class','desc_price');

        itemPrice.appendChild(itemPriceText);

        desc.appendChild(itemName);
        desc.appendChild(itemSubName);
        desc.appendChild(itemPrice);

        Item.appendChild(item_img);
        Item.appendChild(desc_top);
        Item.appendChild(desc);

        items_list.appendChild(Item);
    }
} else {
    for (let i = 0; i < 12; i++) {
        const Item = document.createElement('div');
        Item.setAttribute('class', 'item');

        const item_img = document.createElement('div');
        item_img.setAttribute('class', 'item_img');

        const itemImg = document.createElement('img');
        itemImg.setAttribute('src', shoppingList_Top[i].src[0]);
        item_img.appendChild(itemImg);

        const img_hover = document.createElement('img');
        img_hover.setAttribute('class', 'img_hover');
        img_hover.setAttribute('src', shoppingList_Top[i].src[1]);
        item_img.appendChild(img_hover);

        const cart = document.createElement('div');
        cart.setAttribute('class', 'cart');
        item_img.appendChild(cart);

        const desc_top = document.createElement('p');
        desc_top.setAttribute('class', 'desc_top');

        if (shoppingList_Top[i].isBest) {
            const best = document.createElement('span');
            const bestTxt = document.createTextNode("BEST");
            best.appendChild(bestTxt);
            desc_top.appendChild(best);
        }
        if (shoppingList_Top[i].isNew) {
            const newtag = document.createElement('span');
            const newtxt = document.createTextNode("NEW");
            newtag.appendChild(newtxt);
            desc_top.appendChild(newtag);
        }

        const desc = document.createElement('div');
        desc.setAttribute('class', 'desc');

        const itemName = document.createElement('p');
        itemName.setAttribute('class', 'desc_main');
        const itemNameText = document.createTextNode(shoppingList_Top[i].name);
        itemName.appendChild(itemNameText);

        const itemSubName = document.createElement('p');
        itemSubName.setAttribute('class', 'desc_sub');
        const itemSubNameText = document.createTextNode(shoppingList_Top[i].subname);
        itemSubName.appendChild(itemSubNameText);

        const itemPrice = document.createElement('p');
        let price = shoppingList_Top[i].price;
        // const itemPriceText = document.createTextNode(price);
        const itemPriceText = document.createTextNode(KrWon.format(price));

        itemPrice.appendChild(itemPriceText);

        desc.appendChild(itemName);
        desc.appendChild(itemSubName);
        desc.appendChild(itemPrice);

        Item.appendChild(item_img);
        Item.appendChild(desc_top);
        Item.appendChild(desc);

        items_list.appendChild(Item);
    }
}

for (let i = 0; i < shoppingList_TopCount; i++) {
    pageAry[page - 1] = c;
    if (c > 11) {
        cut++;
        check = check * cut;

        if ((shoppingList_TopCount - check) > 0) {
            page = page + 1;
            c = 1;
            console.log(page, c);
            const pageBtn = document.createElement('div');
            pageBtn.setAttribute('class', 'page_btn');
            pageBtn.innerText = page;
            pagenation.appendChild(pageBtn);
        }
    } else {
        console.log(page, c);
        c = c + 1;
    }
};


console.log("PageAry: ", pageAry);

const pageBtns = document.querySelectorAll('.page_btn');

for (let i = 0; i < pageBtns.length; i++) {
    pageBtns[i].addEventListener('click', function () {
        console.log('this is a ' + i + 'page');
        let num = 12;

        num = num * i;

        tempNum = shoppingList_TopCount;
        tempNum = tempNum - num;

        console.log("num:  " + num + "tempnum:  " + tempNum);

        while (items_list.hasChildNodes()) {
            items_list.removeChild(items_list.firstChild);
        }

        let Loopcount = pageAry[i];

        for (let i = 0; i < Loopcount; i++) {
            let count = num + i;
            console.log("count is  ", count);

            const Item = document.createElement('div');
            Item.setAttribute('class', 'item');
    
            const item_img = document.createElement('div');
            item_img.setAttribute('class', 'item_img');
    
            const itemImg = document.createElement('img');
            itemImg.setAttribute('src', shoppingList_Top[count].src[0]);
            item_img.appendChild(itemImg);
    
            const img_hover = document.createElement('img');
            img_hover.setAttribute('class', 'img_hover');
            img_hover.setAttribute('src', shoppingList_Top[count].src[1]);
            item_img.appendChild(img_hover);
    
            const cart = document.createElement('div');
            cart.setAttribute('class', 'cart');
            item_img.appendChild(cart);
    
            const desc_top = document.createElement('p');
            desc_top.setAttribute('class', 'desc_top');
    
            if (shoppingList_Top[count].isBest) {
                const best = document.createElement('span');
                const bestTxt = document.createTextNode("BEST");
                best.setAttribute('class','best');
                best.appendChild(bestTxt);
                desc_top.appendChild(best);
            }
            if (shoppingList_Top[count].isNew) {
                const newtag = document.createElement('span');
                const newtxt = document.createTextNode("NEW");
                newtag.setAttribute('class','new');
                newtag.appendChild(newtxt);
                desc_top.appendChild(newtag);
            }
    
            const desc = document.createElement('div');
            desc.setAttribute('class', 'desc');
    
            const itemName = document.createElement('p');
            itemName.setAttribute('class', 'desc_main');
            const itemNameText = document.createTextNode(shoppingList_Top[count].name);
            itemName.appendChild(itemNameText);
    
            const itemSubName = document.createElement('p');
            itemSubName.setAttribute('class', 'desc_sub');
            const itemSubNameText = document.createTextNode(shoppingList_Top[count].subname);
            itemSubName.appendChild(itemSubNameText);
    
            const itemPrice = document.createElement('p');
            let price = shoppingList_Top[count].price;
            // const itemPriceText = document.createTextNode(price);
            const itemPriceText = document.createTextNode(KrWon.format(price));
    
            itemPrice.appendChild(itemPriceText);
            itemPrice.setAttribute('class','desc_price');
    
            desc.appendChild(itemName);
            desc.appendChild(itemSubName);
            desc.appendChild(itemPrice);
    
            Item.appendChild(item_img);
            Item.appendChild(desc_top);
            Item.appendChild(desc);
    
            items_list.appendChild(Item);
        }
    });
}