import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <form [formGroup]="formGroup">
      <input type="text" formControlName="input">
    </form>
  `
})
class SittingComponent {
  formGroup = new FormGroup({
    input: new FormControl('')
  });
}

describe('TestComponent', () => {
  let component: SittingComponent;
  let fixture: ComponentFixture<SittingComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SittingComponent]
    });

    fixture = TestBed.createComponent(SittingComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check SittingComponent HTML', () => {
    const fixture = TestBed.createComponent(SittingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(1);
    expect(compiled.querySelectorAll('button')?.length).toBe(0);
    
  });

  
});