import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PationtComponent } from './pationt.component';

describe('PationtComponent', () => {
  let component: PationtComponent;
  let fixture: ComponentFixture<PationtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PationtComponent]
    });
    fixture = TestBed.createComponent(PationtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
