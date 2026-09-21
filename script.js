const book = document.getElementById("book");


/*
    YOUR BULLETIN PAGES

    Add more images here later.
*/

const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];


/*
    CREATE PAGE FLIP ENGINE
*/

const pageFlip = new St.PageFlip(book, {

    /*
        Base page dimensions.

        These are proportions rather than
        the final screen size.
    */

    width: 700,
    height: 990,


    /*
        Allow the book to resize with
        the screen.
    */

    size: "stretch",

    minWidth: 300,
    maxWidth: 760,

    minHeight: 424,
    maxHeight: 1075,


    /*
        IMPORTANT

        First page behaves as a cover
        and is displayed by itself.
    */

    showCover: true,


    /*
        Keep portrait behaviour.
    */

    usePortrait: true,


    /*
        Realistic page shadow.
    */

    drawShadow: true,

    maxShadowOpacity: 0.45,


    /*
        Slower page turn.

        Default = 1000 ms.
        We're using 1600 ms.
    */

    flippingTime: 1600,


    /*
        Allow clicking the page
        to turn it.
    */

    disableFlipByClick: false,


    /*
        Mouse/touch interaction.
    */

    useMouseEvents: true,

    mobileScrollSupport: false,


    /*
        Automatically size the
        flipbook to its container.
    */

    autoSize: true
});


/*
    LOAD ALL BULLETIN IMAGES
*/

pageFlip.loadFromImages(pages);
