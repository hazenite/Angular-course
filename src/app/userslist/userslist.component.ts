import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../types/users';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-userslist',
  imports: [NgFor],
  templateUrl: './userslist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './userslist.component.scss',
})
export class UserslistComponent {
  @Input() userData: User[] = [];
}
