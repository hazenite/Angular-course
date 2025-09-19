import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { InputComponent } from '../input/input.component';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, InputComponent, AsyncPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);
  // loginForm = new FormGroup({
  //   login: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   password: new FormControl(''),
  // });

  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
  });

  data$ = this.loginForm.valueChanges.pipe(
    map((values) => `${values.login}: ${values.password}`)
  );

  handleSubmit() {
    console.log(this.loginForm.controls.login);
  }

  reset() {
    this.loginForm.reset();
  }

  setDefault() {
    this.loginForm.patchValue({
      login: 'Default login',
    });
  }
}
