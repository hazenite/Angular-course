import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type: string = '';

  @Input() name: string = '';

  @Input() group!: FormGroup;

  isInvaild() {
    const control = this.group.get(this.name);

    if (!control) return false;

    return control.touched && control.invalid;
  }
  hasError(errorCode: string) {
    const control = this.group.get(this.name);

    if (!control) return false;

    return control.touched && control.hasError(errorCode);
  }
}
