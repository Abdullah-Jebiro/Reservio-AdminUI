import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { DoctorsGuard } from './shared/guards/doctors.guard';
import { ClinicsGuard } from './shared/guards/clinics.guard';
import { PatientsGuard } from './shared/guards/patients.guard';
import { SchedulesGuard } from './shared/guards/schedules.guard';
import { VacationsGuard } from './shared/guards/vacations.guard';
import { SuperAdminGuard } from './shared/guards/SuperAdmin.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'clinics',
      loadChildren: () => import('./clinics/clinics.module')
        .then(m => m.ClinicsModule),
      canLoad: [ClinicsGuard], // Add guard for clinics route
    },
    {
      path: 'doctors',
      loadChildren: () => import('./doctor/doctor.module')
        .then(m => m.DoctorModule),
      canLoad: [DoctorsGuard], // Add guard for doctors route
    },
    {
      path: 'schedule',
      loadChildren: () => import('./schedule/schedule.module')
        .then(m => m.ScheduleModule),
      canLoad: [SchedulesGuard], // Add guard for schedule route
    },
    {
      path: 'user',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
        canLoad: [SuperAdminGuard], // Add guard for vacation route
    },

    {
      path: 'vacation',
      loadChildren: () => import('./vacation/vacation.module')
        .then(m => m.VacationModule),
      canLoad: [VacationsGuard], // Add guard for vacation route
    },
    {
      path: 'patients',
      loadChildren: () => import('./patient/patient.module')
        .then(m => m.PatientModule),
      canLoad: [PatientsGuard], // Add guard for patients route
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
