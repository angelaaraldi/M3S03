import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve somar dois números corretamente', () => {
    expect(service.somar(2,4)).toEqual(6);
  });

  it('deve subtrair dois números corretamente', () => {
    expect(service.subtrair(2,4)).toEqual(-2);
  });

  it('deve multiplicar dois números corretamente', () => {
    expect(service.multiplicar(2,4)).toEqual(8);
  });

  it('deve dividir dois números corretamente', () => {
    expect(service.dividir(2,4)).toEqual(0.5);
  });

  it('deve lançar um erro ao tentar dividir por zero', () => {
    expect(() => service.dividir(2,0)).toThrowError("Divisão por zero");
  });
});
