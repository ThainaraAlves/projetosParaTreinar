const animais = [ '🦩', '🦜', '🐖', '🦃'];
const nomesAnimais = ['Roseta', 'flor', 'pig', 'natal'];

const juncao = [animais, nomesAnimais];

//console.log(`O flamingo que mora na fazenda se chama ${animais[0,0]} ${nomesAnimais[1, 0]}.`)

//----------------------------------------------Unindo arrays/concactenando com concat();

const insetosLoja1 = [ '🐞', '🦋', '🐝', '🪱'];
const animaisLoja2 = [ '🦩', '🦜', '🐖', '🦃']

const animaisJuntos = insetosLoja1.concat(animaisLoja2);

//console.log(animaisJuntos);

//----------------------------------------------Adicionar elemento no array
const notasThai = [10, 6, 8]
notasThai.push(9)

const notas = (notasThai[0] + notasThai[1] + notasThai[2] + notasThai[3]) / notasThai.length;

//console.log(notas);

//----------------------------------------------caculando arrays.

 const notasThacila = [7, 5.5, 8, 9, 6.5];
 const mediaNotas = (notasThacila[0] + notasThacila[1] + notasThacila[2] + notasThacila[3] + notasThacila[4]) / notasThacila.length;

// console.log(mediaNotas);

