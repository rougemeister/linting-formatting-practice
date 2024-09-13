import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../interface/user-interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
  `]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
}