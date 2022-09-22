import { Corrente } from "./corrente";
import { Investimento } from "./investimento";
import { Poupanca } from "./poupanca";
import { Saldo } from "./saldo";

class Banco {
    nome: string
    corrente: number
    investimeto: number
    poupanca: number
    saldo: number

    mostrarInfo(){
        console.log(`Nome: ${this.nome}`)
    }
}

let conta = new Banco();
conta.nome = 'wolfgang Amadeus Mozart';
conta.corrente = 50000;
conta.poupanca = 30000;
export let cc = conta.corrente;
export let cp = conta.poupanca;
conta.mostrarInfo();

let contCor = new Corrente();
contCor.corrente = cc;
contCor.mostrarCorrente();

let contPou = new Poupanca();
contPou.poupanca = cp;
contPou.mostrarPoupanca();

let invest = new Investimento();
invest.soma = cc + cp;
invest.mostrarInvest();

let saldo = new Saldo();
saldo.somar();

