import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { PatientInformationService } from '../service/patient-information.service';

@Component({
  selector: 'ngx-patient-information-form',
  templateUrl: './patient-information-form.component.html',
  styleUrls: ['./patient-information-form.component.scss']
})
export class PatientInformationFormComponent implements OnInit, OnDestroy {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  private subs = new SubSink();
  informationForm: FormGroup;
  isEditing = false;
  ErrorMessage: string;
  patientId: number;
  selectedFile: File | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private service: PatientInformationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.extractPatientIdFromRoute();
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  extractPatientIdFromRoute(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('patientId'));
  }

  closeForm(): void {
    const confirmation = confirm('Are you sure you want to close? Any unsaved changes will be lost.');
    if (confirmation) {
      this.closeModal.emit();
    }
  }

  initializeForm(): void {
    this.informationForm = this.formBuilder.group({
      description: [null],
      attachedFile: [null],
    });
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; 
    if (this.selectedFile) {
      if (this.selectedFile.size <= 10 * 1024 * 1024) {
        this.informationForm.patchValue({ attachedFile: this.selectedFile });
      } else {
        this.informationForm.patchValue({ attachedFile: null });
        this.ErrorMessage = 'Max size 10 MB.';
      }
    }
  }

  onSubmit(): void {
    if (this.informationForm.valid && this.selectedFile) { 
      const formData = new FormData();
      formData.append('description', this.informationForm.value.description);
      formData.append('attachedFile', this.selectedFile); // Append the selected file to FormData
  
      this.subs.sink = this.service.addInformation(this.patientId, formData).subscribe({
        next: (result) => {
          console.log('Form submission successful:', result);
          this.informationForm.reset();
        },
        error: (error) => {
          console.error('Form submission error:', error);
        }
      });
    }
  }

}
