interface Inputs {
    name: string;
    nota1: string;
    nota2: string;
    nota3: string;
}

function getElements(elementsId : Inputs): any {
    const { name, nota1, nota2, nota3 } = elementsId
    const nome = document.querySelector(name)
    const primeiraNota = document.querySelector(nota1)
    const segundaNota = document.querySelector(nota2)
    const terceiraNota = document.querySelector(nota3)

    console.log(nome, primeiraNota, segundaNota, terceiraNota)

}
console.log(getElements({
    name: "#nome-aluno",
    nota1: "#primeira-nota",
    nota2: "#segunda-nota",
    nota3: "#terceira-nota"
}))


/* Configuranda typescript para frontend
https://www.youtube.com/watch?v=9qJT3t9syFM

*/