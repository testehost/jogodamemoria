const telas = [...document.querySelectorAll('.areaJogo')];

export default function Slider(unit) {
    telas.forEach((el,index) => {
        el.style.transform = `translateX(-${unit}00%)`;
        if(index >= 1) {
            fadeIn(el.firstElementChild, 400);
            fadeIn(el.firstElementChild.nextElementSibling, 300);
            fadeIn(el.firstElementChild.nextElementSibling.nextElementSibling, 500);
        }
    });

    function fadeIn(element, atraso) {
        element.animate(
            [
              { transform: 'translateX(80px)', opacity: 0 },
              { transform: 'translateX(0)', opacity: 1  }
            ], {
              fill: 'both',
              easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
              duration: 400,
              delay: atraso
            }
        );
    };
}


export { telas }