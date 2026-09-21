const bookElement = document.getElementById("book");

const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];

const pageFlip = new St.PageFlip(bookElement, {

    width: 700,
    height: 990,

    size: "stretch",

    minWidth: 300,
    maxWidth: 760,

    minHeight: 424,
    maxHeight: 1075,

    showCover: true,

    usePortrait: true,

    drawShadow: true,

    flippingTime: 1600,

    useMouseEvents: true,

    mobileScrollSupport: false,

    disableFlipByClick: false,

    showPageCorners: true
});


/* Load bulletin pages */

pageFlip.loadFromImages(pages);
