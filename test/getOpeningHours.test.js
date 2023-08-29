const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('1 - Testa se getOpeningHours é função.', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('2 - Testa se a funçao ao nao receber parametro retorna o horario de funcionamento dia e hora', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(hours);
  });
  it('3 - Testa se ao receber dia e horario retorna se o zoo esta aberto', () => {
    const open = 'The zoo is open';
    expect(getOpeningHours('tuesday', '12:30-PM')).toBe(open);
    expect(getOpeningHours('Wednesday', '12:30-PM')).toBe(open);
    expect(getOpeningHours('Thursday', '12:30-PM')).toBe(open);
    expect(getOpeningHours('Friday', '12:30-PM')).toBe(open);
    expect(getOpeningHours('Saturday', '12:30-PM')).toBe(open);
    expect(getOpeningHours('sunday', '12:30-PM')).toBe(open);
  });
  it('4 - Testa se segunda esta fechado.', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Monday', '8:00-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '11:00-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '2:00-PM')).toBe(closed);
    expect(getOpeningHours('Monday', '8:00-PM')).toBe(closed);
  });
  it('5 - Testa se lança o erro ao usar digitos fora do permitido', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrow();
    expect(() => getOpeningHours('Monday', '5:60-PM')).toThrow();
  });
  it('6 - Testa se lança erro ao colocar hora com formato errado', () => {
    expect(() => getOpeningHours('Sunday', '9AM')).toThrow();
    expect(() => getOpeningHours('Sunday', '9:00')).toThrow();
    expect(() => getOpeningHours('Sunday', '9')).toThrow();
  });
  it('7 - Testa se o parametro day lança erro ao ser colocado errado', () => {
    expect(() => getOpeningHours('Rice', '8:00-AM')).toThrow();
    expect(() => getOpeningHours(2, '8:00-AM')).toThrow();
  });
});
