import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardAdmin } from '../dashboard-admin/dashboard-admin';
import { DashboardUser } from '../dashboard-user/dashboard-user';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'admin',
    component: DashboardAdmin,
  },
  {
    path: 'users',
    component: DashboardUser,
  },
];
