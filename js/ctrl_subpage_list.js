import shoppingList from "./data.js";

const bestproduct = document.querySelector('.best_product');
const pagenation = document.querySelector('.pagenation');
let page = 1;
let c = 1;
let check = 12;
let cut = 0;
let tempNum = 0;
let pageAry = [];

const pageBtn = document.createElement('button');
pageBtn.setAttribute('class', 'pageBtn');
pageBtn.setAttribute('type', 'module');
pageBtn.innerText = page;
pagenation.appendChild(pageBtn);

let shoppingListCount = shoppingList.length;

console.log(shoppingListCount);

if (shoppingListCount < 12) {
    for (let i = 0; i < shoppingListCount; i++) {
        const bestDiv = document.createElement('div');
        bestDiv.setAttribute('class', 'best_box');

        const bestImg = document.createElement('img');
        bestImg.setAttribute('src', shoppingList[i].src);
        bestDiv.appendChild(bestImg);

        const bestName = document.createElement('p');
        const bestNameText = document.createTextNode(shoppingList[i].name);
        bestName.appendChild(bestNameText);

        const bestPrice = document.createElement('p');
        let price = shoppingList[i].price;
        price = price - (price * 0.3);
        const bestPriceText = document.createTextNode(price);
        bestPrice.appendChild(bestPriceText);

        bestDiv.appendChild(bestName);
        bestDiv.appendChild(bestPrice);

        bestproduct.appendChild(bestDiv);
    }
} else {
    for (let i = 0; i < 12; i++) {
        const bestDiv = document.createElement('div');
        bestDiv.setAttribute('class', 'best_box');

        const bestImg = document.createElement('img');
        bestImg.setAttribute('src', shoppingList[i].src);
        bestDiv.appendChild(bestImg);

        const bestName = document.createElement('p');
        const bestNameText = document.createTextNode(shoppingList[i].name);
        bestName.appendChild(bestNameText);

        const bestPrice = document.createElement('p');
        let price = shoppingList[i].price;
        price = price - (price * 0.3);
        const bestPriceText = document.createTextNode(price);
        bestPrice.appendChild(bestPriceText);

        bestDiv.appendChild(bestName);
        bestDiv.appendChild(bestPrice);

        bestproduct.appendChild(bestDiv);
    }
}

for (let i = 0; i < shoppingListCount; i++) {
    pageAry[page - 1] = c;
    if (c > 11) {
        cut++;
        check = check * cut;

        if ((shoppingListCount - check) > 0) {
            page = page + 1;
            c = 1;
            console.log(page, c);
            const pageBtn = document.createElement('button');
            pageBtn.setAttribute('class', 'pageBtn');
            pageBtn.setAttribute('type', 'module');
            pageBtn.innerText = page;
            pagenation.appendChild(pageBtn);
        }
    } else {
        console.log(page, c);
        c = c + 1;
    }
};


console.log("PageAry: ", pageAry);

const pageBtns = document.querySelectorAll('.pageBtn');

for (let i = 0; i < pageBtns.length; i++) {
    pageBtns[i].addEventListener('click', function () {
        console.log('this is a ' + i + 'page');
        let num = 12;

        num = num * i;

        tempNum = shoppingListCount;
        tempNum = tempNum - num;

        console.log("num:  " + num + "tempnum:  " + tempNum);

        while (bestproduct.hasChildNodes()) {
            bestproduct.removeChild(bestproduct.firstChild);
        }

        let Loopcount = pageAry[i];

        for (let i = 0; i < Loopcount; i++) {
            let count = num + i;
            console.log("count is  ", count);

            const bestDiv = document.createElement('div');
            bestDiv.setAttribute('class', 'best_box');

            const bestImg = document.createElement('img');
            bestImg.setAttribute('src', shoppingList[count].src);
            bestDiv.appendChild(bestImg);

            const bestName = document.createElement('p');
            const bestNameText = document.createTextNode(shoppingList[count].name);
            bestName.appendChild(bestNameText);

            const bestPrice = document.createElement('p');
            let price = shoppingList[count].price;
            price = price - (price * 0.3);
            const bestPriceText = document.createTextNode(price);
            bestPrice.appendChild(bestPriceText);

            bestDiv.appendChild(bestName);
            bestDiv.appendChild(bestPrice);

            bestproduct.appendChild(bestDiv);
        }
    });
}

