import { Component } from '@angular/core';
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

export enum EFields {
  subject = 'subject',
  date = 'date',
  fullName = 'fullName',
  email = 'email',
  status = 'status',
  talentSpecialist = 'talentSpecialist',
}
export interface PeriodicElement {
  [EFields.subject]: string;
  [EFields.date]: string;
  [EFields.fullName]: string;
  [EFields.email]: string;
  [EFields.status]: string;
  [EFields.talentSpecialist]: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { subject: 'Hi Team, I share with you my check...', date: new Date(2,2,2022).toISOString(), fullName: 'Test', email: 'email@r.com', status: 'status', talentSpecialist: 'test' },
  { subject: 'Hi Team, I share with you my check...', date: new Date(2,2,2022).toISOString(), fullName: 'Test', email: 'email@r.com', status: 'status', talentSpecialist: 'test' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


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
  displayedColumns: string[] = Object.keys(EFields)
  dataSource = ELEMENT_DATA;

  columns = [
    {
      name: EFields.subject,
      title: 'Email Subject',
    },
    {
      name: EFields.date,
      title: 'Email Date',
    },
    {
      name: EFields.fullName,
      title: 'Full name',
    },
    {
      name: EFields.email,
      title: 'Email',
    },
    {
      name: EFields.status,
      title: 'Status',
    },
    {
      name: EFields.talentSpecialist,
      title: 'Last Talent Specialist',
    },
  ]
}
