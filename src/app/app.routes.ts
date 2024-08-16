import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TablesComponent } from './tables/tables.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
  {
    path: 'DashBoard',
    component: DashBoardComponent,
  },
  {
    path: 'Tables',
    component: TablesComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Statistics',
    component: StatisticsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
