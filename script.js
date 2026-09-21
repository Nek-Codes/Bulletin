/* =================================
   BULLETIN PAGES
================================= */

const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];


/* =================================
   BOOK
================================= */

const book = document.getElementById("book");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

let currentPage = 0;


/* =================================
   CREATE ALL PAGES
================================= */

pages.forEach((image, index) => {

    const page = document.createElement("div");

    page.className = "page";

    /*
       Higher z-index = page is on top
    */

    page.style.zIndex = pages.length - index;

    page.innerHTML = `
        <img
            src="${image}"
            alt="Bulletin page ${index + 1}"
        >
    `;

    book.insertBefore(page, nextButton);

});


/* Get all pages */

const pageElements = document.querySelectorAll(".page");


/* =================================
   NEXT PAGE
================================= */

nextButton.addEventListener("click", () => {

    if (currentPage >= pageElements.length - 1) {
        return;
    }

    pageElements[currentPage].classList.add("flipped");

    currentPage++;

});


/* =================================
   PREVIOUS PAGE
================================= */

previousButton.addEventListener("click", () => {

    if (currentPage <= 0) {
        return;
    }

    currentPage--;

    pageElements[currentPage].classList.remove("flipped");

});
