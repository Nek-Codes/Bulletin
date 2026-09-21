```javascript
/*
==================================================
BULLETIN PAGES
==================================================
*/

const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];


/*
==================================================
BOOK ELEMENT
==================================================
*/

const book = document.getElementById("book");


/*
==================================================
CREATE STPAGEFLIP
==================================================
*/

const pageFlip = new St.PageFlip(book, {

    /*
        Base A4-style portrait proportions.

        These are the reference dimensions.
        "stretch" allows the engine to resize
        them for the actual screen.
    */

    width: 700,
    height: 990,


    /*
        RESPONSIVE MODE

        The book stretches to its parent
        while respecting the limits below.
    */

    size: "stretch",

    minWidth: 280,
    maxWidth: 760,

    minHeight: 396,
    maxHeight: 1075,


    /*
        Automatically size the parent
        according to the book.
    */

    autoSize: true,


    /*
        First page behaves like a cover.

        This is important because you wanted
        the bulletin to start as ONE page,
        not immediately as a two-page spread.
    */

    showCover: true,


    /*
        Allow portrait mode on narrow screens.
    */

    usePortrait: true,


    /*
        REALISTIC PAGE SHADOW
    */

    drawShadow: true,

    maxShadowOpacity: 0.45,


    /*
        Slightly slower page turn.

        Default is 1000 ms.
    */

    flippingTime: 1400,


    /*
        Mouse + touch interaction.
    */

    useMouseEvents: true,

    mobileScrollSupport: false,


    /*
        Clicking the page is allowed
        to trigger the page turn.
    */

    disableFlipByClick: false,


    /*
        Minimum swipe distance on touch screens.
    */

    swipeDistance: 30
});


/*
==================================================
LOAD THE BULLETIN
==================================================
*/

pageFlip.loadFromImages(pages);


/*
==================================================
OPTIONAL: HANDLE PAGE CHANGES
==================================================

This doesn't change the animation.
It simply keeps the browser aware that
the book has changed pages.
*/


pageFlip.on("flip", function(event) {

    document.title =
        "Bi-monthly Bulletin — Page " +
        (event.data + 1);
});
```
