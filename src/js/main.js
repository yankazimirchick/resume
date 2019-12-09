var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("ImgModal");
let captionText = document.getElementById("caption");
let imageUrl = document.querySelectorAll('#myImg');


for (var i = 0; i < imageUrl.length; ++i) {
    var item = imageUrl[i]; // Вызов myNodeList.item(i) необязателен в JavaScript
    item.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        var str = modalImg.src;
        console.log(str);
        modalImg.src = str.toString().replace('_small', ''); //замена картинки
        captionText.innerHTML = this.alt;
        document.body.style.overflow = 'hidden';
        //console.log(modalImg.src);
    };
    //console.log(i);
}


// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var next = document.getElementsByClassName("next-img")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}
next.onclick = function () {
    var item = document.querySelectorAll('#myImg');
    //   console.log(item.item(2));
    //modalImg.src = "http://127.0.0.1:5500/site/assets/img/portfolio/sites/site-1.jpg";

    //   console.log(modalImg.src); //текущий
    // modalImg.src = item.item(2);
    //modalImg.src = modalImg.src;
}