//aqui eu estou informando que esta função irá possui um tipo 
//generico , que o seu parametro também deve ser do mesmo
//tipo generico informado e o seu retorno também será
//do mesmo tipo generico informao
function genericF<genericF>(value:genericF): genericF{
    return value
}

// uma vez que eu informe o tipo do generic
//apenas posso passar dados do tipo que eu informado
//ex
genericF<number>(12)
genericF<string>("Lovely")


//multiplos params & generics

function genericMaisDeUmParam  <Generic1,Generic2, Generic3> (num:Generic1, str:Generic2, boo:Generic3) {
    return boo
}



genericMaisDeUmParam <number,string, boolean> (11, "olá", true)



class ClasseGenerica<Tipo> {
    private arr : Array<Tipo> = []

    adiciona(item: Tipo) {
        this.arr.push(item)
    }

    retornaValores() {
        return this.arr
    }
}
//essa instância da classe apenas irá receber valors do tipo numerico
const clsG = new ClasseGenerica<number>()

clsG.adiciona(125)
console.log(clsG.retornaValores())

const clsGenerica2 = new ClasseGenerica<string>()
clsGenerica2.adiciona("Olá")
clsGenerica2.adiciona("Sou")
clsGenerica2.adiciona("Thalya")
console.log(clsGenerica2.retornaValores())