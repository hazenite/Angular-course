import { Component } from '@angular/core';
import { User, UserNameChangeEvent } from '../types/users';
import { SingleComponent } from '../single/single.component';

@Component({
  selector: 'app-users',
  imports: [SingleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [
    { id: '1', name: 'John', lastName: 'Doe' },
    { id: '2', name: 'Jone', lastName: 'Doe' },
    { id: '3', name: 'Jone', lastName: 'Kochanowski' },
  ];

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
