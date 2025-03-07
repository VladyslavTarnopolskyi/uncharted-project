import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IPages } from '../../models/base.model';

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
      title: 'Requests',
      path: 'requests',
    },
    {
      title: 'Employees',
      path: 'employees',
    },
  ]
}
