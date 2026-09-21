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

        /*
            A4-style portrait page
        */

        width: 700,
        height: 990,

        /*
            Fixed page size
        */

        size: "fixed",

        /*
            ALWAYS use portrait/single-page mode
        */

        usePortrait: true,

        /*
            Every image is an individual page
        */

        showCover: false,

        /*
            Start at cover
        */

        startPage: 0,

        /*
            Page shadow
        */

        drawShadow: true,
        maxShadowOpacity: 0.45,

        /*
            Flip speed
        */

        flippingTime: 1000,

        /*
            Controls
        */

        useMouseEvents: true,
        mobileScrollSupport: false,

        /*
            Clicking turns ONE page
        */

        disableFlipByClick: false,

        /*
            Swipe sensitivity
        */

        swipeDistance: 30

    });


    /* ==================================================
       PRELOAD ALL PAGES
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
       LOAD PAGES
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
