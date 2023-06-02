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

let accountListCount = accountList.length;
let loginSuccess = false;
let idTemp = "";

const pw_show = document.querySelector('#pw_show_id');
const pw = document.getElementById('pw_id');
const id = document.getElementById('input_id');
const mem_id = document.getElementById('mem_id');
const btnLogin = document.getElementById('btnLogin');
const termsBtn = document.querySelector('.terms');
const termsCloseBtn = document.querySelector('.termsClose');
const termsArea = document.querySelector('.termsArea');
const login_alert = document.querySelector('.login_alert');
const capslock_alert = document.querySelector('.alert_capslock');

function memidShow() {
    let lastId = getCookie("lastId");

    if (lastId != null || lastId != "" || lastId != " " || lastId != undefined) {
        id.value = lastId;
    };
};

memidShow();

btnLogin.addEventListener('click', LoginEvent);
pw_show.addEventListener('click', pwShowEvent);
termsBtn.addEventListener('click', termsOpenEvent);
termsCloseBtn.addEventListener('click', termsCloseEvent);
pw.addEventListener('keyup', capsLockDetect);

function capsLockDetect(e) {
    if (e.getModifierState("CapsLock")) {
        // visibility: hidden;
        // opacity: 0;
        capslock_alert.style.visibility = "visible";
        capslock_alert.style.opacity = "1";

    } else {
        capslock_alert.style.visibility = "hidden";
        capslock_alert.style.opacity = "0";
    }
}

function pwShowEvent() {
    if (pw_show.checked) {
        pw.setAttribute("type", "text");
    } else {
        pw.setAttribute("type", "password");
    };
};

function LoginEvent() {
    let getId = id.value;
    let getPw = pw.value;


    for (let i = 0; i < accountListCount; i++) {
        let data_id = accountList[i].id;
        let data_pw = accountList[i].pw;

        if (getId == data_id) {
            console.log('Id Matched');

            if (getPw == data_pw) {
                console.log('Pw Matched');
                login_alert.style.display = "block";
                login_alert.innerHTML = "로그인을 환영합니다.";
                login_alert.style.color = "green";
                idTemp = getId;
                loginSuccess = true;
                loginStart();
                break;
            } else {
                console.log('Pw not Matched');
                login_alert.style.display = "block";
                login_alert.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다." + "<br />" +
                    "입력하신 내용을 다시 확인해주세요.";
                login_alert.style.color = "red";
                id.focus();
                break;
            }
        } else {
            console.log('Id not Matched');
            login_alert.style.display = "block";
            login_alert.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다." + "<br />" +
                "입력하신 내용을 다시 확인해주세요.";
            login_alert.style.color = "red";
            id.focus();
        }
    }
};

function termsOpenEvent() {
    termsArea.style.opacity = "1";
    termsArea.style.visibility = "visible";
};

function termsCloseEvent() {
    termsArea.style.opacity = "0";
    termsArea.style.visibility = "hidden";
};

function loginStart() {
    if (loginSuccess) {

        if (mem_id.checked) {
            setCookie("lastId", idTemp);
        } else {
            setCookie("lastId", "");
        }
        setCookie("userId", idTemp);
        setCookie("userLogin", "yes");
        location.href = "index.html";
    }
}

// document.addEventListener("DOMContentLoaded", () => {

 
// });