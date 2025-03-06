import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IPages } from '../../models/base';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pages: IPages[] = [
    {
      title: 'Dashboard',
      path: 'dashboard',
    },
    {
      title: 'Emails',
      path: 'emails',
    },
    {
      title: 'Employees',
      path: 'employees',
    },
  ]
}
