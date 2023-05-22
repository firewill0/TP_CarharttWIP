let list_insta_in = document.querySelector('.list_insta_in');
let target = document.querySelector('.section_insta');
let list_insta_item = list_insta_in.querySelectorAll('a');

list_insta_in.addEventListener('mouseover', function () {
    this.style.animationPlayState = 'paused';
});

list_insta_in.addEventListener('mouseout', function () {
    this.style.animationPlayState = 'running';
});

window.addEventListener('scroll', function () {
    let scrollHeight = window.scrollY;

    // console.log(scrollHeight);
    if (scrollHeight > 3100) {
        list_insta_item.forEach((item) => {
            let pic = item.querySelector('img');
            pic.style.width = '300px';
            pic.style.height = '300px';
        });
        list_insta_in.style.animationPlayState = 'running';
    } else {
        list_insta_item.forEach((item) => {
            let pic = item.querySelector('img');
            pic.style.width = '160px';
            pic.style.height = '160px';
        });
        list_insta_in.style.animationPlayState = 'paused';
    };
});