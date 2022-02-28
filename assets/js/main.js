const d = document;


const toggleMenu = (selecElem, selecButton, selecOtherBtn) => {
    const $elem = d.querySelector(selecElem);
    const $nav = $elem.children[0];

    d.addEventListener('click', e => {
        if(e.target.matches(selecButton)){
            $elem.classList.toggle('panel--hidden');
            $nav.classList.toggle('nav--hidden');
        }else if(e.target.matches(selecOtherBtn)){
            $elem.classList.toggle('panel--hidden');
            $nav.classList.toggle('nav--hidden');
        }
    })
}


const toggleImage = (selecContainer, selecPrev, selecNext) => {
    const $container = d.querySelector(selecContainer);
    let numberImage = 1;

    d.addEventListener('click', e => {
        if(e.target.matches(selecPrev) || e.target.matches(`${selecPrev} *`))
            numberImage--;
        else if(e.target.matches(selecNext) || e.target.matches(`${selecNext} *`))
            numberImage++;

        if(numberImage < 1) numberImage = 4;
        if(numberImage > 4) numberImage = 1;

        $container.style.backgroundImage = `url(./images/image-product-${numberImage}.jpg)`;
    })
}

const addProducts = (selecMinus, selecPlus, selecCounter) => {
    const $counter = d.querySelector(selecCounter);
    let productsCounter = 0;

    d.addEventListener('click', e => {
        if(e.target.matches(selecMinus)) productsCounter--;
        if(e.target.matches(selecPlus)) productsCounter++;

        if(productsCounter < 0) productsCounter = 0;

        $counter.textContent = `${productsCounter}`;
    })
}


d.addEventListener('DOMContentLoaded', e => {
    toggleMenu('.panel', '.nav__close', '.header-nav__menu');
    toggleImage('.image-container', '.slide--left', '.slide--right');
    addProducts('.quantity__minus', '.quantity__plus', '.quantity__counter');
});