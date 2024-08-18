import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TablesComponent } from './tables/tables.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactComponent } from './contact/contact.component';
import { UserDetailsComponent } from './user-details/user-details.component';
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
    path: '',
    component: StatisticsComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'UserDetails/:id',
    component: UserDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
