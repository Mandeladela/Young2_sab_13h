const QUADRADO = document.querySelector('div.quadrado')


let contagem = 1

QUADRADO.addEventListener ('click', expandir )
QUADRADO.addEventListener ('contextmenu', (evento) => { 
    evento.preventDefault()
    QUADRADO.classList.remove('expandir')
})

function expandir() {
    QUADRADO.classList.add('expandir')
    contagem++
    QUADRADO.textContent = contagem
    if(contagem >= 10) {
        QUADRADO.classList.remove('expandir')
        contagem = 0
    }
    
}

