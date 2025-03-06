import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard',
  },
  {
    path: 'emails',
    loadComponent: () => import('./pages/emails/emails.component').then(m => m.EmailsComponent),
    title: 'Emails'
  },
  {
    path: 'employees',
    loadComponent: () => import('./pages/employees/employees.component').then(m => m.EmployeesComponent),
    title: 'Employees'
  },
];
