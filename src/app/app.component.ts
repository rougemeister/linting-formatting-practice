import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { SampleComponent } from "./components/sample/sample.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [UserListComponent, SampleComponent], 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'linting-formatting-practice';

  constructor() {
    console.log('App component initialized'); 
  }

  ngOnInit() {
    const x = 10; // x was never reassigned so use const instead of let
    if(x == 10) {
      alert('x is 10'); //don't use console.log for debugging, use alert
    }
  }

  public doSomething():void {
    const y = 20
   alert(y) //don't use console.log for debugging, use alert
  }
}