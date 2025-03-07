import { Component, inject } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EEmailFields, IEmail } from '../../common/models/base.model';
import { Router } from '@angular/router';
import { EMAILS_DATA } from './email.mocks';



@Component({
  selector: 'app-emails',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    DatePipe
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {
  private readonly router = inject(Router);
  displayedColumns: string[] = Object.keys(EEmailFields)
  dataSource = EMAILS_DATA;

  columns = [
    {
      name: EEmailFields.subject,
      title: 'Email Subject',
    },
    {
      name: EEmailFields.date,
      title: 'Email Date',
    },
    {
      name: EEmailFields.fullName,
      title: 'Full name',
    },
    {
      name: EEmailFields.email,
      title: 'Email',
    },
    {
      name: EEmailFields.status,
      title: 'Status',
    },
    {
      name: EEmailFields.talentSpecialist,
      title: 'Last Talent Specialist',
    },
  ]

  openDetail(row: IEmail) {
    this.router.navigate(['emails', row.id])
  }
}
