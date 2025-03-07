import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { Router } from '@angular/router';
import { EEmployeeFields, IEmployee } from '../../common/models/base.model';
import { EMPLOYEES_DATA } from './employees.mock';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employees',
  imports: [
    MatCell,
    MatCellDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatPaginator,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements AfterViewInit {
  private readonly router = inject(Router);
  displayedColumns: string[] = Object.keys(EEmployeeFields)

  dataSource = new MatTableDataSource<IEmployee>(EMPLOYEES_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  columns = [
    {
      name: EEmployeeFields.fullName,
      title: 'Full Name',
    },
    {
      name: EEmployeeFields.role,
      title: 'Role',
    },
    {
      name: EEmployeeFields.department,
      title: 'Department',
    },
    {
      name: EEmployeeFields.location,
      title: 'Location',
    },
    {
      name: EEmployeeFields.benefitProgram,
      title: 'Benefit Program',
    },
    {
      name: EEmployeeFields.totalCompensation,
      title: 'Total Amount of compensation, USD',
    },
    {
      name: EEmployeeFields.totalUsedCompensation,
      title: 'To Use Total Amount of compensation, USD',
    },
  ]

  openDetail(row: IEmployee) {
    this.router.navigate(['employees', row.id])
  }
}
