import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserNameChangeEvent } from '../types/users';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent {
  @Input()
  user!: User;

  @Output()
  onNameChange = new EventEmitter<UserNameChangeEvent>();

  changeName() {
    const newName = `Lorem Ipsum ${Math.round(Math.random() * 10)}`;

    this.onNameChange.emit({
      id: this.user.id,
      newName,
    });
  }
}
