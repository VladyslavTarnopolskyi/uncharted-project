import { Routes } from '@angular/router';
import { EPagePath } from './common/models/base.model';

export const routes: Routes = [
  {
    path: EPagePath.dashboard,
    pathMatch: 'full',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard',
  },
  {
    path: EPagePath.requests,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/requests/requests.component').then(m => m.RequestsComponent),
        title: 'Requests',
      },
      {
        path: EPagePath.request,
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () => import('./pages/requests/request/request.component').then(m => m.RequestComponent),
            title: 'Request',
          },
          {
            path: ':id',
            loadComponent: () => import('./pages/requests/detailed-request/detailed-request.component').then(m => m.DetailedRequestComponent),
            title: 'Request',
          },
        ]
      },
    ],
  },
  {
    path: EPagePath.employees,
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
    path: EPagePath.login,
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
  },
  {
    path: '**',
    redirectTo: EPagePath.login,
  },
];
