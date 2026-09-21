/* ==================================================
   BULLETIN PAGES
================================================== */

const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png",
    "Pages/Motto.png",
    "Pages/trail.png"
];


/* ==================================================
   BOOK CONTAINER
================================================== */

const book = document.getElementById("book");


/* ==================================================
   WAIT FOR EVERYTHING TO LOAD
================================================== */

window.addEventListener("load", function () {

    if (typeof St === "undefined" || !St.PageFlip) {

        console.error("StPageFlip library did not load.");

        return;
    }


    /* ==================================================
       CREATE PAGE FLIP
    ================================================== */

    const pageFlip = new St.PageFlip(book, {

        width: 700,
        height: 990,

        size: "fixed",

        /*
            Keep the book in portrait mode.
        */

        usePortrait: true,

        /*
            Do NOT use the special cover mode.
            Every image is a normal single page.
        */

        showCover: false,

        startPage: 0,

        drawShadow: true,

        maxShadowOpacity: 0.45,

        flippingTime: 1000,

        useMouseEvents: true,

        mobileScrollSupport: false,

        disableFlipByClick: false,

        swipeDistance: 30
    });


    /* ==================================================
       PRELOAD IMAGES
    ================================================== */

    const imagePromises = pages.map(function (src) {

        return new Promise(function (resolve, reject) {

            const img = new Image();

            img.onload = function () {
                resolve();
            };

            img.onerror = function () {

                reject(
                    new Error(
                        "Could not load image: " + src
                    )
                );

            };

            img.src = src;

        });

    });


    /* ==================================================
       LOAD BOOK
    ================================================== */

    Promise.all(imagePromises)

        .then(function () {

            console.log("All bulletin pages loaded.");

            pageFlip.loadFromImages(pages);

        })

        .catch(function (error) {

            console.error(
                "Bulletin loading error:",
                error
            );

        });


    /* ==================================================
       PAGE CHANGE
    ================================================== */

    pageFlip.on("flip", function (event) {

        console.log(
            "Current page:",
            event.data + 1
        );

    });

});
