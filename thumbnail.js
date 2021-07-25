document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
        
        if (targetImage.classList.contains("small")) {
            alert("点击了图片");
             targetImage.classList.remove("small");
       } else {
           alert("点击了图片");
         targetImage.classList.add("small");
}
});
});
