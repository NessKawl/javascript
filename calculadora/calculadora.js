
function velocidade() {
    const txtE = document.getElementById('espaco')
    const txtT = document.getElementById('tempo')
    const resbutton = document.getElementById('resbutton')
    const res = document.getElementById('res')
    const E = Number (txtE.value)
    const T = Number (txtT.value)
    const divisao = E / T
    res.innerHTML = `${divisao}` 
}

resbutton.addEventListener('click', velocidade)


