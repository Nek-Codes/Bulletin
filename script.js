const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];

const pageContainer = document.getElementById("pageContainer");
const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

if (!pageContainer || !nextPage || !prevPage) {
    console.error("Required DOM elements not found.");
}

let currentPage = 0;


/* Create the pages */

pages.forEach((image, index) => {

    const sheet = document.createElement("div");

    sheet.className = "sheet";

    sheet.style.zIndex = pages.length - index;

    sheet.innerHTML = `
        <div class="page">
            <img src="${image}" alt="Bulletin page ${index + 1}">
        </div>
    `;

    pageContainer.appendChild(sheet);
});


const sheets = document.querySelectorAll(".sheet");


/* NEXT */

nextPage.addEventListener("click", () => {

    if (currentPage < sheets.length - 1) {

        sheets[currentPage].classList.add("flipped");

        currentPage++;
    }

});


/* PREVIOUS */

prevPage.addEventListener("click", () => {

    if (currentPage > 0) {

        currentPage--;

        sheets[currentPage].classList.remove("flipped");
    }

});
