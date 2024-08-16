import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [HeaderComponentComponent, MainComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
})
export class DashBoardComponent {}
