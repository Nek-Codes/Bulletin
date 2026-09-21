const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];

const book = document.getElementById("book");

window.addEventListener("load", function () {

    if (typeof St === "undefined" || !St.PageFlip) {
        console.error("StPageFlip library did not load.");
        return;
    }

    const pageFlip = new St.PageFlip(book, {

        width: 700,
        height: 990,

        size: "stretch",

        minWidth: 280,
        maxWidth: 700,

        minHeight: 396,
        maxHeight: 990,

        autoSize: true,

        showCover: true,

        usePortrait: true,

        drawShadow: true,
        maxShadowOpacity: 0.45,

        flippingTime: 1400,

        useMouseEvents: true,

        mobileScrollSupport: false,

        disableFlipByClick: false,

        swipeDistance: 30
    });

    const imagePromises = pages.map(function (src) {

        return new Promise(function (resolve, reject) {

            const img = new Image();

            img.onload = resolve;

            img.onerror = function () {
                reject(new Error("Could not load: " + src));
            };

            img.src = src;
        });

    });

    Promise.all(imagePromises)
        .then(function () {

            console.log("All pages loaded.");

            pageFlip.loadFromImages(pages);

        })
        .catch(function (error) {

            console.error(
                "Page loading error:",
                error
            );

        });

});
