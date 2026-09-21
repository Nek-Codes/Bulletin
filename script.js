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

    /* Check that StPageFlip loaded */

    if (typeof St === "undefined" || !St.PageFlip) {

        console.error("StPageFlip library did not load.");

        return;
    }


    /* ==================================================
       CREATE PAGE FLIP ENGINE
    ================================================== */

    const pageFlip = new St.PageFlip(book, {

        /*
            Base page size.

            These proportions are close to A4 portrait.
        */

        width: 700,
        height: 990,


        /*
            Fixed page geometry.

            CSS scales the whole book to fit
            the available screen.
        */

        size: "fixed",


        /*
            IMPORTANT:

            Every image is treated as a normal page.
            This prevents StPageFlip from creating
            the unwanted extra cover/facing page.
        */

        showCover: true,


        /*
            Portrait behaviour.
        */

        usePortrait: false,


        /*
            Start from the first image.
        */

        startPage: 0,


        /*
            Realistic shadow.
        */

        drawShadow: true,

        maxShadowOpacity: 0.45,


        /*
            Slower page turn.
        */

        flippingTime: 1400,


        /*
            Mouse and touch controls.
        */

        useMouseEvents: true,

        mobileScrollSupport: false,


        /*
            Clicking the page turns it.
        */

        disableFlipByClick: false,


        /*
            Touch swipe distance.
        */

        swipeDistance: 30

    });


    /* ==================================================
       PRELOAD ALL IMAGES
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
       LOAD BOOK AFTER ALL IMAGES ARE READY
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
       PAGE CHANGE LOG
    ================================================== */

    pageFlip.on("flip", function (event) {

        console.log(
            "Current page:",
            event.data + 1
        );

    });

});
