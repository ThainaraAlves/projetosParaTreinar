//----------------------------------------------Remover elemento no array.

const notasThainara = [10, 6, 8, 8]
notasThainara.pop();

 const mediaNotas = (notasThainara[0] + notasThainara[1] + notasThainara[2] + notasThainara[3]) / notasThainara.length;

 //console.log(notasThainara);

 //----------------------------------------------Dividindo uma sala de aula com o metodo slice();

const totalAlunos = ['Thainara', 'Thamires', 'Thacila', 'Silas', 'Henrique', 'Felipe',  'Joao', 'Gilmar', 'lucas', 'Luana'];

const sala1 = totalAlunos.slice(0, totalAlunos.length / 2);
const sala2 = totalAlunos.slice(totalAlunos.length / 2);

//console.log(sala1);
//console.log(sala2);
//----------------------------------------------Removendo alunos com o metodo splice();

  const alunos = ['Thainara', 'Thamires', 'Thacila', 'Felipe', 'Henrique', 'Sillas',  'Joao', 'Gilmar', 'Lucas', 'Luana'];

  alunos.splice(9, 8, "Cupido");
  const salaA = alunos.slice(0, alunos.length / 2);
  const salaB = alunos.slice(alunos.length / 2);

//console.log(salaA);
//console.log(salaB);

//----------------------------------------------

//                  0      1      2     3       4
const insetos = [ '🐞', '🦋', '🐝',  '🐜', '🪰' ];

insetos.splice(1, 0, '🐛');
insetos.splice(3, 1, '🦗' );
insetos.splice(4, 1, ' 🐌');

//console.log(insetos);

//----------------------------------------------Remover o ultimo elemento no array
const notasThaina = [10, 6, 8, 8]
notasThainara.pop();

 const mediaNotasT = (notasThaina[0] + notasThaina[1] + notasThaina[2] + notasThaina[3]) / notasThaina.length;

 //console.log(notasThaina);
 //console.log(mediaNotasT);




