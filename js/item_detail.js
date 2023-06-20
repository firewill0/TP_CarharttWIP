// json query 사용
let jsonQuery = require('json-query');

const myURL = new URL(window.location.toLocaleString()).searchParams;

const myID = myURL.get('id');

console.log("getId is:", myID);

let itemId = myID;

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

let KrWon = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
});

// let xhr = new XMLHttpRequest(); // 인스턴스 (객체변수보단 인스턴스라고 부르면 됨)
// xhr.open('GET', './db.json');
// xhr.send();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log("READY");
//         let datalist = JSON.parse(xhr.responseText);
//         let items = datalist;
//         showItem(items, itemId);
//     }
// }

let xhr = new XMLHttpRequest(); // 인스턴스 (객체변수보단 인스턴스라고 부르면 됨)
xhr.open('GET', 'https://api.jsonbin.io/v3/b/649130549d312622a372739a?meta=false');
xhr.setRequestHeader("X-ACCESS-KEY", "$2b$10$pE7GTgaS/7K.wG3/9iP2reNPIUt2FUju1usLbHcrBbDFM.oUbnD/e");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("READY");
        let datalist = JSON.parse(xhr.responseText);
        console.log("JSON:",datalist);
        let items = datalist;
        showItem(items, itemId);
    }
}

function showItem(contents, id) {
    console.log(contents, id);
    let leng = contents.length;
    console.log(leng);
    let query = 'itemList[id=' + id + ']';
    let qResult = jsonQuery(query, {
        data: contents
    }).value;

    console.log(qResult);

    title.innerHTML = qResult.name;
    itemcode.innerHTML = qResult.stylecode;
    item_img.setAttribute('src', qResult.colorSrc[0][0]);
    price.innerHTML = KrWon.format(qResult.price);

    thumbnail.forEach((value, idx) => {
        value.setAttribute('src', qResult.colorSrc[0][idx]);

        value.addEventListener('mouseover', function () {
            item_img.setAttribute('src', qResult.colorSrc[0][idx]);
        });
    });

    if (qResult.isBest) {
        bestTag.style.display = "block";
    } else {
        bestTag.style.display = "none";
    }

    if (qResult.isNew) {
        newTag.style.display = "block";
    } else {
        newTag.style.display = "none";
    }

    save.innerHTML = KrWon.format(qResult.price * 0.005);

    desc_detail.innerHTML = "";
    for (let i = 0; i < qResult.desc.length; i++) {
        desc_detail.innerHTML += qResult.desc[i];
        desc_detail.innerHTML += "<br />";
    }


    let colorList = qResult.colorSrc;

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


    let sizeList = qResult.size;

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

    if (qResult.withItem) {

        for (let i = 0; i < qResult.withItemID.length; i++) {
            if (i > 3) {
                break;
            }

            let getwItem = qResult.withItemID[i];

            let wquery = 'itemList[id=' + getwItem + ']';
            let wResult = jsonQuery(wquery, {
                data: contents
            }).value;

            let wItem = document.createElement('div');
            wItem.setAttribute('class', 'item');
            let wItem_img = document.createElement('img');
            wItem_img.setAttribute('src', wResult.colorSrc[0][0]);
            let wItem_desc = document.createElement('p');
            wItem_desc.setAttribute('class', 'item_name');
            wItem_desc.innerHTML = wResult.name;
            let wItem_price = document.createElement('p');
            wItem_price.setAttribute('class', 'item_price');
            wItem_price.innerHTML = KrWon.format(wResult.price);

            wItem.appendChild(wItem_img);
            wItem.appendChild(wItem_desc);
            wItem.appendChild(wItem_price);

            wItem.addEventListener("click", function () {
                let gotoUrl = "./item_detail.html?id=" + wResult.id;
                location.href = gotoUrl;
            });
            item_combo_list.appendChild(wItem);
        }
    }

    let rvlist = JSON.parse(sessionStorage.rvlist);
    console.log(rvlist);
    let new_arr = rvlist;
    let rvCounter = 0;


    new_arr.unshift(itemId);
    let getRvlistUnique = [...new Set(new_arr)];
    sessionStorage.setItem("rvlist", JSON.stringify(getRvlistUnique));

    console.log(sessionStorage.rvlist);


    console.log(new_arr.length);

    new_arr.forEach((element) => {
        let rvquery = 'itemList[id=' + element + ']';
        let rvResult = jsonQuery(rvquery, {
            data: contents
        }).value;

        if (element !== itemId && rvCounter < 3) {
            let rvItem = document.createElement('div');
            rvItem.setAttribute('class', 'watched_item item');
            let rvItem_img = document.createElement('img');
            rvItem_img.setAttribute('src', rvResult.colorSrc[0][0]);
            let rvItem_desc = document.createElement('p');
            rvItem_desc.setAttribute('class', 'item_name');
            rvItem_desc.innerHTML = rvResult.name;
            let rvItem_price = document.createElement('p');
            rvItem_price.setAttribute('class', 'item_price');
            rvItem_price.innerHTML = KrWon.format(rvResult.price);

            rvItem.appendChild(rvItem_img);
            rvItem.appendChild(rvItem_desc);
            rvItem.appendChild(rvItem_price);

            rvItem.addEventListener("click", function () {
                let newurl = "./item_detail.html?id=" + element;
                location.href = newurl;
            });
            watched_item_combo_list.appendChild(rvItem);
            rvCounter++;
        }

    });

}