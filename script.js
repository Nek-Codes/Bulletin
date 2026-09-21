/* ==================================================
   BULLETIN PAGES
================================================== */
const pages = [
    "Pages/Bi-monthly Bulletin.png", // Cover (Page 1)
    "Pages/contents.png",             // Left page spread (Page 2)
    "Pages/trail.png"                // Right page spread (Page 3)
    "Pages/Motto.png",                // Left page spread (Page 4)
];

/* ==================================================
   BOOK CONTAINER
================================================== */
const book = document.getElementById("book");

/* ==================================================
   WAIT FOR EVERYTHING TO LOAD
================================================== */
window.addEventListener("load", function () {

    /* Check that StPageFlip loaded */
    if (typeof St === "undefined" || !St.PageFlip) {
        console.error("StPageFlip library did not load.");
        return;
    }

    /* ==================================================
       CREATE PAGE FLIP ENGINE
    ================================================== */
    const pageFlip = new St.PageFlip(book, {
        /* Single-page width and height (individual page aspect ratio) */
        width: 700,
        height: 990,

        /* Scale book container responsively while maintaining aspect ratio */
        size: "stretch",
        minWidth: 300,
        maxWidth: 1000,
        minHeight: 424,
        maxHeight: 1414,

        /* SHOW COVER: Page 0 is shown as a single page (Right side) */
        showCover: true,

        /* Allow 2-page spread on wide screens and 1-page on mobile */
        autoSize: true,

        /* Page Flip Animation */
        startPage: 0,
        drawShadow: true,
        maxShadowOpacity: 0.45,
        flippingTime: 1000,

        /* Controls */
        useMouseEvents: true,
        mobileScrollSupport: true,
        disableFlipByClick: false,
        swipeDistance: 30
    });

    /* ==================================================
       PRELOAD ALL IMAGES
    ================================================== */
    const imagePromises = pages.map(function (src) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject(new Error("Could not load image: " + src));
            img.src = src;
        });
    });

    /* ==================================================
       LOAD BOOK AFTER ALL IMAGES ARE READY
    ================================================== */
    Promise.all(imagePromises)
        .then(function () {
            console.log("All bulletin pages loaded.");
            pageFlip.loadFromImages(pages);
        })
        .catch(function (error) {
            console.error("Bulletin loading error:", error);
        });

    /* ==================================================
       PAGE CHANGE LOG
    ================================================== */
    pageFlip.on("flip", function (event) {
        console.log("Current page:", event.data + 1);
    });
});
        .then(function () {
            console.log("All bulletin pages loaded.");
            pageFlip.loadFromImages(pages);
        })
        .catch(function (error) {
            console.error("Bulletin loading error:", error);
        });

    /* ==================================================
       PAGE CHANGE LOG
    ================================================== */
    pageFlip.on("flip", function (event) {
        console.log("Current page:", event.data + 1);
    });
});

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
