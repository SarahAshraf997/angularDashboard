import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-graph-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './graph-card.component.html',
  styleUrl: './graph-card.component.css',
})
export class GraphCardComponent {
  @Input() Name: string = 'Name';
  @Input() SubTitle: string = 'SubTitle';
  @Input() content: string = 'content';
}
