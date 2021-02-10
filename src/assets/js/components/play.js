import { telas, Slider } from './slider';
import DistribuirCartas from './distribuirCartas';
export default function play() {
    let contadora = 0;
    let acertos = 0;
    let comparador = [];
    document.querySelector('.gameArea').addEventListener('click', e => {
        if(e.target.classList.contains('reiniciarBtn')) {
            restartGame();
        };
        if(e.target.classList.contains('card')) {
            contadora += 1;
            let placar = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
            let verso = e.target.firstElementChild.firstElementChild;
            let frente = e.target.firstElementChild.lastElementChild;
            virarCarta(verso, '0deg', '180deg');
            virarCarta(frente, '180deg', '0deg');
            e.target.style.pointerEvents = 'none';
            comparador.push(
                [
                    e.target.firstElementChild.lastElementChild.firstElementChild.textContent,
                    e.target.firstElementChild.lastElementChild
                ]);
            if(comparador.length === 2) {
                if(comparador[0][0] === comparador[1][0]) {
                    comparaCor('var(--green');
                    comparador[0][1].parentElement.parentElement.style.pointerEvents = 'none';
                    comparador[1][1].parentElement.parentElement.style.pointerEvents = 'none';
                    acertos += 1;
                    verificaVencedor(e.target.parentElement.childElementCount)
                } else {
                    comparaCor('var(--red');
                    setTimeout(() => {
                        let cartasRetornadas = [
                            comparador[0][1].parentElement.firstElementChild,
                            comparador[0][1],
                            comparador[1][1].parentElement.firstElementChild,
                            comparador[1][1]
                        ];
                        comparador[0][1].parentElement.parentElement.style.pointerEvents = 'all';
                        comparador[1][1].parentElement.parentElement.style.pointerEvents = 'all';
                        virarCarta(cartasRetornadas[0], '180deg', '0deg');
                        virarCarta(cartasRetornadas[1], '0deg', '180deg');
                        virarCarta(cartasRetornadas[2], '180deg', '0deg');
                        virarCarta(cartasRetornadas[3], '0deg', '180deg');
                        comparaCor('var(--blue');
                    }, 550)
                }
            } else if(comparador.length === 3) {
                comparador.splice(0, 2);
            }
            preenchePlacar(contadora, placar);
        };
        
        function comparaCor(cor) {
            setTimeout(() => {
                comparador[0][1].style.backgroundColor = cor;
                comparador[1][1].style.backgroundColor = cor;
            }, 400)
        }

        function verificaVencedor(tabuleiro) {
            if(acertos === tabuleiro / 2) venceuJogo(contadora)
        }

        function venceuJogo() {
            document.querySelector('.telaFinal').classList.add('telaFinalVisivel');
            document.querySelector('.placarFinal').textContent = `Com ${contadora} movimentos`
        }

    }, false);


    function restartGame() {
        contadora = 0;
        acertos = 0;

        let cards = [...document.querySelectorAll('.card')]
    



        document.querySelector('.telaFinal').classList.remove('telaFinalVisivel');
    
    
        [...document.querySelectorAll('.placar')].forEach((placar) => {
            return preenchePlacar(0, placar);
        });

        cards.forEach(card => {
            let verso = card.firstElementChild.firstElementChild;
            let frente = card.firstElementChild.lastElementChild;
            virarCarta(verso, '0deg', '180deg');
            virarCarta(frente, '180deg', '0deg'); 
        })


    
        setTimeout(() => {
            cards.map(card => card.remove());
            
            DistribuirCartas();
    
            cards.forEach((el) => {
                el.style.pointerEvents = 'all';
            });
        }, 600)
    
    
        
        telas.forEach((el,index) => {
            el.style.transform = `translateX(0)`;
            if(index >= 1) {
                fadeOut(el.firstElementChild, 50);
                fadeOut(el.firstElementChild.nextElementSibling, 90);
                fadeOut(el.firstElementChild.nextElementSibling.nextElementSibling, 40);
            }
        });
    
        function fadeOut(element, atraso) {
            element.animate(
                [
                  { opacity: 1 },
                  { opacity: 0  }
                ], {
                  fill: 'both',
                  easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
                  duration: 100,
                  delay: atraso
                }
            );
        };
    }



    function preenchePlacar(num, local) {
        let text = '';
        switch (num) {
            case num === 1:
                text = 'movimento';
            default:
                text = 'movimentos'
        }
        local.textContent = num + ' ' + text;
    }
    
    
    
    function virarCarta(card, angle1, angle2) {
        card.animate(
            [
              { transform: `rotateY(${angle1})` },
              { transform: `rotateY(${angle2})` },
            ], {
              fill: 'both',
              easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
              duration: 500,
            }
        );
    };
    
    
    document.querySelector('.voltarBtn ').addEventListener('click', restartGame);
}