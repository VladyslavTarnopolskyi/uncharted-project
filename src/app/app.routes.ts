import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard',
  },
  {
    path: 'emails',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/emails/emails.component').then(m => m.EmailsComponent),
        title: 'Emails',
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/emails/detailed-email/detailed-email.component').then(m => m.DetailedEmailComponent),
        title: 'Email',
      },
    ],
  },
  {
    path: 'employees',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/employees/employees.component').then(m => m.EmployeesComponent),
        title: 'Employees'
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/employees/user/user.component').then(m => m.UserComponent),
        title: 'User',
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
