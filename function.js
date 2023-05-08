 function calculos(numeros) {
   console.log(numeros)
  }

calculos(adicao());
calculos("é a soma de 20 + 5");
calculos("");
calculos("é o resultado da soma.");

function adicao() {
    const pergunta = "soma para mim";
    const calculo = 20 + 5 ;
    return calculo;
}
// console.log(adicao());

//----------------------------------------------

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
// console.log(multiplica(soma(6, 4), soma(4,1)));

//----------------------------------------------

function cumprimenta(){
    return "Ola pessoal"
}
function pessoaQueCumprimenta(pessoa){
//   console.log(`${cumprimenta()} Me chamo ${pessoa}`);
}

pessoaQueCumprimenta("Thainara");

//----------------------------------------------template string ${}

 function meuFilho(){
 return 'Bryan'
}
function idadeFilho(num1, num2){
    return num1 - num2;
}

// //console.log(meuFilho() + " é o filho de Thainara, ele tem " + idadeFilho(2023, 2020) + " anos.");
// console.log(`${meuFilho()} é o filho de Thainara, ele tem 4{idadeFilho(2023, 2020) anos.}`);

//----------------------------------------------soma

const somas = function (num1, num2){ return num1 / num2 }
//console.log(somas(20, 2));

//----------------------------------------------const
const nomeCliente = "Bryan";
const idade = 27;
const bebidaMaior = "Wisky";
const bebidaMenor = "suco";

const pedido = `${nomeCliente} diz: por favor me sirva uma ${idade >= 18 ? bebidaMaior : bebidaMenor}`

//  console.log(pedido); 