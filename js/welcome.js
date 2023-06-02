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
import {setCookie,getCookie} from "./cookie_control.js";

document.addEventListener("DOMContentLoaded", () => {

    let name = getCookie("userName");
    let id = getCookie("userId");

    console.log(name);

    const welcome_title = document.querySelector('.welcomeBox h1');

    let welcomeText = "Carhartt WIP에 오신 것을 환영합니다, ";
    welcomeText+= name;
    welcomeText+=" 님!";

    welcome_title.innerHTML = welcomeText;
});