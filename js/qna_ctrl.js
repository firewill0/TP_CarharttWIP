const qna_list = document.querySelector('.qna_list');
const qna_detail = document.querySelectorAll('.qna_detail');
const qna_status = document.querySelector('.qna_status');
const btn_qnaList = document.querySelector('.btn_qnaList');
const qna_write_box = document.querySelector('.qna_write_box');
const btn_qnaOk = document.querySelector('.btn_qnaOk');
const btn_qnaCancel = document.querySelector('.btn_qnaCancel');
const qna_name_id = document.querySelector('#qna_name_id');
const qna_text_title_id = document.querySelector('#qna_text_title_id');
const qna_text_id = document.querySelector('#qna_text_id');
const qna_lock_id = document.querySelector('#qna_lock_id');
const qna_counter = document.querySelector('.qna_counter');
const qna_answer_box = document.querySelector('.qna_answer_box');
const qna_answer_text_id = document.querySelector('#qna_answer_text_id');
const btn_qna_answerOk = document.querySelector('.btn_qna_answerOk');
const btn_qna_answerCancel = document.querySelector('.btn_qna_answerCancel');

qna_counter.innerHTML = qna_detail.length;

btn_qnaList.addEventListener('click', function () {
    qna_write_box.style.display = "block";
});

btn_qnaCancel.addEventListener('click', function () {
    qna_write_box.style.display = "none";
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

btn_qnaOk.addEventListener('click', function () {
    let getRID = qna_name_id.value;

    let getQnAText = qna_text_id.value;
    let getQnATitle = qna_text_title_id.value;

    let result = RIDCheck(getRID);

    let nowDate = new Date();
    let DateString = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();

    console.log(result);

    let newQnA = document.createElement('li');
    newQnA.setAttribute('class', 'qna_detail notanswer');

    let newQnACat = document.createElement('p');
    newQnACat.setAttribute('class', 'qna_status');
    let newQnACatTextNode = document.createTextNode("미처리");
    newQnACat.appendChild(newQnACatTextNode);

    let qna_text_box = document.createElement('div');
    qna_text_box.setAttribute('class', 'qna_text_box');

    let qna_lock = qna_lock_id.checked;

    let newQnAText = document.createElement('p');
    newQnAText.setAttribute('class', 'qna_txt_detail')
    let newQnATextNode = document.createTextNode(getQnAText);
    newQnAText.appendChild(newQnATextNode);


    let newQnATitle = document.createElement('p');
    newQnATitle.setAttribute('class', 'qna_txt_title')
    let newQnATitleNode = document.createTextNode(getQnATitle);
    newQnATitle.appendChild(newQnATitleNode);

    if (qna_lock === true) {
        newQnAText.style.display = "none";
        let lock_icon = document.createElement('i');
        lock_icon.setAttribute('class', 'fas fa-lock');
        newQnATitle.appendChild(lock_icon);
        newQnA.classList.add("locked");
    } else {
        newQnAText.style.display = "block";
    }

    qna_text_box.appendChild(newQnATitle);
    qna_text_box.appendChild(newQnAText);


    let newQnADate = document.createElement('p');
    newQnADate.setAttribute('class', 'qna_date')
    let newQnADateNode = document.createTextNode(DateString);
    newQnADate.appendChild(newQnADateNode);

    let newRID = document.createElement('p');
    newRID.setAttribute('class', 'qna_id')
    let newRIDNode = document.createTextNode(result);
    newRID.appendChild(newRIDNode);

    let newDelete = document.createElement('p');
    newDelete.setAttribute('class', 'btnQnADelete');
    newDelete.innerHTML = `<i class="fas fa-backspace"></i>`;

    newDelete.addEventListener('click', function () {
        let parent = newDelete.parentNode;

        let getQnAID = parent.getAttribute('id');
        console.log(parent, getQnAID);

        qna_list.removeChild(document.getElementById(getQnAID));
        qna_answer_box.style.display = "none";
    });

    let newReply = document.createElement('p');
    newReply.setAttribute('class', 'btnQnAReply');
    newReply.innerHTML = `<i class="far fa-comment-dots"></i>`;

    newReply.addEventListener('click', function () {
        let parent = newReply.parentNode;

        let getQnAID = parent.getAttribute('id');
        console.log(parent, getQnAID);
        qna_answer_box.style.display = "block";
        addQnAReply(parent);
    });


    newQnA.appendChild(newQnACat);
    newQnA.appendChild(qna_text_box);
    newQnA.appendChild(newQnADate);
    newQnA.appendChild(newRID);
    newQnA.appendChild(newDelete);
    newQnA.appendChild(newReply);

    qna_list.appendChild(newQnA);

    let qna_list_child = qna_list.children.length;
    console.log(qna_list_child);
    qna_counter.innerHTML = qna_list_child;
    let newQnA_ID = "newQnAID" + qna_list_child
    newQnA.setAttribute('id', newQnA_ID);

    qna_write_box.style.display = "none";

    qna_name_id.value = '';
    qna_text_title_id.value = '';
    qna_text_title_id.value = '';
    qna_text_id.value = '';
    qna_lock_id.checked = false;

    const qna_detail_new = document.querySelectorAll('.qna_detail');

    qna_detail_new.forEach((element) => {
        addQnAAnswer(element);
    });
});

function addQnAAnswer(ele) {
    ele.addEventListener('click', function () {
        console.log(ele);

        if (ele.classList.contains("notanswer")) {
            console.log("not answered QnA");
            // qna_answer_box.style.display = "block";
        }

        if (ele.classList.contains("locked")) {
            const ele_qna_text_box = ele.querySelector('.qna_text_box');
            const ele_qna_txt_detail = ele_qna_text_box.querySelector('.qna_txt_detail');

            ele_qna_txt_detail.style.display = "block";
        };

    });

}

function addQnAReply(El_get) {
    btn_qna_answerOk.addEventListener('click', function () {
        console.log(El_get);
        let answer_text = qna_answer_text_id.value;
        El_get.querySelector('.qna_status').innerHTML = "답변완료";

        let reply_box = document.createElement('div');
        reply_box.setAttribute('class', 'reply_box');

        let reply_status = document.createElement('p');
        reply_status.innerHTML = "답변";
        reply_status.setAttribute('class', 'reply_status');

        let reply_answer = document.createElement('div');
        reply_answer.setAttribute('class', 'reply_answer');

        let reply_who = document.createElement('p');
        reply_who.innerHTML = `<i class='fas fa-reply fa-rotate-180'></i>[CARHARTT] 관리자`;
        reply_who.setAttribute('class', 'reply_who');

        let reply_text = document.createElement('p');
        reply_text.innerHTML = answer_text;
        reply_text.setAttribute('class', 'reply_text');

        reply_answer.appendChild(reply_who);
        reply_answer.appendChild(reply_text);

        reply_box.appendChild(reply_status);
        reply_box.appendChild(reply_answer);

        El_get.appendChild(reply_box);

        qna_answer_box.style.display = "none";

        qna_answer_text_id.value = "";
    });
}

btn_qna_answerCancel.addEventListener('click', function () {
    qna_answer_box.style.display = "none";

    const qna_detail_close = document.querySelectorAll('.qna_detail');

    qna_detail_close.forEach((element_close) => {
        if (element_close.classList.contains("locked")) {
            const ele_qna_text_box = element_close.querySelector('.qna_text_box');
            const ele_qna_txt_detail = ele_qna_text_box.querySelector('.qna_txt_detail');

            ele_qna_txt_detail.style.display = "none";
        };
    });
});