import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
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
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EPagePath, ERequestFields, IRequests } from '../../common/models/base.model';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { RequestsService } from './requests.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SearchInputComponent } from '../../common/components/search-input/search-input.component';
import { DatePickerComponent } from '../../common/components/date-picker/date-picker.component';


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
    MatPaginator,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, SearchInputComponent, DatePickerComponent
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestsComponent implements OnInit, AfterViewInit {
  private readonly router = inject(Router);
  private readonly requestsService = inject(RequestsService);
  displayedColumns: string[] = Object.keys(ERequestFields)

  columns = [
    {
      name: ERequestFields.requestDate,
      title: 'Request Date',
    },
    {
      name: ERequestFields.fullName,
      title: 'Full name',
    },
    {
      name: ERequestFields.email,
      title: 'Email',
    },
    {
      name: ERequestFields.requestStatus,
      title: 'Request Status',
    },
    {
      name: ERequestFields.benefitProgram,
      title: 'Benefit Program',
    },
    {
      name: ERequestFields.location,
      title: 'Location',
    },
    {
      name: ERequestFields.totalUsed,
      title: 'Total Used (USD)',
    },
  ];

  dataSource = new MatTableDataSource<IRequests>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();

  ngOnInit(): void {
    this.requestsService.getRequests().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDetail() {
    this.router.navigate([EPagePath.requests, EPagePath.request])
  }

}
