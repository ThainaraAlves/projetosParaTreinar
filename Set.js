//----------------------------------------------Removendo itens repetidos de uma Array
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];

//console.log(nomesAtualizados);
//----------------------------------------------
const numeros = [ 8, 8, 10, 60, 60, 1, 100, 100];

const numerosSemRepeticao = [...new Set(numeros)];
//console.log(numerosSemRepeticao);
//----------------------------------------------

const idade = [18, 23, 23, 25, 29, 29];
const idadeCorreta = [...new Set(idade)];

//console.log(idadeCorreta);