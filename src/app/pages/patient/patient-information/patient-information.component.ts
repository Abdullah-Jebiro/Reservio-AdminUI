import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SubSink } from 'subsink';
import { PatientInformationService } from '../service/patient-information.service';
import { PatientInformation } from '../Model/PatientInformation';

@Component({
  selector: 'ngx-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  patientInformation: PatientInformation[] = [];
  isModalOpen = false;
  patientId: number;

  constructor(
    private patientService: PatientInformationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.extractPatientIdFromRoute();
    this.loadPatientInformation();
    this.subscribeToQueryParams();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  extractPatientIdFromRoute(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('patientId'));
  }

  loadPatientInformation(): void {
    this.subs.sink = this.patientService.getPatientInformation(this.patientId)
      .subscribe({
        next: (result) => {
          this.patientInformation = result;
        },
        error: (error) => {
          console.error('Error loading patient information:', error);
        }
      });
  }

  subscribeToQueryParams(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.handleQueryParams(queryParams);
    });
  }

  handleQueryParams(queryParams: ParamMap): void {
    const editMode = queryParams.has('edit');
    const addMode = queryParams.has('add') && queryParams.get('add') === 'true';

    if (editMode || addMode) {
      this.openModal();
    }
  }

  deleteInformation(informationId: number): void {
    this.subs.sink = this.patientService.deleteInformation(this.patientId, informationId)
      .subscribe({
        next: () => {
          this.patientInformation = this.patientInformation.filter(info => info.informationId !== informationId);
        },
        error: (error) => {
          console.error('Error deleting patient information:', error);
        }
      });
  }

  downloadFile(attachedFilePath: string, fileName: string): void {
    this.patientService.downloadFile(this.patientId, attachedFilePath).subscribe(blob => {
      console.log(blob);
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName; // Use the fileName variable to dynamically set the file name with extension
      link.click();
    });
  }
  

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.router.navigate([]);
    this.loadPatientInformation();
  }
  
}
