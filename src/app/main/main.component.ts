import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { GraphCardComponent } from '../graph-card/graph-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent, GraphCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
