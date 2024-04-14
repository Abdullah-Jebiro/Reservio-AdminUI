import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacactionListComponent } from './vacaction-list/vacaction-list.component';
import { RouterOutlet } from '@angular/router';
import { VacactionRoutingModule, routedComponents } from './vacation-routing.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    VacactionListComponent,
    ...routedComponents,
   ],
  imports: [
    CommonModule, 
    RouterOutlet, 
    VacactionRoutingModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    FormsModule
  ]
})
export class VacationModule { }
