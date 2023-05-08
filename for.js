//----------------------------------------------calculando a media com for
const notas = [10, 20, 30, 40, 50];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

//console.log(`A media das notas é ${media}`)

//---------------------------------------------- for of 

const numeros = [80, 20, 60, 40];

let somaNumeros = 0;

for( let numero of numeros) {
   somaNumeros += numero;
}

const medias = somaNumeros / numeros.length;
 //console.log(somaNumeros);
 
//---------------------------------------------- for of 

const info = [20, 30, 40, 60];

let armazena = 0; 

for ( let soma of info) {
    armazena += soma
}

const resultado = armazena / info.length 
//console.log(resultado);
//---------------------------------------------- percorrer arrays

const numeroPares = [];

for (let i = 0; i <= 100; i+= 2) {
    numeroPares.push(i);
}

// console.log(numeroPares);

//---------------------------------------------- percorrer arrays
const numerosImpar = [];

for ( let i = 1; i <= 50; i += 2) {
    numerosImpar.push(i);
}

console.log(numerosImpar);

