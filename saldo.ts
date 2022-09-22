import {cc, cp} from "./banco"

export class Saldo {
    soma: number;
    somar(){
        this.soma = cc + cp
        console.log(`Total: R$${this.soma.toFixed(2)}`)
    }
}
