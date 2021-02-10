export default function PreviewCards(tempo, atraso) {
    let cards = [...document.querySelectorAll('.card')];
    cards.forEach(card => {
        let verso = card.firstElementChild.firstElementChild;
        let frente = card.firstElementChild.lastElementChild;
        cardFlip(verso, '0deg', '180deg');
        cardFlip(frente, '180deg', '0deg');

        card.getAnimations().forEach(
            function(animation){
              return animation.finish();
            }
          );
    });

    

    function cardFlip(card, angle1, angle2) {
        card.animate(
            [
              { transform: `rotateY(${angle1})`, offset: 0 },
              { transform: `rotateY(${angle2})`, offset: 0.03 },
              { transform: `rotateY(${angle2})`, offset: 0.95 },
              { transform: `rotateY(${angle1})`, offset: 1.0 },
            ], {
              fill: 'both',
              easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
              duration: tempo,
              delay: atraso
            }
        );
    };

}