import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { UsertablesComponent } from './usertables/usertables.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './tables/search.pipe';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutes,
    ReactiveFormsModule,
    MatInputModule,
    UsertablesComponent,
    SearchPipe,
  ],
})
export class AppModule {}
