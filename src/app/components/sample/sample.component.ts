import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-sample',
  standalone: true,
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  imports: [CommonModule]
})
export class SampleComponent implements OnInit {
  title = 'Example Component';
  users: User[] = [
    { name: 'John Doe', email: 'john@example.com', age: 30 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  ];

  ngOnInit(): void {
    console.table('ExampleComponent initialized'); //Using console.table for debugging
    // console.log throws an error
  }

  addUser(): void {
    //using let here will throw an error because newUser is never reassigned
    const newUser: User = {
      name: `User ${this.users.length + 1}`,
      email: `user${this.users.length + 1}@example.com`,
      age: Math.floor(Math.random() * 50) + 18,
    };
    this.users.push(newUser);
  }
}