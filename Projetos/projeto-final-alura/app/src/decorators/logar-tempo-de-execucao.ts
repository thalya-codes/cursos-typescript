
export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, properKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value        
        descriptor.value = function(...args: Array<any>) {
                    const t1 = performance.now()
                    const retorno = metodoOriginal.apply(this, args)
                    const t2 = performance.now()

                    let divisior = 1
                    let unidade = "milisegundos"

                    if(emSegundos) {
                        divisior = 1000
                        unidade = "segundos"
                    }

                    console.log(`O método ${properKey}(),  levou: ${(t2 - t1) / divisior} ${unidade}.`)
                
                    retorno
                }

                return descriptor
             }
}