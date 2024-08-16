import {
  Component,
  importProvidersFrom,
  ApplicationConfig,
  NgModule,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponentComponent,
    SideNavComponent,
    MainComponent,

    ReactiveFormsModule,
    MatInputModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testDemo';
}
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom()],
};
