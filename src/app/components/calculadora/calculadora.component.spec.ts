import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('deve atualizar o resultado corretamente ao somar dois números', () => {
    const p = fixture.nativeElement.querySelector('p');
    component.num1 = 2;
    component.num2 = 4;
    component.somar();
    fixture.detectChanges();
    expect(p.innerText).toBe("Resultado: " + component.result);
  });

  it('deve atualizar as variáveis num1 e num2', () => {
    const num1 = fixture.nativeElement.querySelector('#num1');
    const num2 = fixture.nativeElement.querySelector('#num2');
    num1.value = 2;
    num2.value = 4;
    num1.dispatchEvent(new Event('input'));
    num2.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.num1).toBe(Number(num1.value));
    expect(component.num2).toBe(Number(num2.value));
  });
});
