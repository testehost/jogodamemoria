import Emojis from './emojis';

export default class Tabuleiro {
    constructor(quant, cont) {
        this.quant = quant;
        this.cont = cont;
    }

    randomizar() {
        const randArr = [...new Set(Emojis.sort(() => Math.random() - 0.5))];
        return randArr.slice(0, this.quant).map(el => [el, el]).flat().sort(() => Math.random() - 0.5)
    }

    criarCard(card) {
        const div1 = document.createElement('div');
        div1.className = 'card';
        const div2 = document.createElement('div');
        div2.className = 'cardSides';
        const back = document.createElement('div');
        back.className = 'back';
        const front = document.createElement('div');
        const emojiWrapper = document.createElement('div');
        emojiWrapper.textContent = card;
        front.appendChild(emojiWrapper);
        front.className = 'front';
        div2.appendChild(back);
        div2.appendChild(front);
        div1.appendChild(div2);
        this.cont.appendChild(div1);
    }

    criarTabuleiro(container) {
        const grade = this.randomizar();
        for(let el of grade) {
            let ell = this.criarCard(el)
        }
    }
}