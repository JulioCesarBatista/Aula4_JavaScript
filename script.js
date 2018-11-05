
// ESTRUTURA DE LAÇO



// let i = 0;
// let valor = 0;

// while (i <= 10) {
//     console.log(valor);
//     valor += 10;
//     i ++;
//     // passo --;
//     // passo += 1;
//     // passo = passo + 1;
// }



// let nomes = ['Felipe', 'Renan' , 'Bruno' , 'Giselle', 'Camila', 'Eric'];

// for (let nome of nomes) {
//     console.log(nome);

//     nome += ' Top';

//     console.log(nome); 
// }
// console.log(nomes);




// let alunos = [

//     {
//         nome: 'Fulano1',
//         idade: 18,
//         vivo: true
//     },

//     {
//         nome: 'Fulano2',
//         idade: 20,
//         vivo: true
//     },

//     {
//         nome: 'Fulano3',
//         idade: 20,
//         vivo: true
//     },
//     {
//         nome: 'Fulano4',
//         idade: 20,
//         vivo: true
//     },
// ]


// for (let aluno of alunos) {
//     console.log(aluno.nome);
// }

// for (let  i in alunos){
//     if (i % 2 == 0){
//         console.log(`Indice: ${i}`);
//         console.log(`Valor: Objeto de ${alunos[i].nome}`);
//      }

// }


let quantidade = Number(prompt('Quantos degraus você deseja?'));
let i = 0;
let valor = '#';

while (i <= quantidade) {
    console.log(valor);

    valor += '#';
    i++;

}


let caracterNovo = prompt('Por qual caracter você  deseja substituir o #?');
valor = caracterNovo;
j = 0;

while (j <= quantidade) {
    console.log(valor);
    valor += (`${caracterNovo}`);
    j++;
}


