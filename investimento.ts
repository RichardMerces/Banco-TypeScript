export class Investimento{
    calculo: number
    soma: number
    mostrarInvest(){
        this.calculo = this.soma * 0.10
        console.log(`Investimento: R$${this.calculo.toFixed(2)}`)
    }
}
