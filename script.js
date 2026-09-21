const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];

const book = document.getElementById("book");

let currentPage = 0;
let pageElements = [];


/* Create all pages */
pages.forEach((image, index) => {

    const page = document.createElement("div");

    page.className = "page";

    page.style.zIndex = pages.length - index;

    const img = document.createElement("img");

    img.src = image;
    img.alt = "Bulletin page " + (index + 1);

    page.appendChild(img);

    book.appendChild(page);

    pageElements.push(page);
});


/* Click left/right side */
book.addEventListener("click", function(event) {

    const rect = book.getBoundingClientRect();

    const clickX = event.clientX - rect.left;

    const middle = rect.width / 2;


    /* RIGHT SIDE → NEXT PAGE */

    if (clickX > middle) {

        if (currentPage < pageElements.length - 1) {

            pageElements[currentPage].classList.add("flipped");

            currentPage++;
        }

    }


    /* LEFT SIDE → PREVIOUS PAGE */

    else {

        if (currentPage > 0) {

            currentPage--;

            pageElements[currentPage].classList.remove("flipped");
        }

    }

});
