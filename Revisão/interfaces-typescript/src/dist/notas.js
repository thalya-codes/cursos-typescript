function getElements(elementsId) {
    var name = elementsId.name, nota1 = elementsId.nota1, nota2 = elementsId.nota2, nota3 = elementsId.nota3;
    var nome = document.querySelector(name);
    var primeiraNota = document.querySelector(nota1);
    var segundaNota = document.querySelector(nota2);
    var terceiraNota = document.querySelector(nota3);
    console.log(nome, primeiraNota, segundaNota, terceiraNota);
}
console.log(getElements({
    name: "#nome-aluno",
    nota1: "#primeira-nota",
    nota2: "#segunda-nota",
    nota3: "#terceira-nota"
}));
