var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("ImgModal");
let captionText = document.getElementById("caption");
let imageUrl = document.querySelectorAll('#myImg');
console.log(imageUrl);
console.log(img);

for (var i = 0; i < imageUrl.length; ++i) {
    var item = imageUrl[i]; // Вызов myNodeList.item(i) необязателен в JavaScript
    item.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.overflow = 'hidden';
    };
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}