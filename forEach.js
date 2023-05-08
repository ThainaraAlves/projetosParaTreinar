//----------------------------------------------Quando passamos uma function como parametro função, chamamos a função de callback

const notas = [10, 7.5, 6.5, 8];

let somaDasNotas = 0;

notas.forEach( function(nota){
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;
//console.log(media);

//----------------------------------------------Adicionando/somando numeros nos array
const numeros = [10, 9, 7.5, 6];

const numerosAtulizados = numeros.map((numero) => {
    return numero + 1 >= 10 ? 10 : nota  + 1;
})

//console.log(numerosAtulizados);
//----------------------------------------------padronizando array

const nomes = ['thainara alves', 'Thacila silva', 'ARJUNA dantas'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

//console.log(nomesPadronizados);