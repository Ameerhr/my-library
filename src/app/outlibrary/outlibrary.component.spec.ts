import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OutlibraryComponent } from './outlibrary.component';

describe('OutLibraryComponent', () => {
  let component: OutlibraryComponent;
  let fixture: ComponentFixture<OutlibraryComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


    beforeEach(async () => {
        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ]
        });
    
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(OutlibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

  it('check HTML', () => {
    const fixture = TestBed.createComponent(OutlibraryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(1);
});

});