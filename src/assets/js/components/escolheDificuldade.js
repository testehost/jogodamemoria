import PreviewCards from './previewCards';
import Slider from './slider';

export default function EscolherDificuldade() {
    document.querySelector('.telaInicial').addEventListener('click', e => {
        if (e.target.classList.contains('facilBtn')) {Slider(1); PreviewCards(400, 700)};
        if (e.target.classList.contains('normalBtn')) {Slider(2); PreviewCards(2000, 500)};
        if (e.target.classList.contains('dificilBtn')) {Slider(3); PreviewCards(5000, 400)};
    }, false);
}
