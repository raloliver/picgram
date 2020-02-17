import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'pg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.paramMap.get('id'));
  }

  getUserDetails(id: string) {
    this.user$ = this.userService.getUser(id);
  }

  goBack() {
    this.location.back();
  }

}
