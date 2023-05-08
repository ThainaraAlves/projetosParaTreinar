const alunos = ['Thainara', 'Bryan', 'Thacila', 'Arjuna', 'Thaciane'];
const medias = [8, 7, 4.5, 6, 9];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7 ;
})

//console.log(reprovados);
//----------------------------------------------

const  nomes = ['Chloe','Bryan', 'Thamires', 'Thaciane'];
const  idades = [3, 3, 25, 15];

const menorDeIdade = nomes.filter((nome, indice) => {
    return idades[indice] < 18; 
});

//console.log(menorDeIdade);
