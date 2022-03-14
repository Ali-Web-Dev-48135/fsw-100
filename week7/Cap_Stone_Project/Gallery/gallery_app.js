'use strict';
// changes color of background.
const colorBtns = document.querySelector(".color-picker");
// color variables
// body background colors 
const BODY_COLOR_SCHEME_ONE = "#f9e6ba ";
const GALLERY_ITEM_BG_COLOR_ONE = "#f2cd75";

const BODY_COLOR_SCHEME_TWO = "#b0e0e6";
const GALLERY_ITEM_BG_COLOR_TWO = "#80daeb";

const BODY_COLOR_SCHEME_THREE= "#fae7b5";
const GALLERY_ITEM_BG_COLOR_THREE = "#ffcc33";

const BODY_COLOR_SCHEME_FOUR = "#ffa07a";
const GALLERY_ITEM_BG_COLOR_FOUR = "#fa8072";

const DEFAULT_BODY_COLOR = "#faebeb";


// font styles and colors hex codes 
const FONT_BLACK = "#353839";
const FONT_PURPLE = "#32174D";
const MAROON_COLOR = "#a40000";


// gallery image holder below 
const GALLERY_IMAGE_HOLDER = document.querySelectorAll(".gallery-grid__item");
// changes the color of body;

const changeColor = () => {
    let BODY_COLOR;
    colorBtns.addEventListener("click", (event) => {
        
        switch(event.target.id) {
            case 'clr-one':
                BODY_COLOR = BODY_COLOR_SCHEME_ONE;
                break;
            case 'clr-two':
                BODY_COLOR = BODY_COLOR_SCHEME_TWO;
                break;
            case 'clr-three':
                BODY_COLOR = BODY_COLOR_SCHEME_THREE;
                break;
            case 'clr-four':
                BODY_COLOR = BODY_COLOR_SCHEME_FOUR;
                break;
            case 'clr-five':
                BODY_COLOR = DEFAULT_BODY_COLOR;
        }        
        document.body.style.background = BODY_COLOR;
        galleryItemBackground(event.target.id);
    })
};

changeColor();

const galleryItemBackground = (bgColor) => {
    let fontColorToSet;
    let bgColorToSet;

    if (bgColor === 'clr-one') {
        fontColorToSet = FONT_PURPLE;
        bgColorToSet = GALLERY_ITEM_BG_COLOR_ONE;
    } else if (bgColor === 'clr-two') {
        fontColorToSet = MAROON_COLOR;
        bgColorToSet = GALLERY_ITEM_BG_COLOR_TWO;
    } else if (bgColor === 'clr-three') {
        fontColorToSet = FONT_PURPLE;
        bgColorToSet = GALLERY_ITEM_BG_COLOR_THREE;
    } else if(bgColor === 'clr-four') {
        fontColorToSet = FONT_BLACK;
        bgColorToSet = GALLERY_ITEM_BG_COLOR_FOUR;
    } else {
        fontColorToSet = FONT_BLACK;
        bgColorToSet = DEFAULT_BODY_COLOR;
    }

    for (const item of GALLERY_IMAGE_HOLDER) {
        
        item.querySelector("p").style.color = `${fontColorToSet}`;
        item.classList.add("box-shadow-class");
        item.style.backgroundColor = `${bgColorToSet}`;
    }
};
