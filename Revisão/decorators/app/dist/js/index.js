/*
function primeiroDecorator(alvo) {
    console.log(alvo)
}


@primeiroDecorator

class SouOAlvo{}

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        `);
    };
}
let Pessoa = class Pessoa {
};
Pessoa = __decorate([
    decoratorFactory("Olá, sou um params")
], Pessoa);
