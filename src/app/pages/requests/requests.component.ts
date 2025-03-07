import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
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
  MatTable, MatTableDataSource
} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EEmailFields, IEmail, IEmployee } from '../../common/models/base.model';
import { Router } from '@angular/router';
import { EMAILS_DATA } from './requests.mocks';
import { EMPLOYEES_DATA } from '../employees/employees.mock';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-requests',
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
    DatePipe,
    MatPaginator
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent implements AfterViewInit {
  private readonly router = inject(Router);
  displayedColumns: string[] = Object.keys(EEmailFields)

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
  ];


  dataSource = new MatTableDataSource<IEmail>(EMAILS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDetail(row: IEmail) {
    this.router.navigate(['emails', row.id])
  }
}
