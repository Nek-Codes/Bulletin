const sheet = document.getElementById("sheet1");

let flipped = false;

sheet.addEventListener("click", function () {

    flipped = !flipped;

    if (flipped) {
        sheet.classList.add("flipped");
    } else {
        sheet.classList.remove("flipped");
    }

});
