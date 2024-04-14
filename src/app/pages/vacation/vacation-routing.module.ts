import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScheduleTableComponent } from "../schedule/schedule-table/schedule-table.component";
import { VacationComponent } from "./VacationComponent";
import { VacactionListComponent } from "./vacaction-list/vacaction-list.component";
 
const routes: Routes = [
  {
    path: "",
    component: VacactionListComponent,
    children: [
      {
        path: "vacation-table",
        component: VacactionListComponent,
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacactionRoutingModule {}
export const routedComponents = [VacactionListComponent,VacationComponent];
