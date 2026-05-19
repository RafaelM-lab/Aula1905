const prompt = requiere('prompt-sync')();
let idade = prompt("Digite sua idade: ");

try {
    
    if(isNaN(idade)){
        throw new Error("A idade deve ser numérica")
    }

    if(Number(idade) < 0){
        throw new Error("A idade não pode ser negativa")
    }

    console.log("Idade válida ", idade)

} catch (erro) {
    console.log("Error: ")
}

console.log("Idade válida")