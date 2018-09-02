import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private store: Store<AppState>) {
    this.form = this.fb.group({
      email: ['tomaz.jr@test.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {

    const val = this.form.value;
    this.store.dispatch(new Login({user: val}));
    this.router.navigateByUrl('/rooms');
  }


}
