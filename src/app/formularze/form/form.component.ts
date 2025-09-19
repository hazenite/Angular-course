import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @ViewChild('login')
  login!: NgModel;
  user = {
    login: '',
    password: '',
  };

  handleSubmit(form: NgForm) {
    console.log(form);
    console.log(this.user);
    console.log(this.login);
  }
}
