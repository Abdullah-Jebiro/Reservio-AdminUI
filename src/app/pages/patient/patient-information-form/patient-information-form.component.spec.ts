import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInformationFormComponent } from './patient-information-form.component';

describe('PatientInformationFormComponent', () => {
  let component: PatientInformationFormComponent;
  let fixture: ComponentFixture<PatientInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
