// estou dizendo que irei receber um dado, que será um objeto,
// esse objeto OBRIGATÓRIAMENTE deve ter o campo LABEL
function printLabel(labeledObj: {label: string}) {
    console.log(labeledObj)
}
const myObj = {label: "11", name: "Thalya"}
printLabel(myObj)

//NOTA se eu passar o valor abaixo direto por parm da fubnção
//dar erro.

//printLabel({label: "11", name: "Thalya"})

//Porém seu atribuo este valor para uma variável, o ts deixa o valor passar

/*
const myObj = {label: "11", name: "Thalya"}
printLabel(myObj)

*/


//INTERFACES - utilizadas para descrever requisitos

interface LabeledValue {
    label: string
}
function secondPrintLabel(labeledObj: LabeledValue) {
    console.log(labeledObj)
}
const mySecondObj = {age: 24, name: "Thalya", label: "People"}
//secondPrintLabel(mySecondObj)


// PROPRIEDADES OPCIONAIS

interface SquareConfig {
    color?: string;
    width?: number
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: "white", area: 100}
    
    if(config.color) {
        newSquare.color = config.color
    }

    if(config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = {opacity: 0.96}

//createSquare(mySquare)

// Propriedades somente de leitura 

interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point  = {x: 10, y: 33}

let arrayNames : string[] = ["Thalya", "Fernanda", "Lucas"]
const arrayNames2 : ReadonlyArray<string> = arrayNames

