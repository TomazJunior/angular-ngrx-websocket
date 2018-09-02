import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['tomaz.jr@test.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  public login() {
    const val = this.form.value;
    console.log(`login was called ${val}`);
  }

}
