/*
function primeiroDecorator(alvo) {
    console.log(alvo)
}


@primeiroDecorator

class SouOAlvo{}

*/


//Todos os decorator possuem com padrão a "variável" target
//que se referência a FUNÇÃO, CLASSE, PROPRIEDADE... alvo
//Quando não passamos nenhum parâmetro na "chamada" do  decorator, basta
// na função decorator add um params, esse param será equivalente ao objeto alvo.


//Já quando passamos algo no parametro da chamada do decorator, esse valor
//será refletido na função decoradora. Veja o exemplo abaixo.
//NOTA: esses parametros são chamados de ASSINATURA. 

function decoratorFactory(texto) {

    return target => {
        console.log(`
        texto param decorator: ${texto}  |
        função alvo do decorator: ${target}
        `)
    }
    
}

@decoratorFactory("Olá, sou um params")
class Pessoa {}
