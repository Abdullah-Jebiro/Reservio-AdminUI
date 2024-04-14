import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TableUserComponent } from './components/table-user/table-user.component';


@NgModule({
  declarations: [
    TableUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TableUserComponent },
      { path: 'User', component: TableUserComponent },
   


    ])
  ]
})
export class AdminModule { }
