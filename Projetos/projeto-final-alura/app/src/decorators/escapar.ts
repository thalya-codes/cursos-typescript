export function escapar(
    target:any,
    properKey: string,
    descriptor: PropertyDescriptor) {
    
        const metodoOriginal = descriptor.value;

        //sobreescrevendo o método original
        descriptor.value = function (...args: any[]) {
            let retorno = metodoOriginal.apply(this, args)

            if(typeof retorno === "string") {
                
                /*console.log(`@escapar em ação na classe
                ${this.constructor.name} para o método ${properKey}
                `) */

                retorno = retorno
                .replace(/<script>[\s\S]*?<\/script>/,"")
            }
        }

}