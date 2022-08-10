class Cat {
    //values entries 
    private hunger:Array<number> = []
    private happiness:Array<number> =  []
    private tiredness:Array<number> = []
    private loneliness:Array<number> = []
    
    
    private _status = {
        hungerBarr: {
            barra: 0,
            frase: ""
        },
        happinessBar:{
            barra: 0,
            frase: ""
        },
        tirednessBar:{
            barra: 0,
            frase: ""
        },
        lonelinessBar:{
            barra: 0,
            frase: ""
        }
        
    }
    
    //solitário
    fazerCarinho(valor:number){
        if(valor > 10) {
            console.log(`
            
            POR FAVOR INSIRA UM NÚMERO MENOR. O GATINHO NÃO SUPORTA CARINHO
            EM EXECESSO \0/
            Por favor insira um número menor. O gatinho não suporta muito carinho
            
            
            `
            
            
            )
            return
        } else {
            this.loneliness.push(valor)
            this._status.lonelinessBar.barra = this.incrementa(this.loneliness)

            if(this._status.lonelinessBar.barra <= 5) {
                this._status.lonelinessBar.frase = `O seu gatinho ainda está se sentindo solitário.
                Faça mais um pouco de carinho :(. 
                 `
            } else if(this._status.lonelinessBar.barra > 5) {
                this._status.lonelinessBar.frase = ` O seu gatinho não está mais se sentindo
                solitário :D
                `

            }
            
        }

    }

    //aumnetar felicidade
    brincar(valor:number){
        if(valor > 10) {
            console.log(`
            
            POR FAVOR INSIRA UM NÚMERO MENOR. O GATINHO NÃO SUPORTA BRINCAR
            
            EM EXECESSO \0/
            Por favor insira um número menor. O gatinho não suporta muito BRINCAR
            
            
            `
            
            
            )
            return
        }else {

            this.happiness.push(valor)
            this._status.happinessBar.barra = this.incrementa(this.happiness)

            if(this._status.happinessBar.barra <= 5 ) {
                this._status.happinessBar.frase = `
                    O seu gatinho(a) está muito triste. Brinque um pouco mais com 
                    ele :(
                `
            } else if(this._status.happinessBar.barra > 5) {
                this._status.happinessBar.frase = `
                    O seu gatinho(a) está se sentindo muito feliz :D
                `
            }

        }

    }

    colocarParaDormir(valor:number) {
        if(valor > 10) {
            console.log(`
            
            POR FAVOR INSIRA UM NÚMERO MENOR. O GATINHO NÃO SUPORTA DORMIR
            EM EXECESSO \0/
            Por favor insira um número menor. O gatinho não suporta dormir de mais.
            
            
            `
            
            
            )
            return
        } else {
            this.tiredness.push(valor)
            this._status.tirednessBar.barra = this.incrementa(this.tiredness)
    
            if(this._status.tirednessBar.barra <= 5) {
                this._status.tirednessBar.frase =  `
                    Seu(a) gatinho(a), está muito cansado(a). Aumente a barrinha descanço, 
                    colocando-o(a) para dormir
                    .
                `
            } else if(this._status.tirednessBar.barra > 5) {
                this._status.tirednessBar.frase =  `
                    Seu gatinho está cheio de energia!! Que tal
                    brincar um pouco com ele?
                `
            }

        }
    }

    alimentar(valor:number) {
        if(valor > 10) {
            console.log(`
            
            POR FAVOR INSIRA UM NÚMERO MENOR. O GATINHO NÃO SUPORTA COMER MUITO DE VEZ SÓ
            EM EXECESSO \0/
            Por favor insira um número menor. O gatinho não suporta muito COMER MUITO DE VEZ SÓ,
            alimento-o aos poucos.             
            `
            
            
            )
            return
        } else {
            this.hunger.push(valor)
            this._status.hungerBarr.barra = this.incrementa(this.hunger)
    
            if(this._status.hungerBarr.barra <= 5) {
                this._status.hungerBarr.frase = `
                    O seu  gatinha está muita fome!!
                    Alimente-o mais um pouquinho.
                `
            } else if(this._status.hungerBarr.barra > 5) {
                this._status.hungerBarr.frase = `
                    O seu gatinho está com a barrinha cheia.
                `
            }
        }
    }

    get allStatus() {
        return `
        
        Quantidade: ${this._status.lonelinessBar.barra}/10
        Status frase: ${this._status.lonelinessBar.frase}

        Quantidade: ${this._status.happinessBar.barra}/10
        Status frase: ${this._status.happinessBar.frase}

        Quantidade: ${this._status.hungerBarr.barra}/10
        Status frase: ${this._status.hungerBarr.frase}

        Quantidade: ${this._status.tirednessBar.barra}/10
        Status frase: ${this._status.tirednessBar.frase}

        
        `
    }

    get statusLoneliness() {
        return this._status.lonelinessBar.frase
    }

    get statusHappiness() {
        return this._status.happinessBar.frase
    }

    get statusTiredness() {
        return this._status.happinessBar.frase
    }

    get statusHunger(){
        return this._status.hungerBarr.frase
    }



    private incrementa(variavel: Array<number>):number{
        return variavel.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    }
    
}

const marie = new Cat()


marie.fazerCarinho(5)
marie.alimentar(2)
marie.colocarParaDormir(3)
marie.brincar(3)

console.log(marie.allStatus)

