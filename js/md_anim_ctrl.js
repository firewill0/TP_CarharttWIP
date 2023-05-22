let md_items = document.querySelectorAll('.md_item');
const path_arr = [];

md_items.forEach((md_item, index) => {
    let path_small = "./img/md/md";
    let path_large = "./img/md/md";
    path_small += (index + 1);
    path_small += "_large.jpg";
    path_large += (index + 1);
    path_large += ".jpg";
    path_arr.push({
        path_small,
        path_large
    });
    // console.log(path_arr);
    md_item.addEventListener('click', function () {
        let myimg = this.querySelector('img');
        // console.log("my index is", index);
        // console.log(myimg);

        md_items.forEach((item,index2) => {
            let myimg2 = item.querySelector('img');
            item.removeAttribute("id");
            const path1 = path_arr[index2].path_small;
            myimg2.setAttribute("src", path1);
        });

        md_item.setAttribute("id", "md_on");
        const path2 = path_arr[index].path_large;
        myimg.setAttribute("src", path2);
    });
});