import { NgModule } from "@angular/core";
import { ReservationsComponent } from "./reservations/reservations.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbCalendarRangeModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReservationFilterComponent } from './reservation-filter/reservation-filter.component';
import { PatientsTableComponent } from './patients-table/patients-table.component';
import { PatientsFilterComponent } from './patients-filter/patients-filter.component';
import { PatientsFormComponent } from './patients-form/patients-form.component';
import { NgxPaginationModule } from "ngx-pagination";
import { XlsxComponent } from './xlsx/xlsx.component';
import { SharedModule } from "../shared/shared.module";
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PatientInformationFormComponent } from './patient-information-form/patient-information-form.component';


@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationFilterComponent,
    PatientsTableComponent,
    PatientsFilterComponent,
    PatientsFormComponent,
    XlsxComponent,
    PatientInformationComponent,
    PatientInformationFormComponent,
  ],
  exports:[XlsxComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    SharedModule,
    NbCalendarRangeModule,
    NbSelectModule,
    NbDatepickerModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: 'reservations', component: ReservationsComponent,
      },
      {
        path: '', component: PatientsTableComponent,
      }, 
      {
        path: ':patientId/details', component: PatientInformationComponent,
      },
    ])
    
  ]
})
export class PatientModule { }
