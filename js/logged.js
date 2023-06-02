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

import {
    setCookie,
    getCookie
} from "./cookie_control.js";

document.addEventListener("DOMContentLoaded", () => {

    let name = getCookie("userName");
    let id = getCookie("userId");
    let logged = getCookie("userLogin");

    const userPanel = document.querySelector('.UserLogged');
    const btn_Logout = document.querySelector('.btn_Logout');
    const btn_Login = document.querySelector('.btn_Login');
    const btn_Signup = document.querySelector('.btn_Signup');

    if (logged == "yes") {
        userPanel.style.display = "block";
        btn_Logout.style.display = "block";
        btn_Login.style.display = "none";
        btn_Signup.style.display = "none";

        userPanel.innerHTML = id;
    }

    btn_Logout.addEventListener('click', function () {
        document.cookie = "userLogin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
});