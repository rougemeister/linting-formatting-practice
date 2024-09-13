import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { SampleComponent } from "./components/sample/sample.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [UserListComponent, SampleComponent], //Fixed to use single quotes
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'linting-formatting-practice';

  constructor() {
    console.log('App component initialized'); //Fixed to use single quotes
  }

  ngOnInit() {
    const x = 10; // x was never reassigned so use const instead of let
    if(x == 10) {
      console.log('x is 10');
    }
  }

  public doSomething():void {
    const y = 20
    console.log(y)
  }
}