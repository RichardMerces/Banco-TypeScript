import { Banco } from "./banco";
import { Corrente } from "./corrente";
import { Investimento } from "./investimento";
import { Poupanca } from "./poupanca";
import { Saldo } from "./saldo";


let conta = new Banco();
conta.nome = 'Amadeus Mozart';
conta.corrente = 50000;
conta.poupanca = 30000;
conta.investimeto = 5000;
export let cc = conta.corrente;
export let cp = conta.poupanca;
export let iv = conta.investimeto;
conta.mostrarInfo();

let contCor = new Corrente();
contCor.corrente = cc;
contCor.mostrarCorrente();

let contPou = new Poupanca();
contPou.poupanca = cp;
contPou.mostrarPoupanca();

let invest = new Investimento();
invest.investimento = iv;
invest.mostrarInvest();

let saldo = new Saldo();
saldo.somar();

