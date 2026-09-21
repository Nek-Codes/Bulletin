const pages = [
    "Pages/Bi-monthly Bulletin.png",
    "Pages/contents.png"
];

const book = document.getElementById("book");

const STRIPS = 24;

let currentPage = 0;
let turning = false;


/* =========================================
   CREATE PAGE
========================================= */

function createPage(image) {

    const layer = document.createElement("div");

    layer.className = "page-layer";

    const img = document.createElement("img");

    img.className = "page-image";

    img.src = image;

    img.draggable = false;

    layer.appendChild(img);

    return layer;
}


/* =========================================
   INITIAL PAGES
========================================= */

let backPage = createPage(pages[1]);

backPage.classList.add("page-back");

book.appendChild(backPage);


let frontPage = createPage(pages[0]);

frontPage.classList.add("page-front");

book.appendChild(frontPage);


/* =========================================
   CREATE CURL
========================================= */

function createCurl(image) {

    frontPage.innerHTML = "";

    const shadow = document.createElement("div");

    shadow.className = "turn-shadow";

    frontPage.appendChild(shadow);


    for (let i = 0; i < STRIPS; i++) {

        const strip = document.createElement("div");

        strip.className = "page-strip";


        /* Width */

        strip.style.width =
            `${100 / STRIPS}%`;


        /* Position */

        strip.style.left =
            `${(i / STRIPS) * 100}%`;


        /*
           Each strip displays its own
           vertical section of the image.
        */

        strip.style.backgroundImage =
            `url("${image}")`;


        strip.style.backgroundPosition =
            `${(i / (STRIPS - 1)) * 100}% 0`;


        frontPage.appendChild(strip);
    }
}


/* =========================================
   EASING
========================================= */

function easeInOut(t) {

    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
}


/* =========================================
   ANIMATE PAGE CURL
========================================= */

function animateForward() {

    if (turning) return;

    if (currentPage >= pages.length - 1) return;

    turning = true;


    const strips =
        frontPage.querySelectorAll(".page-strip");

    const shadow =
        frontPage.querySelector(".turn-shadow");


    const duration = 1500;

    const start = performance.now();


    function animate(now) {

        let progress =
            (now - start) / duration;

        progress =
            Math.min(progress, 1);


        const eased =
            easeInOut(progress);


        /*
           RIGHT → LEFT

           Rightmost strip begins first.
           Leftmost strip finishes last.
        */

        strips.forEach((strip, i) => {

            const position =
                i / (STRIPS - 1);


            /*
               Reverse position:

               1 = right edge
               0 = left edge
            */

            const fromRight =
                1 - position;


            /*
               Delay the strips progressively.
            */

            const delay =
                fromRight * 0.38;


            let local =
                (eased - delay) /
                (1 - delay);


            local =
                Math.max(0, Math.min(1, local));


            /*
               Smooth curl.
            */

            const curl =
                easeInOut(local);


            /*
               0° → 180°

               This makes each vertical strip
               bend toward the LEFT.
            */

            const angle =
                curl * 180;


            /*
               Slight depth movement.

               Strongest around the middle
               of the page curl.
            */

            const bend =
                Math.sin(curl * Math.PI) *
                28;


            /*
               Slight vertical distortion
               makes the fold feel less flat.
            */

            const tilt =
                Math.sin(curl * Math.PI) *
                1.8;


            strip.style.transform =
                `
                translateZ(${bend}px)
                rotateY(${angle}deg)
                rotateZ(${tilt}deg)
                `;


            /*
               Darker shadow around
               the middle of the curl.
            */

            const shadowAmount =
                Math.sin(curl * Math.PI);


            strip.style.filter =
                `drop-shadow(
                    ${-shadowAmount * 8}px
                    0
                    ${shadowAmount * 10}px
                    rgba(0,0,0,${shadowAmount * 0.20})
                )`;
        });


        shadow.style.opacity =
            Math.sin(eased * Math.PI) * 0.9;


        if (progress < 1) {

            requestAnimationFrame(animate);

        } else {

            finishForward();
        }
    }


    requestAnimationFrame(animate);
}


/* =========================================
   FINISH FORWARD
========================================= */

function finishForward() {

    currentPage++;

    turning = false;


    /*
       The page underneath becomes
       the visible page.
    */

    frontPage.style.display = "none";


    /*
       Rebuild the front layer using
       the next page.

       This lets the same system work
       with many pages later.
    */

    setTimeout(() => {

        if (currentPage < pages.length - 1) {

            backPage.remove();

            backPage =
                createPage(
                    pages[currentPage + 1]
                );

            backPage.classList.add("page-back");

            book.insertBefore(
                backPage,
                frontPage
            );
        }

    }, 20);
}


/* =========================================
   PREVIOUS PAGE
========================================= */

function animateBack() {

    /*
       For now, reload the previous page
       with the same curl system reversed.

       This keeps the interaction simple
       while we build the forward effect.
    */

    if (turning) return;

    if (currentPage <= 0) return;

    turning = true;


    /*
       Previous page becomes the
       new background.
    */

    const previous =
        createPage(
            pages[currentPage - 1]
        );

    previous.classList.add("page-back");

    book.insertBefore(
        previous,
        frontPage
    );


    /*
       Rebuild the current page strips.
    */

    frontPage.style.display = "block";

    createCurl(
        pages[currentPage]
    );


    const strips =
        frontPage.querySelectorAll(".page-strip");

    const shadow =
        frontPage.querySelector(".turn-shadow");


    const duration = 1500;

    const start = performance.now();


    function animate(now) {

        let progress =
            (now - start) / duration;

        progress =
            Math.min(progress, 1);


        const eased =
            easeInOut(progress);


        strips.forEach((strip, i) => {

            const position =
                i / (STRIPS - 1);


            /*
               For backwards movement,
               start from the left.
            */

            const delay =
                position * 0.38;


            let local =
                (eased - delay) /
                (1 - delay);


            local =
                Math.max(0, Math.min(1, local));


            const curl =
                easeInOut(local);


            const angle =
                180 - curl * 180;


            const bend =
                Math.sin(curl * Math.PI) * 28;


            strip.style.transform =
                `
                translateZ(${bend}px)
                rotateY(${angle}deg)
                `;
        });


        shadow.style.opacity =
            Math.sin(eased * Math.PI) * 0.9;


        if (progress < 1) {

            requestAnimationFrame(animate);

        } else {

            currentPage--;

            turning = false;

            frontPage.style.display = "none";
        }
    }


    requestAnimationFrame(animate);
}


/* =========================================
   CLICK CONTROL
========================================= */

book.addEventListener("click", function(event) {

    if (turning) return;


    const rect =
        book.getBoundingClientRect();


    const x =
        event.clientX - rect.left;


    /*
       RIGHT HALF
       = NEXT PAGE
    */

    if (x > rect.width / 2) {

        animateForward();

    }


    /*
       LEFT HALF
       = PREVIOUS PAGE
    */

    else {

        animateBack();
    }
});


/* =========================================
   INITIAL CURL SETUP
========================================= */

createCurl(pages[0]);
