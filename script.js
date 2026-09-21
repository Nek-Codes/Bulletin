* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    background: #eeeae2;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}


/* =========================================
   BOOK
========================================= */

.book {
    position: relative;

    width: min(82vw, 760px);
    aspect-ratio: 210 / 297;

    perspective: 3000px;

    cursor: pointer;
}


/* =========================================
   PAGE
========================================= */

.page {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    /*
       IMPORTANT:
       The page turns from the RIGHT edge,
       like a real book.
    */
    transform-origin: right center;

    transform-style: preserve-3d;

    transition:
        transform 1.8s cubic-bezier(
            0.45,
            0.05,
            0.25,
            1
        );

    backface-visibility: hidden;

    overflow: hidden;

    border: none;
    outline: none;
}


/* =========================================
   PAGE IMAGE
========================================= */

.page img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    border: none;
    outline: none;

    user-select: none;
    -webkit-user-drag: none;

    pointer-events: none;
}


/* =========================================
   PAGE EDGE LIGHT
========================================= */

.page::before {
    content: "";

    position: absolute;

    top: 0;
    right: 0;

    width: 45%;
    height: 100%;

    pointer-events: none;

    z-index: 5;

    background:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.02) 20%,
            rgba(255,255,255,0.12) 50%,
            rgba(255,255,255,0.42) 78%,
            rgba(255,255,255,0.65) 100%
        );

    opacity: 0;

    transform-origin: right center;

    transition:
        opacity 0.9s ease,
        transform 1.8s cubic-bezier(
            0.45,
            0.05,
            0.25,
            1
        );
}


/* =========================================
   DEEP PAGE SHADOW
========================================= */

.page::after {
    content: "";

    position: absolute;

    top: -2%;
    right: -3%;

    width: 50%;
    height: 104%;

    pointer-events: none;

    z-index: 6;

    background:
        radial-gradient(
            ellipse at right center,
            rgba(0,0,0,0.30) 0%,
            rgba(0,0,0,0.16) 25%,
            rgba(0,0,0,0.06) 50%,
            transparent 72%
        );

    filter: blur(8px);

    opacity: 0;

    transform-origin: right center;

    transition:
        opacity 0.9s ease,
        transform 1.8s cubic-bezier(
            0.45,
            0.05,
            0.25,
            1
        );
}


/* =========================================
   FLIPPING PAGE
========================================= */

.page.flipped {

    /*
       Turn toward the LEFT.
       This is the important change.
    */
    transform:
        rotateY(180deg)
        rotateX(2deg)
        rotateZ(-0.8deg);
}


/* =========================================
   CURLING LIGHT
========================================= */

.page.flipped::before {

    opacity: 1;

    transform:
        translateX(-8%)
        scaleX(1.25)
        skewY(-3deg);
}


/* =========================================
   CURLING SHADOW
========================================= */

.page.flipped::after {

    opacity: 0.95;

    transform:
        translateX(-12%)
        scaleX(1.35)
        skewY(3deg);
}
