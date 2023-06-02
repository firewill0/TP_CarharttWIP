// id: "greenweb123",
// pw: "webd123!",
// name: "그린웹",
// tel: "0519121000",
// email: "greenweb@greenart.co.kr",
// gender: "no",
// birth: "",
// frnd_id: ""

// id: "firewill0",
// pw: "firewill0!",
// name: "변재현",
// tel: "01027742900",
// email: "nyangnyang12@naver.com",
// gender: "male",
// birth: "19920606",
// frnd_id: "greenweb123"
// data list

// 회원가입을 통해 추가한 계정은 당연히 작동되지 않음.

import {accountList} from "./data.js";
import {
    setCookie,
    getCookie
} from "./cookie_control.js";

document.addEventListener("DOMContentLoaded", () => {

    let accountListCount = accountList.length;

    let tab_id = document.querySelector('.tab_id');
    let tab_pw = document.querySelector('.tab_pw');

    let find_id_Area = document.querySelector('.find_id_Area');
    let find_pw_Area = document.querySelector('.find_pw_Area');

    let fakeline_left = document.querySelector('.fakeline_left');
    let fakeline_right = document.querySelector('.fakeline_right');

    let input_find_name = document.getElementById("input_find_name");
    let input_find_email = document.getElementById("input_find_email");
    let btnFindId = document.getElementById("btnFindId");

    let input_find_id = document.getElementById("input_find_id");
    let input_find_pw_email = document.getElementById("input_find_pw_email");
    let btnFindPw = document.getElementById("btnFindPw");

    let notice_box = document.querySelector('.notice_box');
    let notice_text = document.querySelector('.notice_text');

    tab_id.addEventListener('click', function () {
        find_id_Area.style.display = "block";
        find_pw_Area.style.display = "none";

        tab_id.style.backgroundColor = "white";
        tab_pw.style.backgroundColor = "#EEEEEE";

        fakeline_left.style.backgroundColor = "white";
        fakeline_right.style.width = "490px";
    });

    tab_pw.addEventListener('click', function () {
        find_id_Area.style.display = "none";
        find_pw_Area.style.display = "block";

        tab_id.style.backgroundColor = "#EEEEEE";
        tab_pw.style.backgroundColor = "white";

        fakeline_left.style.backgroundColor = "#555";
        fakeline_right.style.width = "364px";
    });

    btnFindId.addEventListener('click', findIdFnc);
    btnFindPw.addEventListener('click',findPwFnc);

    function findIdFnc() {
        let getName = input_find_name.value;
        let getEmail = input_find_email.value;


        for (let i = 0; i < accountListCount; i++) {
            let data_name = accountList[i].name;
            let data_email = accountList[i].email;

            if (getName == data_name) {
                console.log('name Matched');

                if (getEmail == data_email) {
                    console.log('email Matched');

                    let idText = "귀하의 아이디는 ";

                    idText += "<span>";
                    idText += accountList[i].id;
                    idText += "</span>";
                    idText += " 입니다.";

                    notice_text.innerHTML = idText;

                    break;
                } else {
                    console.log('email not Matched');
                    notice_text.innerHTML = "정보와 일치하는 아이디를 찾을 수 없습니다.";
                    break;
                }
            } else {
                console.log('Id not Matched');
                notice_text.innerHTML = "정보와 일치하는 아이디를 찾을 수 없습니다.";
            }
        };
    };

    function findPwFnc() {
        let getId = input_find_id.value;
        let getEmail = input_find_pw_email.value;


        for (let i = 0; i < accountListCount; i++) {
            let data_id = accountList[i].id;
            let data_email = accountList[i].email;

            if (getId == data_id) {
                console.log('id Matched');

                if (getEmail == data_email) {
                    console.log('email Matched');

                    notice_text.innerHTML = "임시 비밀번호가 발급되었습니다." + "<br />" + "해당 이메일의 메일함을 확인해주세요.";
                    
                    break;
                } else {
                    console.log('email not Matched');
                    notice_text.innerHTML = "아이디 또는 이메일이 틀렸습니다.";
                    break;
                }
            } else {
                console.log('id not Matched');
                notice_text.innerHTML = "아이디 또는 이메일이 틀렸습니다.";
            }
        };
    };
});