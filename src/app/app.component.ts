import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { Logout } from './auth/auth.actions';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-websocket';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );
    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
  }

  constructor(private store: Store<AppState>, private router: Router) {

  }
  public logout() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/login');
  }
}
