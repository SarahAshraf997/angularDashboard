import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../tables/Users';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  public userId: any;
  public data: any;

  constructor(
    private _activeroute: ActivatedRoute,
    private _HttpClient: HttpClient,
    private route: Router
  ) {
    this.userId = _activeroute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.fetchdata();
    // this.data = this.fetchdata.name;
  }
  goPrevious() {
    this.route.navigate(['/Tables']);
  }
  public fetchdata(): any {
    this._HttpClient
      .get<IUser[]>(`https://reqres.in/api/users/${this.userId}`)
      .subscribe((res: any) => {
        this.data = res.data;
        console.log('data=' + this.data);
      });
  }
}
