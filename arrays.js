//----------------------------------------------Verificando possiçoes da array com IndexOf()

const cursos = ["Ads", "Arquitetura", "Medicina", "Engenharia"];
const mediaSemestre = [7, 8, 8, 6];

const listaCurosEMedias = [cursos, mediaSemestre]; //-----array de duas dimensoes.

function verificaCursos(curso) {
    if(listaCurosEMedias[0].includes(curso)) {

        const indice = listaCurosEMedias[0].indexOf(curso);
        const mediaCurso = listaCurosEMedias[1][indice];

        //console.log(`A formação de ${curso}, precisa ter a media de ${mediaCurso} `)
    } else {
        //console.log("Não temos esse curso")
    }
}

verificaCursos("Ads");

//----------------------------------------------Desestruturando de lista
const animais = [ 'Foca', 'Macaco',  'Tartaruga', 'Tigre'];
const idades = [5, 2, 50, 12];

const animaisESuasIdades = [animais, idades];

function  verificaAnimais(nome) {
    if(animaisESuasIdades[0].includes(nome)) {

    const [animais, idades] =  animaisESuasIdades;

    const indice = animais.indexOf(nome);
    const idadeAnimais = idades[indice];

    //console.log(`O animal ${nome}, tem ${idadeAnimais} anos de vida`);
} else {
    //console.log("Não temos esse animal em nosso zoologico");
 }
} 

verificaAnimais("Tigre");

//----------------------------------------------

const celulares = ['Apple', 'Motorola', 'Lg', 'Xaiomi'];
const estoque = [8, 5, 4, 2];

const modelosEQuantidades = [celulares, estoque];

function consultaAparelhos(aparelhos) {
    if(modelosEQuantidades[0].includes(aparelhos)){
        const [celulares, estoque] = modelosEQuantidades;

        const indice = celulares.indexOf(aparelhos)
        const quantidade = estoque[indice];

        //console.log(`Aparelhos da marca ${aparelhos} temos ${quantidade} unidades.`);
    } else {
        //console.log("Não temos esse modelos.")
    }
}

consultaAparelhos("Apple");

