import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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
import { EDetailRequestFields, EPagePath, ERecipeStatus, IRequest } from '../../../common/models/base.model';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { MatPaginator } from '@angular/material/paginator';
import first from 'lodash/fp/first';
import { DatePickerComponent } from '../../../common/components/date-picker/date-picker.component';
import { SearchInputComponent } from '../../../common/components/search-input/search-input.component';

@Component({
  selector: 'app-request',
  imports: [
    DatePipe,
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
    SearchInputComponent
  ],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly requestsService = inject(RequestsService);

  dataSource = new MatTableDataSource<IRequest>([]);
  displayedColumns: string[] = Object.keys(EDetailRequestFields);
  eStatus = ERecipeStatus;
  columns = [
    {
      name: EDetailRequestFields.transactionDate,
      title: 'Transaction Date',
    },
    {
      name: EDetailRequestFields.category,
      title: 'Category',
    },
    {
      name: EDetailRequestFields.fullName,
      title: 'Payer\'s Name',
    },
    {
      name: EDetailRequestFields.recipient,
      title: 'Recipient',
    },
    {
      name: EDetailRequestFields.recipeAmountLocal,
      title: 'Recipe Amount (Country Currency)',
    },
    {
      name: EDetailRequestFields.recipeAmountUSD,
      title: 'Recipe Amount (USD)',
    },
    {
      name: EDetailRequestFields.paymentPurpose,
      title: 'Payment Purpose',
    },
    {
      name: EDetailRequestFields.recipeStatus,
      title: 'Recipe Status',
    },
  ];

  get userName(): string {
    const name: IRequest | undefined = first(this.dataSource.data);
    return name ? name[EDetailRequestFields.fullName] : 'unknown';
  }

  ngOnInit() {
    this.requestsService.getRequest('asd').subscribe(res => {
      this.dataSource.data = res;
    })
  }

  openDetail(row: IRequest) {
    this.router.navigate([EPagePath.requests, EPagePath.request, row.id])
  }

  returnToPage() {
    this.router.navigate([EPagePath.requests])
  }

  getStatus(status: ERecipeStatus) {
    return this.eStatus.title[status];
  }
}
