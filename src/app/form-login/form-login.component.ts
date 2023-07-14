import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Subscription, tap } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'intro-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  subscription!: Subscription;
  data: any;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    // this.getMe();
  }

  onSubmit() {
    const value = {
      username: 'romanblack',
      password: 'password',
    };

    this.subscription = this.loginService
      .login(value)
      .pipe(
        tap((data) => {
          // this.data = data.success;
          this.data = data.data;
        })
      )
      .subscribe();
  }

  private sentToApi() {

  }

  getMe() {
    return this.loginService.getUsers().subscribe(res => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
