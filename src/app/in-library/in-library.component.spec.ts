import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLibraryComponent } from './in-library.component';

describe('InLibraryComponent', () => {
  let component: InLibraryComponent;
  let fixture: ComponentFixture<InLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
