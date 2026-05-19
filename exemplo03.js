const prompt = requiere('prompt-sync')();

let nome = prompt("Digite o nome: ");
let email = prompt("Digite o email: ");
let senha = prompt("Digite a senha: ");

try {

    if(nome.trim() === ""){
        throw new Error("Nome inválido!")
    }
    if(!email.includes("@")){
        throw new Error("Email inválido!")
    }
    if(senha.length < 6){
        throw new Error("A senha deve ter pelo menos 6 caracteres")
    }
    console.log("Cadastro realizado")
} catch (erro) {
    console.log("Erro: " , erro.message);
}