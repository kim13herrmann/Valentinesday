var noButton = document.getElementById("no");
var yesButton = document.getElementById("yes");
noButton.addEventListener("mouseover", function () {
    var x = Math.random() * 200 - 100;
    var y = Math.random() * 200 - 100;
    noButton.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
});
yesButton.addEventListener("click", function () {
    document.querySelector(".card").innerHTML = "<h1> Yayyy💖 <br> Best Valentine EVER!!👩‍❤️‍💋‍👨 <br> I love you!</h1>";
});
