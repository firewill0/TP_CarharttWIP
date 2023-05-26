const review_list = document.querySelector('.review_list');
const review_detail = document.querySelectorAll('.review_detail');
const review_write_box = document.querySelector('.review_write_box');
const btn_writeReview = document.querySelector('.btn_writeReview');
const btn_reviewOk = document.querySelector('.btn_reviewOk');
const btn_reviewCancel = document.querySelector('.btn_reviewCancel');
const review_name_id = document.querySelector('#review_name_id');
const review_rating_id = document.querySelector('#review_rating_id');
const review_text_id = document.querySelector('#review_text_id');
const review_counter = document.querySelector('.review_counter');

review_counter.innerHTML = review_detail.length;

btn_writeReview.addEventListener('click', function () {
    review_write_box.style.display = "block";
});

function RIDCheck(id) {
    let data = "";
    if (id.length >= 6) {
        let result = id.slice(0, 6);
        let prefix = id.slice(0, 2);
        for (let i = 0; i < result.length; i++) {
            if (i >= 2) {
                prefix += "*";
            };
        };
        data = prefix;
    } else {
        let prefix = id.slice(0, 2);
        for (let i = 0; i < id.length; i++) {
            if (i >= 2) {
                prefix += "*";
            };
        };
        data = prefix;
    };

    return data;
}

function RatingCheck(node, value) {
    if (value > 5) {
        value = 5;
    };
    if (value == 0) {
        value = 1;
    };

    console.log('rating_num:',value);

    for (let i = 1; i < 6; i++) {
        let newStar = document.createElement('i');
        if (i <= value) {
            newStar.setAttribute('class','fas fa-star');
        }
        else {
            newStar.setAttribute('class','far fa-star');      
        }
        node.appendChild(newStar);
    }

}

btn_reviewOk.addEventListener('click', function () {
    let getRID = review_name_id.value;
    let getRating = review_rating_id.value;
    let RatingInt = parseInt(getRating);
    let getReviewText = review_text_id.value;

    let result = RIDCheck(getRID);

    console.log('rating:',RatingInt);

    let nowDate = new Date();
    let DateString = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();

    console.log(result);

    let newRD = document.createElement('li');
    newRD.setAttribute('class', 'review_detail');

    let newRText = document.createElement('p');
    newRText.setAttribute('class', 'review_txt')
    let newRTextNode = document.createTextNode(getReviewText);
    newRText.appendChild(newRTextNode);

    let newRRating = document.createElement('p');
    newRRating.setAttribute('class', 'reivew_rating')
    RatingCheck(newRRating, RatingInt);


    let newRDate = document.createElement('p');
    newRDate.setAttribute('class', 'review_date')
    let newRDateNode = document.createTextNode(DateString);
    newRDate.appendChild(newRDateNode);

    let newRID = document.createElement('p');
    newRID.setAttribute('class', 'review_id')
    let newRIDNode = document.createTextNode(result);
    newRID.appendChild(newRIDNode);

    newRD.appendChild(newRText);
    newRD.appendChild(newRRating);
    newRD.appendChild(newRDate);
    newRD.appendChild(newRID);

    review_list.appendChild(newRD);

    let review_list_child = review_list.children.length;

    review_counter.innerHTML = review_list_child;

    review_write_box.style.display = "none";

    review_name_id.value = '';
    review_rating_id.value = '';
    review_text_id.value = '';
});


btn_reviewCancel.addEventListener('click', function () {
    review_write_box.style.display = "none";
});