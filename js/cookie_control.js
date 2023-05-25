// 쿠키 제어 스크립트 
// 1차 출처 : W3C를 토대로 약간 수정함
// 가입후 환영 페이지, 또는 인덱스 ,로그인 페이지에서 이름과 아이디 표시 및 로그인 상태 유지에 활용 가능
// 테스트를 위해 브라우저를 닫을 시 쿠키는 자동으로 삭제됨
// DB통합 전까지 테스트 용도로 사용함.

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export {
    setCookie,
    getCookie
};