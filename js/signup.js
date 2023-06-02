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

import {accountList} from "./data.js";
import {
    setCookie,
    getCookie
} from "./cookie_control.js";

document.addEventListener("DOMContentLoaded", () => {

    let accountListCount = accountList.length;

    let nameCheck = false;
    let idCheck = false;
    let pwCheck = false;
    let emailCheck = false;
    let termsCheck = false;
    let sameIdCheck = false;
    let idChecked = false;

    let nameTemp = "";
    let idTemp = "";
    let pwTemp = "";
    let emailTemp = "";
    let phoneTemp = "";
    let genderTemp = "";
    let bdTemp = "";
    let frnd_idTemp = "";

    const idRegcheck = /^[A-Z|a-z|0-9]{5,16}$/g;
    const pwRegcheck = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/g;

    const nameInput = document.getElementById("input_name");
    const input_id = document.getElementById("input_id");
    const btnIDChk = document.getElementById("btnIDChk");
    const pw_show = document.querySelector('#pw_show_id');
    const pw = document.getElementById("pw_id");
    const pwChk = document.getElementById("pwchk_id");
    const email_id = document.getElementById("email_id");
    const email_addr_id = document.getElementById("email_addr_id");
    const email_com_id = document.getElementById("email_com_id");

    const text_IDWarn = document.querySelector('.text_IDWarn');
    const text_PWWarn = document.querySelector('.text_PWWarn');
    const text_PWChkWarn = document.querySelector('.text_PWChkWarn');
    const text_EmailWarn = document.querySelector('.text_EmailWarn');

    const phone_first_id = document.getElementById("phone_first_id");
    const phone_center_id = document.getElementById("phone_center_id");
    const phone_last_id = document.getElementById("phone_last_id");

    const gender_list_id = document.getElementById("gender_list_id");

    const bd_year_id = document.getElementById("bd_year_id");
    const bd_month_id = document.getElementById("bd_month_id");
    const bd_day_id = document.getElementById("bd_day_id");

    const frnd_id = document.getElementById("frnd_id");


    const chk_allTerms = document.getElementById("chk_allTerms");
    const chk_mainTerms = document.getElementById("chk_mainTerms");
    const chk_infoTerms = document.getElementById("chk_infoTerms");
    const mkr_email = document.getElementById("mkr_email");
    const mkr_push = document.getElementById("mkr_push");

    const AllTerms = document.querySelectorAll('.terms_all');

    const btnSignup = document.getElementById("btnSignup");

    nameInput.addEventListener('change', nameEvent);

    btnIDChk.addEventListener('click', idDupCheck);
    input_id.addEventListener('keyup', idValidCheck);

    pw_show.addEventListener('click', pwShowEvent);
    pw.addEventListener('change', pwValidCheck);
    pwChk.addEventListener('change', pwSameCheck);

    email_com_id.addEventListener('change', emailList);
    email_id.addEventListener('change', emailCheckFnc);
    email_addr_id.addEventListener('change', emailCheckFnc);
    email_id.addEventListener('keydown', emailCheckFnc);
    email_addr_id.addEventListener('keydown', emailCheckFnc);

    phone_first_id.addEventListener('change', phoneFnc);
    phone_center_id.addEventListener('change', phoneFnc);
    phone_last_id.addEventListener('change', phoneFnc);

    gender_list_id.addEventListener('change', genderFnc);

    bd_year_id.addEventListener('change', bdFnc);
    bd_month_id.addEventListener('change', bdFnc);
    bd_day_id.addEventListener('change', bdFnc);

    frnd_id.addEventListener('change', frndFnc);

    chk_allTerms.addEventListener('click', allTermsChk);
    chk_mainTerms.addEventListener('click', termsChk);
    chk_infoTerms.addEventListener('click', termsChk);
    mkr_email.addEventListener('click', termsChk);
    mkr_push.addEventListener('click', termsChk);

    btnSignup.addEventListener('click', loginFnc);


    function termsChk() {
        if (chk_mainTerms.checked && chk_infoTerms.checked) {
            termsCheck = true;
        } else {
            termsCheck = false;
        };

        if (chk_mainTerms.checked && chk_infoTerms.checked && mkr_email.checked && mkr_push.checked) {
            chk_allTerms.checked = true;
            termsCheck = true;
        } else {
            chk_allTerms.checked = false;
        };
        console.log(termsCheck);
    }


    function allTermsChk() {
        if (this.checked) {
            AllTerms.forEach((TermEl) => {
                TermEl.checked = true;
                termsCheck = true;
            });
        } else {
            AllTerms.forEach((TermEl) => {
                TermEl.checked = false;
                termsCheck = false;
            });
        };
        console.log(termsCheck);
    }

    function pwShowEvent() {
        if (pw_show.checked) {
            pw.setAttribute("type", "text");
            pwChk.setAttribute("type", "text");
        } else {
            pw.setAttribute("type", "password");
            pwChk.setAttribute("type", "password");
        };
    };

    function nameEvent() {
        let getname = this.value;
        let nameLength = getname.length;
        console.log(nameLength);

        if (nameLength > 0) {
            this.style.borderColor = "green";
            this.style.borderWidth = "2px";
            nameCheck = true;
            nameTemp = getname;
        } else {
            this.style.borderColor = "red";
            this.style.borderWidth = "2px";
            nameCheck = false;
            nameTemp = "";
        };
    };

    function idDupCheck() {
        let getid = input_id.value;
        console.log(getid);

        if (getid !== " " && getid !== "" && getid !== null && getid !== undefined) {
            for (let i = 0; i < accountListCount; i++) {
                let data_id = accountList[i].id;

                if (getid == data_id) {
                    console.log('Id Matched');
                    sameIdCheck = true;
                    break;
                } else {
                    console.log('Id not Matched');
                    sameIdCheck = false;
                };
            };

            if (!sameIdCheck) {
                text_IDWarn.innerHTML = "<i class='fas fa-check-circle'>" + "</i> " + "사용 가능한 아이디입니다.";
                text_IDWarn.style.color = "green";
                idCheck = true;
                idTemp = getid;
                input_id.style.borderColor = "green";
                input_id.style.borderWidth = "2px";
            } else {
                text_IDWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " +
                    "이미 사용중인 아이디입니다.";
                text_IDWarn.style.color = "red";
                idCheck = false;
                idTemp = "";
                input_id.style.borderColor = "red";
                input_id.style.borderWidth = "2px";
            };
        } else {
            text_IDWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " +
                "아이디를 입력해주세요.";
            text_IDWarn.style.color = "red";
            idCheck = false;
            idTemp = "";
            input_id.style.borderColor = "red";
            input_id.style.borderWidth = "2px";
        };

    };

    function idValidCheck() {
        let getid = input_id.value;

        let isValidID = idRegcheck.test(getid);

        if (isValidID) {
            text_IDWarn.innerHTML = "";
            text_IDWarn.style.color = "green";
            input_id.style.borderColor = "green";
            input_id.style.borderWidth = "2px";

        } else {
            text_IDWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " +
                "아이디는 5~16자,영문 및 숫자로만 입력하여 주세요.";
            text_IDWarn.style.color = "red";
            input_id.style.borderColor = "red";
            input_id.style.borderWidth = "2px";
        };
    };


    function pwValidCheck() {
        let getpw = pw.value;

        let isvalidPW = pwRegcheck.test(getpw);

        if (isvalidPW) {
            text_PWWarn.innerHTML = "<i class='fas fa-check-circle'>" + "</i> " + "사용 가능한 비밀번호입니다.";
            text_PWWarn.style.color = "green";
            pw.style.borderColor = "green";
            pw.style.borderWidth = "2px";

        } else {
            text_PWWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " +
                "비밀번호는 6~16자, 영문, 숫자, 특수문자로만 입력하여 주세요.";
            text_PWWarn.style.color = "red";
            pw.style.borderColor = "red";
            pw.style.borderWidth = "2px";
        };
    };

    function pwSameCheck() {
        let getpw = pw.value;
        let getpwcheck = pwChk.value;

        if (getpw == getpwcheck) {
            text_PWChkWarn.innerHTML = "<i class='fas fa-check-circle'>" + "</i> " + "비밀번호가 일치합니다.";
            text_PWChkWarn.style.color = "green";
            pwChk.style.borderColor = "green";
            pwChk.style.borderWidth = "2px";
            pwTemp = getpw;
            pwCheck = true;

        } else {
            text_PWChkWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " +
                "비밀번호가 일치하지 않습니다.";
            text_PWChkWarn.style.color = "red";
            pwChk.style.borderColor = "red";
            pwChk.style.borderWidth = "2px";
            pwTemp = "";
            pwCheck = false;
        };
    };

    function emailList() {
        let options = this.options;
        let index = options.selectedIndex;
        let emailAddr = options[index].value;
        email_addr_id.setAttribute("value", emailAddr);

        let email_first = email_id.value;
        let email_last = email_addr_id.value;

        if ((email_first.length > 0) && (email_last.length > 0)) {
            text_EmailWarn.innerHTML = "<i class='fas fa-check-circle'>" + "</i> " + "이메일 확인";
            text_EmailWarn.style.color = "green";
            email_id.style.borderColor = "green";
            email_id.style.borderWidth = "2px";
            email_addr_id.style.borderColor = "green";
            email_addr_id.style.borderWidth = "2px";
            emailTemp = email_first + "@" + email_last;
            emailCheck = true;
            console.log(emailTemp);
        } else {
            text_EmailWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " + "이메일을 정확히 입력해주세요.";
            text_EmailWarn.style.color = "red";
            email_id.style.borderColor = "red";
            email_id.style.borderWidth = "2px";
            email_addr_id.style.borderColor = "red";
            email_addr_id.style.borderWidth = "2px";
            emailTemp = "";
            emailCheck = false;
            console.log(emailTemp);
        };
    };

    function emailCheckFnc() {
        let email_first = email_id.value;
        let email_last = email_addr_id.value;

        if ((email_first.length > 0) && (email_last.length > 0)) {
            text_EmailWarn.innerHTML = "<i class='fas fa-check-circle'>" + "</i> " + "이메일 확인";
            text_EmailWarn.style.color = "green";
            email_id.style.borderColor = "green";
            email_id.style.borderWidth = "2px";
            email_addr_id.style.borderColor = "green";
            email_addr_id.style.borderWidth = "2px";
            emailTemp = email_first + "@" + email_last;
            emailCheck = true;
            console.log(emailTemp);
        } else {
            text_EmailWarn.innerHTML = "<i class='fas fa-exclamation-circle'>" + "</i> " + "이메일을 정확히 입력해주세요.";
            text_EmailWarn.style.color = "red";
            email_id.style.borderColor = "red";
            email_id.style.borderWidth = "2px";
            email_addr_id.style.borderColor = "red";
            email_addr_id.style.borderWidth = "2px";
            emailTemp = "";
            emailCheck = false;
            console.log(emailTemp);
        };
    };

    function phoneFnc() {
        let phone_first = phone_first_id.value;
        let phone_center = phone_center_id.value;
        let phone_last = phone_last_id.value;

        let phoneNum = phone_first + phone_center + phone_last;

        phoneTemp = phoneNum;

        console.log(phoneTemp);

    };

    function genderFnc() {
        let gender = this.value;
        genderTemp = gender;
    };

    function bdFnc() {
        let bd_year = bd_year_id.value;
        let bd_month = bd_month_id.value;
        let bd_day = bd_day_id.value;

        let birthday = bd_year + bd_month + bd_day;

        bdTemp = birthday;

        console.log(bdTemp);
    };

    function frndFnc() {
        let frndvalue = frnd_id.value;

        if (frndvalue.length > 0) {
            frnd_idTemp = frndvalue;
        } else {
            frnd_idTemp = "";
        };

        console.log(frnd_idTemp);
    };

    function loginFnc() {
        if (nameCheck && idCheck && pwCheck && emailCheck && termsCheck && !sameIdCheck) {
            console.log("가입 가능");
            setCookie("userName", nameTemp);
            setCookie("userId", idTemp);
            setCookie("userLogin", "yes");
            location.href = "welcome.html";
        } else {
            console.log("가입 불가");
            if (!nameCheck) {
                nameInput.style.borderColor = "red";
                nameInput.style.borderWidth = "2px";
                nameInput.focus();
            };
            if (!idCheck) {
                input_id.style.borderColor = "red";
                input_id.style.borderWidth = "2px";
                input_id.focus();
            };
            if (!pwCheck) {
                pw.style.borderColor = "red";
                pw.style.borderWidth = "2px";
                pw.focus();
                pwChk.style.borderColor = "red";
                pwChk.style.borderWidth = "2px";
            };
            if (!emailCheck) {
                email_id.style.borderColor = "red";
                email_id.style.borderWidth = "2px";
                email_id.focus();
            }
            if (!termsCheck) {
                chk_mainTerms.focus();
            }
        };
    };
});