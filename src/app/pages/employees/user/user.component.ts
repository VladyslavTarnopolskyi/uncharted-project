import { Component } from '@angular/core';
import { MatDialogClose } from '@angular/material/dialog';
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
import { EBenefitFields, ETransactionFields, IBenefit, ITransaction } from '../../../common/models/base.model';
import { BENEFITS, TRANSACTIONS } from '../employees.mock';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    MatDialogClose,
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
    DatePipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  benefitDataSource = new MatTableDataSource<IBenefit>(BENEFITS);
  displayedBenefitColumns: string[] = Object.keys(EBenefitFields);

  transactionsDataSource = new MatTableDataSource<ITransaction>(TRANSACTIONS);
  displayedTransactionColumns: string[] = Object.keys(ETransactionFields);
  transactionColumns = [
    { name: ETransactionFields.date, title: 'Date' },
    { name: ETransactionFields.category, title: 'Category' },
    { name: ETransactionFields.amount, title: 'Amount (UAH)' },
    { name: ETransactionFields.amountUSD, title: 'Amount (USD)' },
    { name: ETransactionFields.attachments, title: 'Attachment' },
  ];
  benefitColumns = [
    { name: EBenefitFields.category, title: 'Category' },
    { name: EBenefitFields.limit, title: 'Half-Yearly Limit (USD)' },
    { name: EBenefitFields.compensation, title: '% Compensation' },
    { name: EBenefitFields.total, title: 'Total Used (USD)' },
    { name: EBenefitFields.remaining, title: 'Remaining (USD)' },
  ];
}
