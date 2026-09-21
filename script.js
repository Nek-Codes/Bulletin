const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/Page 2.png"
];

let currentPage = 0;

const page = document.getElementById("page");
const pageImage = document.getElementById("pageImage");

page.addEventListener("click", () => {

    if (currentPage >= pages.length - 1) return;

    // Start the flip
    page.classList.add("flipping");

    // Change image halfway through the animation
    setTimeout(() => {
        currentPage++;
        pageImage.src = pages[currentPage];
    }, 400);

    // Remove animation class
    setTimeout(() => {
        page.classList.remove("flipping");
    }, 800);
});
