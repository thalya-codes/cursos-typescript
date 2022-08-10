// estou dizendo que irei receber um dado, que será um objeto,
// esse objeto OBRIGATÓRIAMENTE deve ter o campo LABEL
function printLabel(labeledObj) {
    console.log(labeledObj);
}
var myObj = { label: "11", name: "Thalya" };
printLabel(myObj);
function secondPrintLabel(labeledObj) {
    console.log(labeledObj);
}
var mySecondObj = { age: 24, name: "Thalya", label: "People" };
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = { opacity: 0.96 };
var p1 = { x: 10, y: 33 };
var arrayNames = ["Thalya", "Fernanda", "Lucas"];
var arrayNames2 = arrayNames;
