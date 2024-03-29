// Descubra qual é o maior número dentro do array usando recude:

const arrNum1 = [50, 85, -30, 3, 15];

const getBigger = arrNum1.reduce((acc, curr) => acc > curr ? acc : curr, 0);

console.log('Maior número do array é:', getBigger);

// faça uma função que some todos os números pares do array:

const arrNum2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = arrNum2.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0); 

console.log('A soma dos números pares é:', sumEvens);

/* ------------------------------------------------------------------------------------- */

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
];

// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, 
// para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. 
// Você usará tanto o map quanto, dentro dele, o reduce !

const reportBetter = (obj) => obj.map((student) => ({
  name: student.nome,
  lesson: student.materias.reduce((acc, lesson) => acc.nota > lesson.nota ? acc : lesson).name,
}));

console.log('Alunos e suas respectivas matérias favoritas:', reportBetter(estudantes));
