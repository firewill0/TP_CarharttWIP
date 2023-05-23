import {Lookbook_Data} from './data.js';

const lbs = document.querySelectorAll('.lb')
const lookbook_background = document.querySelector('.lookbook_background');
const lookbook_stand = document.querySelector('.lookbook_stand');
const lookbook_item1 = document.querySelector('.lookbook_item1');
const lookbook_item2 = document.querySelector('.lookbook_item2');
const lookbook_item3 = document.querySelector('.lookbook_item3');
const lookbook_item1_desc = document.querySelector('.lookbook_item1_desc');
const lookbook_item2_desc = document.querySelector('.lookbook_item2_desc');
const lookbook_item3_desc = document.querySelector('.lookbook_item3_desc');

function textMaker(target, textarray) {
    target.innerHTML = "";
    for (let i = 0; i < textarray.length; i++) {
        target.innerHTML += textarray[i];
        target.innerHTML += "<br />";
    };
};

function setPic(target, source) {
    target.setAttribute("src", source);
};

function setPicPos(target, source, standChk = true) {
    if (standChk) {
        target.style.width = source[0];
        target.style.height = source[1];
    } else {
        target.style.width = source[0];
        target.style.height = source[1];
        target.style.left = source[2];
        target.style.top = source[3];
    }
}

function setLookbook(getid) {
    for (let i = 0; i < Lookbook_Data.length; i++) {
        if (getid === Lookbook_Data[i].id) {
            setPic(lookbook_background, Lookbook_Data[i].background_src);
            setPic(lookbook_stand, Lookbook_Data[i].stand_src);
            setPic(lookbook_item1, Lookbook_Data[i].item1_src);
            setPic(lookbook_item2, Lookbook_Data[i].item2_src);
            setPic(lookbook_item3, Lookbook_Data[i].item3_src);

            setPicPos(lookbook_stand, Lookbook_Data[i].stand_data);
            setPicPos(lookbook_item1, Lookbook_Data[i].item1_data, false);
            setPicPos(lookbook_item2, Lookbook_Data[i].item2_data, false);
            setPicPos(lookbook_item3, Lookbook_Data[i].item3_data, false);

            textMaker(lookbook_item1_desc, Lookbook_Data[i].item1_desc);
            textMaker(lookbook_item2_desc, Lookbook_Data[i].item2_desc);
            textMaker(lookbook_item3_desc, Lookbook_Data[i].item3_desc);

            lookbook_item1.addEventListener('click', function () {
                location.href = Lookbook_Data[i].item1_url;
            });
            lookbook_item2.addEventListener('click', function () {
                location.href = Lookbook_Data[i].item2_url;
            });
            lookbook_item3.addEventListener('click', function () {
                location.href = Lookbook_Data[i].item3_url;
            });

            break;
        }
    }

}


// 처음 접속했을때 첫번째 아이템을 보여줄것
let getID = "lookbook_1";
setLookbook(getID);

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


lbs.forEach((lb) => {
    lb.addEventListener('click', function () {
        let lbId = lb.getAttribute("id");
        setLookbook(lbId);
    });
});