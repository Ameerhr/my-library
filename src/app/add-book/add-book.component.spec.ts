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
class AddBookComponent {
  formGroup = new FormGroup({
    input: new FormControl('')
  });
}

describe('TestComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AddBookComponent]
    });

    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check AddBookComponent HTML', () => {
    const fixture = TestBed.createComponent(AddBookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(1);
    expect(compiled.querySelectorAll('button')?.length).toBe(0);
    
  });

  
});