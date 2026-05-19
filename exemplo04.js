const prompt = require("prompt-sync")();

let saldo = 1000;

try {
    let saque = prompt("Digite o valor do saque: ");

    saque = Number(saque);
o
    if (isNaN(saque)) {
        throw new Error("Valor não numérico.");
    }

    if (saque <= 0) {
        throw new Error("O valor deve ser positivo.");
    }

    if (saque > saldo) {
        throw new Error("Saldo insuficiente.");
    }

    saldo -= saque;

    console.log("Saque realizado com sucesso!");
    console.log("Saldo atual: R$" + saldo);

} catch (erro) {
    console.log("Erro:", erro.message);
}