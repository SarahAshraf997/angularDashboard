import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatBadgeModule, MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() longText: string = 'text';
  @Input() Title: string = 'Title';
  @Input() Medium: string = 'Medium';
  @Input() account_balance_wallet: string = 'account_balance_wallet';
}
