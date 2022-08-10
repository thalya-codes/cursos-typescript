var ClasseGenerica = (function () {
    function ClasseGenerica() {
        this.arr = [];
    }
    ClasseGenerica.prototype.adiciona = function (item) {
        this.arr.push(item);
    };
    ClasseGenerica.prototype.retornaValores = function () {
        return this.arr;
    };
    return ClasseGenerica;
}());
var clsG = new ClasseGenerica();
clsG.adiciona(125);
console.log(clsG.retornaValores());
