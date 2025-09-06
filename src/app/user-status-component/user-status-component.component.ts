import { Component, inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-user-status-component',
  imports: [],
  templateUrl: './user-status-component.component.html',
  styleUrl: './user-status-component.component.scss',
})
export class UserStatusComponentComponent implements OnInit {
  status: string = '';
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    const isAuth = this.authService.isAuthenticated;
    this.status = isAuth ? 'zalogowany' : 'niezalogowany';
  }
}
