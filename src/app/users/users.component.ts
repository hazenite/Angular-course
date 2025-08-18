import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User, UserNameChangeEvent } from '../types/users';
import { SingleComponent } from '../single/single.component';
import { UserslistComponent } from '../userslist/userslist.component';

@Component({
  selector: 'app-users',
  imports: [UserslistComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [
    { id: '1', name: 'John', lastName: 'Doe' },
    { id: '2', name: 'Jone', lastName: 'Doe' },
    { id: '3', name: 'Jone', lastName: 'Kochanowski' },
  ];

  usersTable: User[] = [
    { id: '1', name: 'Magda', lastName: 'Doe' },
    { id: '2', name: 'Maria', lastName: 'Doe' },
    { id: '3', name: 'Marian', lastName: 'Kochanowski' },
  ];

  addNewUser() {
    const newUser = { id: '4', name: 'Irena', lastName: 'Doe' };
    this.usersTable = [...this.usersTable, newUser];
  }

  remvoveUser() {
    this.usersTable = this.usersTable.filter(
      (_, index) => index !== this.usersTable.length - 1
    );
  }

  handleNameChange({ id, newName }: UserNameChangeEvent) {
    this.users = this.users.map((user) => {
      if (user.id === id)
        return {
          ...user,
          name: newName,
        };
      return user;
    });
  }
}
