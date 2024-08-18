import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit() {
    // Set a timeout of 3 seconds (3000 milliseconds)
    setTimeout(() => {
      // Navigate to the desired route
      this.route.navigate(['/Tables']);
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}
