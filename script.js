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


/* =================================
   BOOK
================================= */

.book {
    position: relative;

    /*
       A4 portrait ratio
       210 : 297
    */

    width: min(
        82vw,
        calc(92vh * 210 / 297),
        760px
    );

    aspect-ratio: 210 / 297;

    perspective: 2200px;
}


/* =================================
   INDIVIDUAL PAGE
================================= */

.page {
    position: absolute;

    inset: 0;

    transform-origin: left center;

    transform-style: preserve-3d;

    transition:
        transform 1.05s cubic-bezier(0.65, 0.05, 0.36, 1);

    cursor: default;
}


/* =================================
   PAGE IMAGE
================================= */

.page img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    user-select: none;
    -webkit-user-drag: none;

    pointer-events: none;
}


/* =================================
   TURNED PAGE
================================= */

.page.flipped {
    transform: rotateY(-180deg);
}


/* =================================
   PAGE SHADOW
================================= */

.page::after {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;

    background:
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.00) 45%,
            rgba(0, 0, 0, 0.18) 100%
        );

    opacity: 0;

    transition: opacity 0.5s ease;
}

.page.flipped::after {
    opacity: 1;
}


/* =================================
   CLICK AREAS
================================= */

.click-area {
    position: absolute;

    top: 0;

    height: 100%;

    z-index: 100;

    cursor: pointer;
}


/* Right side = NEXT */

.click-area.next {
    right: 0;

    width: 32%;
}


/* Left side = PREVIOUS */

.click-area.previous {
    left: 0;

    width: 32%;
}


/* =================================
   MOBILE
================================= */

@media (max-width: 600px) {

    .book {
        width: min(
            94vw,
            calc(92vh * 210 / 297)
        );
    }

    .click-area.next,
    .click-area.previous {
        width: 38%;
    }
}
