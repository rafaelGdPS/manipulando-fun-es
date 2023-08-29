const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1 - Testa se handlerElephants é função.', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('2 - Testa se receber parametro count retorna numero de elefantes.', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('3 - Testa função handlerElephants ao receber parametro names retorna array com todos os names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('4 - Testa função handlerElephants ao receber parametro averageAge retorna media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('5 - Testa função handlerElephants ao receber parametro location a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('6 - Testa função handlerElephants ao receber parametro popularity retorna a popularidade dos elefantes.', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('7 - Testa função handlerElephants ao receber parametro availability retorna um array com a relação de dias em que é possível visitar os elefantes.', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('8 - Testa se a função handlerElephants nao receber parametro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('9 - Testa se a função handlerElephants receber parametro que nao sejam string retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('10 - Testa se a função handlerElephants ao receber um parametro que não existe retorna NULL', () => {
    expect(handlerElephants('gender')).toBeNull();
  });
});
