const $lista = document.getElementById('lista-js')

function imprimirLista( listaMentores, elemento ){

    elemento.innerHTML = ""

    const fragment = document.createDocumentFragment()

    for (const mentor of listaMentores) {
        const liMentor = crearLi( mentor )
        fragment.appendChild( liMentor )
    }

    elemento.appendChild( fragment )
}

function crearLi( mentor ){
    const li = document.createElement('li')
    li.textContent = mentor.nombre
    return li
}

imprimirLista( mentores, $lista )