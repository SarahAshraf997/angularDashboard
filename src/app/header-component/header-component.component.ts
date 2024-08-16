import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css',
})
export class HeaderComponentComponent {}
