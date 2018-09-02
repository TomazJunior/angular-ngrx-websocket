import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx-websocket';
  constructor() { }
  public logout() {
    console.log('user logged out');
  }
}
