const prompt = require("prompt-sync")();

let saldo = 1000;

let saque = prompt("Digite o valor do saque: ");

saque = Number(saque);

if (isNaN(saque)) {
    console.log("Erro: valor não numérico.");
}
else if (saque <= 0) {
    console.log("Erro: o valor deve ser positivo.");
}
else if (saque > saldo) {
    console.log("Erro: saldo insuficiente.");
}
else {
    saldo = saldo - saque;

    console.log("Saque realizado com sucesso!");
    console.log("Saldo atual: R$" + saldo);
}
tr