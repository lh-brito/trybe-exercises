// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, 
// retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPpl = () => people.filter(({ nationality, bornIn }) => 
  nationality === 'Australian' && bornIn > 1900 && bornIn < 2001,);

assert.deepStrictEqual(filterPpl()[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filterPpl()[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
