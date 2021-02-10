import Tabuleiro from './tabuleiro';

const facilContainer = document.querySelector('.cardsWrapper-facil');
const normalContainer = document.querySelector('.cardsWrapper-normal');
const dificilContainer = document.querySelector('.cardsWrapper-dificil');

const nivelFacil = new Tabuleiro(2, facilContainer);
const nivelNormal = new Tabuleiro(4, normalContainer);
const nivelDificil = new Tabuleiro(8, dificilContainer);

export default function distribuirCartas() {
    nivelFacil.criarTabuleiro(facilContainer)
    nivelNormal.criarTabuleiro(normalContainer)
    nivelDificil.criarTabuleiro(dificilContainer)
}