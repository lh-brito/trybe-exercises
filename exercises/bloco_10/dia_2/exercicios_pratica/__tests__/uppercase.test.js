// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras
// de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => 
  callback(str.toUpperCase());

test('Verifica se a string retornada está toda em uppercase', (done) => 
  uppercase('test', (callback) => {
    expect(callback).toBe('TEST');
    done();
  })
);
