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
import { EEmployeeFields, IEmployee } from '../../common/models/base.model';
import { EMPLOYEES_DATA } from './employees.mock';
import { MatPaginator } from '@angular/material/paginator';
import { DatePickerComponent } from '../../common/components/date-picker/date-picker.component';
import { SearchInputComponent } from '../../common/components/search-input/search-input.component';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './user/user.component';

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
    DatePickerComponent,
    SearchInputComponent,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements AfterViewInit {
  readonly dialog = inject(MatDialog);
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
  ];

  openDialog() {
    const dialogRef = this.dialog.open(UserComponent, {
      backdropClass: 'employee-overlay',
      panelClass: 'employee-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
