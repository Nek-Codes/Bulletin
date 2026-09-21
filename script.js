* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    min-height: 100%;
}

body {
    background: #eeeae3;
    font-family: Georgia, "Times New Roman", serif;

    display: flex;
    justify-content: center;

    overflow-x: hidden;
}

/* Main container */

.bulletin-container {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 20px;
}

/* Book */

.book {
    width: min(94vw, 1120px);

    aspect-ratio: 297 / 210;

    perspective: 1800px;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* Page */

.page {
    width: 100%;
    height: 100%;

    position: relative;

    background: white;

    overflow: hidden;

    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.20),
        0 4px 10px rgba(0, 0, 0, 0.10);

    transform-origin: left center;

    backface-visibility: hidden;
}

/* Bulletin image */

.page img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    user-select: none;
    -webkit-user-drag: none;
}

/* Page turning */

.page.flip-next {
    animation: flipNext 0.75s ease-in-out;
}

.page.flip-prev {
    animation: flipPrev 0.75s ease-in-out;
}

@keyframes flipNext {

    0% {
        transform:
            perspective(1800px)
            rotateY(0deg);
    }

    45% {
        transform:
            perspective(1800px)
            rotateY(-90deg);
    }

    100% {
        transform:
            perspective(1800px)
            rotateY(0deg);
    }
}

@keyframes flipPrev {

    0% {
        transform:
            perspective(1800px)
            rotateY(0deg);
    }

    45% {
        transform:
            perspective(1800px)
            rotateY(90deg);
    }

    100% {
        transform:
            perspective(1800px)
            rotateY(0deg);
    }
}

/* Controls */

.controls {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 25px;

    margin-top: 25px;
}

/* Buttons */

.controls button {
    width: 48px;
    height: 48px;

    border: none;
    border-radius: 50%;

    background: #ffffff;

    color: #333;

    font-family: Georgia, "Times New Roman", serif;

    font-size: 32px;

    line-height: 1;

    cursor: pointer;

    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.controls button:hover {
    transform: scale(1.08);

    box-shadow:
        0 5px 15px rgba(0, 0, 0, 0.18);
}

.controls button:active {
    transform: scale(0.94);
}

/* Page number */

#pageNumber {
    min-width: 70px;

    text-align: center;

    font-size: 15px;

    letter-spacing: 1px;

    color: #444;
}

/* Hint */

.hint {
    margin-top: 12px;

    color: #777;

    font-size: 12px;

    letter-spacing: 0.5px;

    text-align: center;
}

/* Mobile */

@media (max-width: 700px) {

    .bulletin-container {
        padding: 20px 10px;
    }

    .book {
        width: 96vw;
    }

    .controls {
        margin-top: 18px;

        gap: 18px;
    }

    .controls button {
        width: 42px;
        height: 42px;

        font-size: 28px;
    }

    #pageNumber {
        font-size: 13px;
    }

    .hint {
        font-size: 11px;
    }
}

/* Very small screens */

@media (max-width: 400px) {

    .book {
        width: 98vw;
    }

    .bulletin-container {
        padding-left: 5px;
        padding-right: 5px;
    }
}
