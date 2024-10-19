const QUESTOS_QUIZ = [
    {
        questao: "Cristiano ronaldo ou messi",
        a:'Cristiano ronaldo',
        b:'Messi',
        c:'Neymar',
        d:'Ribama',
        correta:"d",
    },
    {
        questao: 'Qual é o carro mais rapido do Brasil?',
        a:'fusca preto',
        b:'Brasilia amarela',
        c:'ford ka',
        d:'uno com escada',
        correta: 'a'
    },
    {
       questao: 'Qual brawler se da bem em futbrawl?',
       a:'elprimo',
       b:'pipper',
       c:'mortis',
       d:'max',
    },
]




const QUIZ_TITULO = document.querySelector('h1')
const ALTERNATIVA_a = document.querySelector("#texto_a")
const ALTERNATIVA_b = document.querySelector("#texto_b")
const ALTERNATIVA_c = document.querySelector("#texto_b")
const ALTERNATIVA_d = document.querySelector("#texto_d")
const botao = document.querySelector("button")
const QUIZ_CONTAINER = document.querySelector(".container")
const ALTERNATIVA = document.querySelector(".resposta")