const prompt = requiere('prompt-sync')();

let numero1 = Number(prompt("Digite um valor: "));
let numero2 = Number(prompt("Digite o outro valor: "));

try {
    if(numero2 === 0){
        throw new Error("Não é possível dividir por ZERO! ")
    }

    let resultado = numero1 / numero2;
    console.log("Resultado ", resultado);

} catch (erro) {
    console.log("Erro: " , erro.message);
}