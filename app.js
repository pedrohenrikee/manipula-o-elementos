'use strict'

const botaoCadastrar = document.getElementById('cadastrar')

function cadastrarNome () {
    const container = document.getElementById('container')
    const nome = document.getElementById('nome').value
    const cargo = document.getElementById('cargo').value
    const inputFoto = document.getElementById('foto')

    const arquivo = inputFoto.files[0];
    let urlFoto = "./assets/default-profile.png"

    if(arquivo) {
        urlFoto = URL.createObjectURL(arquivo)
    }
    
    const hasInfo = (nome.trim() !== '') && (cargo.trim() !== '')

    if (hasInfo){
        const containerCard = document.createElement('div')
        containerCard.className = 'card'

        const containerImg = document.createElement('img')
        containerImg.className = 'img'
        containerImg.src = urlFoto
        containerImg.alt = `Foto de ${nome}`        

        const containerNome = document.createElement('h2')
        containerNome.textContent = nome

        const containerCargo = document.createElement('p')
        containerCargo.textContent = cargo

        containerCard.append (containerNome, containerImg, containerCargo)

        container.append(containerCard)

        document.querySelector('form').reset()
    }else{
        document.querySelector('form').reportValidity()
    }
}

botaoCadastrar.onclick = cadastrarNome	