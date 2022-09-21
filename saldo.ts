import {cc, cp, iv} from "./conta"

export class Saldo {
    soma: number;
    somar(){
        this.soma = cc + cp - iv
        console.log(`Total: R$${this.soma.toFixed(2)}`)
    }
}
